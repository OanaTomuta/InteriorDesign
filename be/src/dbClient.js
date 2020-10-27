const pg = require('pg'); //am luat libraria pg
const myPool = new pg.Pool(); //preluam un pool pt requests

module.exports = myPool;