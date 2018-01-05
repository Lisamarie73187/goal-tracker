require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy
const massive = require('massive')
const cors = require('cors')
const session = require('express-session');
// require ('./passport.js')
const authRoutes = require ('./authRoutes.js')

const display_ctr = require('./controllers/display_controller');



const app = express();

app.use(bodyParser.json());

app.use(cors());

// authRoutes(app)

app.use( session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true
  }));


  

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})



app.get('/api/read', display_ctr.read);
app.get('/api/goal/:goalsid', display_ctr.getOne);
app.post('/api/goal/add', display_ctr.addGoal);

const db = app.get('db');




const port = 3003;

app.listen(port, () => console.log(`I'm listening... on port: ${port}`));