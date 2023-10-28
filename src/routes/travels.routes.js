import { Router } from "express";
import { validateSchema } from "../middlewares/validateschema.js";
import { postTravels } from "../controllers/travels.controllers.js";
import { travelsSchema } from "../schemas/travels.schemas.js"


const travelsRouter = Router()

travelsRouter.post('/travels', validateSchema(travelsSchema), postTravels)

export default travelsRouter