//defining Mongoose
const dbConf = require("../db")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConf.url
db.recipes = require("./model")(mongoose)

module.exports = db