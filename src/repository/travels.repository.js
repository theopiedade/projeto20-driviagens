import db from "../database/database.connection.js"

export async function createTravel(passengerId, flightId) {

    return (
        db.query(`
        INSERT INTO travels ("passengerId", "flightId")
        VALUES ($1,$2);
        `, [passengerId, flightId])
    )

}

export async function checkTravel(passengerId, flightId) {

    return (
        db.query(`
        SELECT id AS "id", "passengerId" AS "passengerId", "flightId" AS "flightId" FROM travels WHERE "passengerId" = $1 AND "flightId" = $2;
        `, [passengerId, flightId])
    )

}



