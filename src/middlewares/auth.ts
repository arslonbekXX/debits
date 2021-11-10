import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import config from 'config'
import {HttpException} from '../exceptions'

export default function auth(req: Request, res: Response, next: NextFunction) {
	const token = req.header('x-auth-token')
	if (!token)
		throw new HttpException(401, "'Access denied. No token provided.'")

	try {
		const decoded = jwt.verify(token, config.get('jwt_key'))
		// @ts-ignore
		req.user = decoded

		next()
	} catch (err) {
		res.status(400).send('Invalid token.')
	}
}
