const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

//parse request of content-type - application/json
app.use(bodyParser.json());
//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//connect to Mongodb database
const db = require("./app/models")
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("db connected successfully")
  })
  .catch(err => {
    console.log("db not connected", err)
    process.exit()
  })

//including routes to server
require("./app/routes")(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});