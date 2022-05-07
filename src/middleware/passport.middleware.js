const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const cookieSession = require("cookie-session");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8400/api/v1/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(accessToken, refreshToken, profile);
      done(null, profile);
    }
  )
);

//Save the session to the cookie
passport.serializeUser((user, done) => {
  console.log("line no 20====>",user);
  done(null, user);
});


//Read the session from the cookie and put it into req.user
passport.deserializeUser((obj, done) => {
  console.log("line no 27",obj)
  done(null, obj);
});

const cookieSessionConfig = cookieSession({
  name: "session",
  maxAge: 1000 * 60 * 5,
  keys: [process.env.SESSION_KEY_ONE, process.env.SESSION_KEY_TWO],
});

module.exports = {
    passport,
    cookieSessionConfig
} 
