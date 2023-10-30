import { checkPassenger, createPassenger, getAllPassengersTravels, getPassengersTravelsByName } from "../repository/passengers.repository.js"
import { validatePassengerName } from "../services/passengers.services.js"


export async function postPassengers(req, res) {
    const { firstName, lastName } = req.body



    try {

        await createPassenger(firstName, lastName)

        const id = await checkPassenger(firstName, lastName);

        return res.status(201).send(id.rows);

    } catch (err) {
        return res.status(500).send(err.message)
    }

}

export async function getPassengersTravels(req, res) {
    const name = req.query.name;
    
    try {
        
        if (validatePassengerName(name)) var check = await getPassengersTravelsByName(name)
        else var check = await getAllPassengersTravels();

        return res.status(201).send(check.rows);

    } catch (err) {
        return res.status(500).send(err.message)
    }

}