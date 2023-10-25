import Joi from "joi"

export const flightsSchema = Joi.object({
    origin: Joi.number().required(),
    destination: Joi.number().required(),
    date: Joi.date().iso().required()
})