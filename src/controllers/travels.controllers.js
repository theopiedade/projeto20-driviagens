import { checkTravel, createTravel } from "../repository/travels.repository.js"
import { checkPassengerById } from "../repository/passengers.repository.js"
import { checkFlightById } from "../repository/flights.repository.js"


export async function postTravels(req, res) {
    const { passengerId, flightId } = req.body

    const checkPassenger = await checkPassengerById(passengerId)
    if (checkPassenger.rowCount == 0) return res.status(404).send("ID do passageiro inexistente")

    const checkFlight = await checkFlightById(flightId)
    if (checkFlight.rowCount == 0) return res.status(404).send("ID do vôo inexistente")

    try {

        await createTravel(passengerId, flightId)

        const id = await checkTravel(passengerId, flightId);

        return res.status(201).send(id.rows);

    } catch (err) {
        return res.status(500).send(err.message)
    }

}