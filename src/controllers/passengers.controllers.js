import { checkPassenger, createPassenger } from "../repository/passengers.repository.js"


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