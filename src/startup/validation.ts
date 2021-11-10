import Joi from 'joi'
// @ts-ignore
import objectID from 'joi-objectid'

export default () => {
	objectID(Joi)
}
