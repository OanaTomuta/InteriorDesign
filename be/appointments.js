const pool = require('./dbClient');

async function loadAppointments(){

    const query = `select * from appointments`;
    const result = await pool.query(query); //promise pool.query
    return result.rows;

}

module.exports = {
    loadAppointments
}