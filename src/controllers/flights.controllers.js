import { query } from "express"
import { checkCitiesById, checkCitiesIdByName } from "../repository/cities.repository.js"
import { createFlights, checkFlights, getFlightsByOriginAndDestination } from "../repository/flights.repository.js"
import { formatData, validateDate, validateCity } from "../services/flights.services.js"



export async function postFlights(req, res) {
    const { origin, destination, date } = req.body

    const originCheck = await checkCitiesById(origin)
    if (originCheck.rowCount == 0) return res.status(404).send("Cidade de origem não existe na tabela")

    const destinationCheck = await checkCitiesById(destination)
    if (destinationCheck.rowCount == 0) return res.status(404).send("Cidade de destino não existe na tabela")

    if (origin === destination) return res.status(409).send("Origem e destino devem ser diferentes")

    const dateFormated = formatData(date)


    if (validateDate(dateFormated).error) {
        const errors = validateDate(dateFormated).error
        return res.status(422).send(errors.details.map(detail => detail.message));
    }


    try {

        await createFlights(origin, destination, dateFormated)

        const id = await checkFlights(origin, destination, dateFormated)

        return res.status(201).send(id.rows);

    } catch (err) {
        return res.status(500).send(err.message)
    }

}




export async function getFlights(req, res) {
    const origin = req.query.origin;
    const destination = req.query.destination;

    console.log("validateCity(origin)"+validateCity(origin)+" validateCity(destination)"+validateCity(destination));


    if (!validateCity(origin) && !validateCity(destination)) { var querySel = "flights.id > 0" }
    if (validateCity(origin)  && !validateCity(destination)) { var querySel = `origin_cities.name = '`+origin+`'` }
    if (!validateCity(origin) && validateCity(destination)) { var querySel = `destination_cities.name  = '`+destination+`'` }
    if (validateCity(origin) && validateCity(destination)) { var querySel = `origin_cities.name = '`+origin+`' AND destination_cities.name = '`+destination+`'` }

    console.log("query = "+querySel);

    try {

        const flights = await getFlightsByOriginAndDestination(querySel)

        return res.send(flights.rows);

    } catch (err) {
        return res.status(500).send(err.message+" origin: "+origin+" destination:"+destination)
    }

}