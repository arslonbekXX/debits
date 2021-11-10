import {connect} from 'mongoose'
import {info} from 'winston'
import config from 'config'

const dbURL = config.get('dbURL') as string

export default function () {
	connect(dbURL).then(() => info('Connected to MongoDB...'))
}
