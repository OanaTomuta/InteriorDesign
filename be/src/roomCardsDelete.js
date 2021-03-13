const pool = require('./dbClient');


async function deleteRoom(selectedRoom){

    const deleteReferenceImages = await pool.query(`delete from images where image_id=$1`,
        [
            selectedRoom.image_id
        ]);

    const deleteFromRooms = await pool.query(`delete from rooms where room_id=$1`,
        [
            selectedRoom.room_id
        ]);

    return [ deleteReferenceImages.rows, deleteFromRooms.rows];
}

module.exports = {
    deleteRoom
}