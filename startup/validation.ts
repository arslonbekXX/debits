import Joi from 'joi'
import objectID from 'joi-objectid'

export default () => {
	objectID(Joi)
}
