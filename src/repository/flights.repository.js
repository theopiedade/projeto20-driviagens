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
        SELECT id AS "id", origin AS "origin", destination AS "destination", TO_CHAR(date, 'DD-MM-YYYY') AS "date" FROM flights WHERE origin = $1 AND destination = $2 AND date = $3;
        `, [origin, destination, date])
    )

}

export async function checkFlightById(id) {

    return (
        db.query(`
        SELECT * FROM flights WHERE id = $1;
        `, [id])
    )

}


export async function getFlightsByOriginAndDestination(queryAdd) {

    var querySelect = `
    SELECT flights.id AS "id", origin_cities.name AS "origin", destination_cities.name AS "destination", TO_CHAR(flights.date,'DD-MM-YYYY') AS "date"
    FROM flights
    JOIN cities AS origin_cities ON flights.origin = origin_cities.id
    JOIN cities AS destination_cities ON flights.destination = destination_cities.id
    WHERE `+queryAdd+` ORDER BY flights.date DESC;`

    console.log(querySelect);

    return (
        db.query(querySelect)
    )

}