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

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const cookieSessionConfig = cookieSession({
  name: "session",
  maxAge: 1000 * 60 * 60 * 24,
  keys: [process.env.SESSION_KEY_ONE, process.env.SESSION_KEY_TWO],
});

module.exports = {
    passport,
    cookieSessionConfig
} 
