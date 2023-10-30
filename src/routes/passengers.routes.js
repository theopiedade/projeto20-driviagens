import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postPassengers, getPassengersTravels } from "../controllers/passengers.controllers.js";
import { passengerSchema } from "../schemas/passengers.schemas.js"


const passengersRouter = Router()

passengersRouter.post('/passengers', validateSchema(passengerSchema), postPassengers)
passengersRouter.get('/passengers/travels', getPassengersTravels)

export default passengersRouter