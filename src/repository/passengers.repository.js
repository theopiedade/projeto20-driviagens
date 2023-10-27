import db from "../database/database.connection.js"

export async function createPassenger(firstName, lastName) {

    return (
        db.query(`
        INSERT INTO passengers ("firstName", "lastName")
        VALUES ($1,$2);
        `, [firstName, lastName])
    )

}

export async function checkPassenger(firstName, lastName) {

    return (
        db.query(`
        SELECT id AS "id", "firstName" AS "firstName", "lastName" AS "lastName" FROM passengers WHERE "firstName" = $1 AND "lastName" = $2;
        `, [firstName, lastName])
    )

}

