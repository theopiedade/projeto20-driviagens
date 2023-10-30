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

export async function checkPassengerById(id) {

    return (
        db.query(`
        SELECT * FROM passengers WHERE id = $1;
        `, [id])
    )

}

export async function getAllPassengersTravels() {
    return (
        db.query(`
        SELECT CONCAT(passengers."firstName", ' ', passengers."lastName") AS "passenger", COUNT(travels."passengerId") AS travels 
        FROM passengers
        LEFT JOIN travels ON passengers.id = travels."passengerId"
        GROUP BY CONCAT(passengers."firstName", ' ', passengers."lastName")
        ORDER BY travels DESC;
        `)
    )

}

export async function getPassengersTravelsByName(name) {

    var querySelect = `
    SELECT CONCAT(passengers."firstName", ' ', passengers."lastName") AS "passenger", COUNT(travels."passengerId") AS travels 
    FROM passengers
    LEFT JOIN travels ON passengers.id = travels."passengerId"
    WHERE passengers."firstName" LIKE '%`+name+`%' OR passengers."lastName" LIKE '%`+name+`%'
    GROUP BY CONCAT(passengers."firstName", ' ', passengers."lastName")
    ORDER BY travels DESC;`

     return (
        db.query(querySelect)
    )
}
