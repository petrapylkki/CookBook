const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 8080;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

require("./app/routes")(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});