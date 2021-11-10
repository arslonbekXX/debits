import express from 'express'
import {info} from 'winston'
import {logging, validation, routes, db} from './startup'
import config from 'config'

const app = express()

logging()
validation()
routes(app)
db()

const port = config.get('port')
app.listen(port, () => info(`Listening on port ${port}...`))
