const pool = require('./dbClient');

async function loadLogin(){

    const query = `select * from admin`;
    const result = await pool.query(query); //promise pool.query
    return result.rows;

}

async function checkLogin(loginData){

    let correctUser = false;
    const result = await pool.query(`select * from admin where admin_id=1`);
    const username = result.rows[0].username;
    const password = result.rows[0].password;

    if(loginData.username === username && loginData.password === password){
        correctUser = true;
    }
    return correctUser;

}



module.exports = {
    checkLogin,
    loadLogin
}