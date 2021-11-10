import {json, Express} from 'express'

import {error} from '../middlewares'

export default function (app: Express) {
	app.use(json())
	app.use(error)
}
