import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postPassengers } from "../controllers/passengers.controllers.js";
import { passengersSchema } from "../schemas/passengers.schemas.js"


const passengersRouter = Router()

passengersRouter.post('/passengers', validateSchema(passengersSchema), postPassengers)

export default passengersRouter