const pool = require('./dbClient');

async function loadAppointment(){

    const query = `select * from appointments`;
    const result = await pool.query(query); //promise pool.query
    return result.rows;

}

async function createAppointment(appointmentData){
    const result = await pool.query(`insert into appointments(first_name,last_name,email,phone_no) values($1,$2,$3,$4)`,
        [appointmentData.firstName,appointmentData.lastName,appointmentData.email,appointmentData.phone]);
    return result.rows;

}

module.exports = {
    loadAppointment,
    createAppointment
}