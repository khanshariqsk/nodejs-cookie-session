const express = require("express");
const googleRouter = express.Router();
const { passport } = require("../../middleware/passport.middleware");
const { baseUrl } = require("../../utils/constant");
googleRouter.get("/login", (req, res, next) => {
  res.send("logged In");
});

googleRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email"] })
);

googleRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: true,
  }),
  function (req, res) {
    return res.redirect(`${baseUrl}/auth/login`);
  }
);

module.exports = googleRouter;
