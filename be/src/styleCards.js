const pool = require('./dbClient');

async function loadStyles(params){

    const { filterByRoom } = params

    console.log(`filter by: `, filterByRoom)
    const result = await pool.query(`select * from styles where room_id = $1`, [ filterByRoom ]); //promise pool.query
    return result.rows;

}

async function deleteStyle({roomOption, selectedStyle}){
    const deleteFromStyleTable = await pool.query(`delete from styles where room_id=$1 and style_id=$2`,
        [
            roomOption.room_id,
            selectedStyle.style_id
        ]);
    const deleteFromImagesTable = await pool.query(`delete from images where image_id=$1`,
        [
            selectedStyle.image_id
        ]);

    return [...deleteFromStyleTable.rows, ...deleteFromImagesTable.rows];
}

module.exports = {
    loadStyles,
    deleteStyle
}
