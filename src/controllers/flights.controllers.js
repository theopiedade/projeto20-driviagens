import { checkCitiesById } from "../repository/cities.repository.js"
import { createFlights, checkFlights } from "../repository/flights.repository.js"
import { formatData, validateDate } from "../services/flights.services.js"



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