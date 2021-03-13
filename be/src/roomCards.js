const pool = require('./dbClient');

async function loadRooms() {

    const query = `select * from rooms`;
    const result = await pool.query(query); //promise pool.query
    return result.rows;
}

/*async function addNewRoom(roomData){
    console.log(roomData);
    const result = await pool.query(`insert into rooms(name) values($1)`,
        [
            roomData.newRoomName
        ]);
    return result.rows;
}*/

async function editRoom({newName,selectedRoom}){
    const result = await pool.query(`update rooms set name=$1 where room_id=$2`,
        [
            newName.newRoomName,
            selectedRoom.room_id

        ]);
    return result.rows;
}


module.exports = {
    loadRooms,
    editRoom
}