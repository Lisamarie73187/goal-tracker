require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors')

const display_ctr = require('./controllers/display_controller')

const app = express();
app.use(cors())

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})

app.get('/api/read', display_ctr.read);
app.get('/api/goal/:goalsid', display_ctr.getOne);

const db = app.get('db');




const port = 3003;

app.listen(port, () => console.log(`I'm listening... on port: ${port}`));