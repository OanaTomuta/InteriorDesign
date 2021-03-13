const express = require('express');
const app = express();
const appointments = require('./appointments');
const login = require('./login');
const roomCards = require("./roomCards");
const roomCardsDelete = require("./roomCardsDelete");
const styleCards = require("./styleCards");
const multer = require('multer');
const pool = require('./dbClient');
//multer options
const upload = multer()

const port = 4000;
console.log("starting");

app.get('/api/load-image', async (req, res) => {
    const loadImageRes = await pool.query('select * from images where image_id = $1', [req.query.img_id])
    console.log(loadImageRes.rows)
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Disposition': 'attachment; filename=' + loadImageRes.rows[0].image_name
    });
    res.send(loadImageRes.rows[0].image)
})



app.use(express.json());

app.get('/api', (req, res) => {
    res.json('Hello');

});

app.get('/api/appointments', async (req, res) => {
    res.json(await appointments.loadAppointment());
})

app.post('/api/appointments', async (req,res) => {
    console.log(req.body);
    res.json(await appointments.createAppointment(req.body));
})

app.get('/api/login', async (req, res) => {
    res.json(await login.loadLogin());
})

app.post('/api/login', async ( req,res) => {
    console.log(req.body);
    res.json(await login.checkLogin(req.body));
})

app.get('/api/roomCards', async (req, res) => {
    res.json(await roomCards.loadRooms());
})

/*app.post('/api/roomCards', async (req,res) => {
    console.log(req.body);
    res.json(await roomCards.addNewRoom(req.body));
})*/

app.post('/api/addRoom', upload.single('image'),async (req, res) => {
    console.log(req.body);
    try {
        const saveImageRes = await pool.query(`insert into images(image, image_name) values($1, $2) returning image_id`, [ req.file.buffer, req.file.originalname ])
        const imageId = saveImageRes.rows[0].image_id;
        await pool.query(`insert into rooms(name, image_id) values($1, $2)`, [ req.body.newRoom, imageId ])

        res.json({resp:'ok'})
    } catch (e){
        res.status(400).send(e)
    }
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

/*app.put('/api/roomCards', async (req,res) => {
    res.json(await roomCards.editRoom(req.body));
})*/

app.post('/api/editRoom', upload.single('image'),async (req, res) => {
    console.log(req.body);
    try {
        const selectedRoom = JSON.parse(req.body.roomOption)
        await pool.query(`update images set image=$1, image_name=$2 where image_id=$3`,
            [   req.file.buffer,
                req.file.originalname,
                selectedRoom.image_id ])
        await pool.query(`update rooms set name=$1 where room_id=$2`, [ req.body.newName, selectedRoom.room_id])

        res.json({resp:'ok'})
    } catch (e){
        res.status(400).send(e)
    }
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

app.put('/api/roomCardsDelete', async (req,res) => {
    console.log(req.body);
    res.json(await roomCardsDelete.deleteRoom(req.body));
})

app.get('/api/styleCards', async (req, res) => {
    res.json(await styleCards.loadStyles(req.query));
})

app.post('/api/upload', upload.single('image'),async (req, res) => {
    console.log(req.body);
    try {
        const saveImageRes = await pool.query(`insert into images(image, image_name) values($1, $2) returning image_id`, [ req.file.buffer, req.file.originalname ])
        const imageId = saveImageRes.rows[0].image_id;
        const roomOption = JSON.parse(req.body.roomOption)
        await pool.query(`insert into styles(room_id, image_id, style_name) values($1, $2, $3)`, [ roomOption.room_id, imageId, req.body.newStyle ])

        res.json({resp:'ok'})
    } catch (e){
        res.status(400).send(e)
    }
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

app.post('/api/changeStyle', upload.single('image'),async (req,res) => {
    console.log(req.body);
    try {
        const selectedStyle = JSON.parse(req.body.selectedStyle)
        await pool.query(`update images set image=$1, image_name=$2 where image_id=$3`, [req.file.buffer, req.file.originalname, selectedStyle.image_id])
        const roomOption = JSON.parse(req.body.roomOption)
        await pool.query(`update styles set style_name=$1 where room_id=$2 and style_id=$3`, [req.body.newStyle, roomOption.room_id, selectedStyle.style_id])

        res.json({resp:'ok'})
    } catch (e) {
        res.status(400).send(e)
    }
}, (error, req, res, next) => {
        res.status(400).send({error: error.message})
})

app.put('/api/styleCards', async (req,res) => {
    console.log(req.body);
    res.json(await styleCards.deleteStyle(req.body));
})

app.listen(port, () => {
    console.log(`Oana's server running on port ${port}`);
})

