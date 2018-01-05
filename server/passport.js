const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy


passport.serializeUser((user,done) => {
    done(null, user.id)
})

let usefulID = ""

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        usefulID = profile.identities[0].user_id.toString()
        const db = app.get('db');
        db.get_user([profile.identities[0].user_id]).then(user => {
            
            if (user[0]){
                console.log('if user exists', user)
                
                done(null, user[0].id)
            } else {
                db.create_user([profile.displayName, profile.emails[0].value, profile.picture, profile.identities[0].user_id])
                .then(user => {
                    console.log('new user', user)
                    done(null, user[0].id)
                })
            }
        }); 
    }))
    
