//defining routes
module.exports = app => {
    const recipes = require("./controller")
    var router = require("express").Router();
  
    //create a new Recipe
    router.post("/", recipes.create);
  
    //retrieve all Recipes
    router.get("/", recipes.findAll);

    //retrieve a single Recipe with id
    router.get("/:id", recipes.findOne);
  
    //update a Recipe with id
    router.put("/:id", recipes.update);
  
    //delete a Recipe with id
    router.delete("/:id", recipes.delete);
  
    app.use("/api/recipes", router);
};