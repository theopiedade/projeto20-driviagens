import { checkPassenger, createPassenger } from "../repository/passenger.repository.js"


export async function postPassengers(req, res) {
    const { firstName, lastName } = req.body



    try {

        await createPassenger(firstName, lastName)

        const id = await checkPassenger(firstName, lastName);

        return res.sendStatus(201)

    } catch (err) {
        return res.status(500).send(err.message)
    }

}