
const express = require("express");
const app = express();
const { cookieSessionConfig, passport } = require("./middleware/passport.middleware");
const googleRouter = require("./routes/auth/google.route");
const { baseUrl } = require("./utils/constant");

app.use(cookieSessionConfig)
app.use(passport.session())
app.use(passport.initialize());

app.use(`${baseUrl}/auth`,googleRouter)

module.exports = app;


