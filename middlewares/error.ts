import winston from 'winston'
import {NextFunction, Request, Response} from 'express'
import {HttpException} from '../exceptions'

export default function (
	err: HttpException,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const status = err?.status || 500
	const message = err?.message || 'Something failed.'
	winston.error(err.message, err)
	res.status(status).send(message)
}
