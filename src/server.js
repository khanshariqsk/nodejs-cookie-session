require("dotenv").config();
const app = require("./index");
const port = process.env.PORT || 9500;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
