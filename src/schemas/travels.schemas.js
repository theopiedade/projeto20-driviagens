import Joi from "joi"

export const travelsSchema = Joi.object({
    passengerId: Joi.number().required(),
    flightId: Joi.number().required()
})