import joi from 'joi'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import config from 'config'

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		minlength: 4,
		maxlength: 50,
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024,
	},
	isAdmin: Boolean,
})

userSchema.methods.generateAuthToken = function () {
	return jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('jwt_key'))
}
const User = mongoose.model('User', userSchema)

function validateUser(user) {
	const schema = joi.object({
		name: joi.string().min(4).max(255).required(),
		email: joi.string().min(5).max(255).email().required(),
		password: joi.string().min(5).max(1024),
	})
	return schema.validate(user)
}

exports.User = User
exports.validate = validateUser
