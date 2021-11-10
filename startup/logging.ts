import {add, transports, exceptions} from 'winston'
import 'express-async-errors'
import 'winston-mongodb'

export default function () {
	process.on('unhandledRejection', (err) => {
		throw err
	})

	add(new transports.File({filename: 'error.log', level: 'error'}))
	add(new transports.Console({level: 'info'}))
	add(
		new transports.File({
			filename: 'exceptions.log',
			handleExceptions: true,
			level: 'error',
		}),
	)
	exceptions.handle()
}
