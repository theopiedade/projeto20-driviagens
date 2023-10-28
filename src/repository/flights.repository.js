import db from "../database/database.connection.js"

export async function createFlights(origin, destination, date) {

    return (
        db.query(`
        INSERT INTO flights (origin, destination, date)
        VALUES ($1,$2, $3);
        `, [origin, destination, date])
    )

}

export async function checkFlights(origin, destination, date) {

    return (
        db.query(`
        SELECT id AS "id", origin AS "origin", destination AS "destination", date AS "date" FROM flights WHERE origin = $1 AND destination = $2 AND date = $3;
        `, [origin, destination, date])
    )

}