const express = require('express');
const app = express();
const appointments = require('./appointments');

const port = 4000;

app.get('/api', (req, res) => {
    res.json('Hello');

});

app.get('/appointments', async (req, res) => {
    res.json(await appointments.loadAppointments());
})

app.listen(port, () => {
    console.log(`Oana's server running on port ${port}`);
})
