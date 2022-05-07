const express = require("express");
const googleRouter = express.Router();
const { passport } = require("../../middleware/passport.middleware");
const { baseUrl } = require("../../utils/constant");

googleRouter.get("/login", (req, res, next) => {
  if (!req.user || !req.isAuthenticated()) {
    return res.status(401).json({ message: "You must log In!!" });
  }
  return res.send("logged In");
});

googleRouter.get("/logout", (req, res, next) => {
  req.logout();
  return res.send("logged Out");
});

googleRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email"] })
);
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
