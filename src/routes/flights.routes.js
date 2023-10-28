import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postFlights } from "../controllers/flights.controllers.js";
import { flightsSchema } from "../schemas/flights.schemas.js"


const flightsRouter = Router()

flightsRouter.post('/flights', validateSchema(flightsSchema), postFlights)

export default flightsRouter