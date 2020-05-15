const dbConf = require("../db")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise

//setting mongoose, db url and model to 
//a object called db
const db = {}
db.mongoose = mongoose
db.url = dbConf.url
db.recipes = require("./model")(mongoose)

//exporting object
module.exports = db