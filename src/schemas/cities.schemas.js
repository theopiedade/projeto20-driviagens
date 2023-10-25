import Joi from "joi"

export const citiesSchema = Joi.object({
    name: Joi.string().required()
})