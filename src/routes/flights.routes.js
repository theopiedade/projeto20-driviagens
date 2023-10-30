import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postFlights, getFlights } from "../controllers/flights.controllers.js";
import { flightsSchema } from "../schemas/flights.schemas.js"


const flightsRouter = Router()

flightsRouter.post('/flights', validateSchema(flightsSchema), postFlights)
flightsRouter.get('/flights', getFlights)

export default flightsRouter