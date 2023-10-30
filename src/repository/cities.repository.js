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

export async function checkCitiesById(id) {

    return (
        db.query(`
        SELECT * FROM cities WHERE id = $1;
        `, [id])
    )

}

export async function checkCitiesIdByName(name) {

    return (
        db.query(`
        SELECT JSON_BUILD_OBJECT('id', id) AS "city" FROM cities WHERE name = $1;
        `, [name])
    )

}