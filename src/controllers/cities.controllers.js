import { checkCities, createCities } from "../repository/cities.repository.js"


export async function postCities(req, res) {
    const { name } = req.body

    const cityCheck = await checkCities(name);
    if (cityCheck.rowCount > 0) return res.status(409).send("Não é permitido adicionar cidades com nomes repetidos")


    try {

        await createCities(name);

        const id = await checkCities(name);

        return res.status(201).send(id.rows);

    } catch (err) {
        return res.status(500).send(err.message)
    }

}