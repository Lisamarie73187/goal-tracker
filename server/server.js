require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session');
const authRoutes = require ('./authRoutes.js')
const axios = require ('axios')
const cors = require('cors')

const display_ctr = require('./controllers/display_controller');




const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }));


massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
}).catch(error => {
    console.log('error', error);
  });

  app.post('/login', (req, res) => {
    const { userId } = req.body;
    const auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`;
    axios.get(auth0Url, {
      headers: {
        Authorization: 'Bearer ' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN
      }
    }).then(response => {
      const userData = response.data;
      req.session.user = {
        name: userData.name,
        email: userData.email,
        auth0_id: userData.user_id,
        pictureUrl: userData.picture
      };
      res.json({ user: req.session.user });
      app.get('db').find_user(userData.user_id).then(users => {
        if (!users.length) {
          app.get('db').create_user([userData.user_id, userData.email, userData.picture, userData.name]).then(() => {
            
          }).catch(error => {
            console.log('error', error);
          });
        }
      })
    }).catch(error => {
      console.log('error', error);
      res.status(500).json({ message: 'Oh noes!' });
    });
  });
  
  app.get('/user-data', (req, res) => {
    res.json({ user: req.session.user });
  });

app.get('/api/read', display_ctr.read);
app.get('/api/goal/:goalsid', display_ctr.getOne);
app.post('/api/goal/add', display_ctr.addGoal);
app.delete('/api/goal/:goalsid', display_ctr.deleteGoal);

const db = app.get('db');



const port = 3003;

app.listen(port, () => console.log(`I'm listening... on port: ${port}`));