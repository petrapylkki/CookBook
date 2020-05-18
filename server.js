const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = process.env.port || 8080

//configure to allow only one origin to serve
const corsOptions = {
  origin: "http://localhost:8081"
}

//enables cors to respond to domain specified in corsOptions
app.use(cors(corsOptions))
//parse request of content-type - application/json
app.use(bodyParser.json())
//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

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

//including routes to server (app returns a function)
require("./app/routes")(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})