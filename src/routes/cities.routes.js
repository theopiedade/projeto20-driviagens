import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postCities } from "../controllers/cities.controllers.js";
import { citiesSchema } from "../schemas/cities.schemas.js"


const citiesRouter = Router()

citiesRouter.post('/cities', validateSchema(citiesSchema), postCities)

export default citiesRouter