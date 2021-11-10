import bcrypt from 'bcrypt'
import _ from 'lodash'
import {Router} from 'express'
import {User, validateUser} from '../../models/user/user'
import auth from '../../middlewares/auth'
const router = Router()

router.get('/me', auth, async (req, res) => {
	//@ts-ignore
	const user = await User.findById(req?.user._id).select('-password -__v')
	res.send(user)
})

router.post('/', async (req, res) => {
	const {value, error} = validateUser(req.body)
	if (error) return res.send(error.details[0].message)

	let user = await User.findOne({email: value.email})
	if (user) return res.status(400).send('User already registered.')

	const salt = await bcrypt.genSalt(10)
	value.password = await bcrypt.hash(value.password, salt)

	user = new User(value)
	user.save()

	res.send(_.pick(user, ['name', 'email']))
})

export default router
