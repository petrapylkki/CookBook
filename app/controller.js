const db = require("./models")
const Recipe = db.recipes

//create and save a new Recipe object to db
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({message: "Fields can not be empty"})
        return
    }

    //create a new Recipe object
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })

    //save it to db with error handling
    recipe
        .save(recipe)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Something went wrong while creating the Recipe"})
        })
}

//retrieve all Recipes from db
exports.findAll = (req, res) => {
    const title = req.query.title
    //defining condition to find by title from Recipes
    let condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {}
    
    //retrieving with error handling
    Recipe.find(condition)
        .then(data => {
        res.send(data)
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "Something went wrong while retrieving the Recipes"})
        })
}

//find a Recipe object by id
exports.findOne = (req, res) => {
    const id = req.params.id
    
    //finding with error handling
    Recipe.findById(id)
        .then(data => {
            if (!data)
            res.status(404).send({message: `Not found Recipe with id : ${id}`})
            else res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: `Error retrieving Recipe with id : ${id}`})
        })
}

//update a Recipe object by id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({message: "Data to update can not be empty"})
    }
    const id = req.params.id
    
    Recipe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({message: `Cannot update Recipe with id : ${id}`})
            } else {
                res.send({message: "Recipe was updated successfully"})
            }
        })
        .catch(err => {
            res.status(500).send({message: `Error updating Recipe with id : ${id}`})
        })
}

//delete a Recipe object by id
exports.delete = (req, res) => {
    const id = req.params.id
  
    //deleting with error handling
    Recipe.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({message:`Cannot delete Recipe with id : ${id}`})
            } else {
                res.send({message: "Recipe was deleted successfully!"})
            }
        })
        .catch(err => {
            res.status(500).send({message:`Could not delete Recipe with id : ${id}`})
        })
}