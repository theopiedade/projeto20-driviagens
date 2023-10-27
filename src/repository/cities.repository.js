import db from "../database/database.connection.js"

export async function createCities(name) {

    return (
        db.query(`
        INSERT INTO cities (name)
        VALUES ($1);
        `, [name])
    )

}

export async function checkCities(name) {

    return (
        db.query(`
        SELECT id AS "id", name AS "name" FROM cities WHERE name = $1;
        `, [name])
    )

}
