import { Router } from "express"
import passengersRouter from "./passengers.routes.js"
import citiesRouter from "./cities.routes.js"
import flightsRouter from "./flights.routes.js"



const router = Router()

router.use(passengersRouter)
router.use(citiesRouter)
router.use(flightsRouter)

export default router