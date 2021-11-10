import {json, Express} from 'express'
import {users} from '../routes'
import {error} from '../middlewares'

export default function (app: Express) {
	app.use(json())
	app.use('/api/users', users)
	app.use(error)
}
