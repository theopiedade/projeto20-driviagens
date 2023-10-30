import Joi from "joi";


export function validatePassengerName(name) {
    const schema = Joi.string().min(1).max(100).required()
    if (schema.validate(name).error) return false
    else return true  
}
