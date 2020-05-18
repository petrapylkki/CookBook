module.exports = mongoose => {
    //defining Mongoose model that represents 'recipes'-collection
    //in db and provides an interface to the db 
    let schema = mongoose.Schema(
        {
            title: String,
            ingredients: String,
            instructions: String
        },
        {
            timestamps: true
        })
        //overriding toJSON method to map default obj to custom obj
        schema.method("toJSON", function() {
            let { __v, _id, ...object } = this.toObject()
            object.id = _id
            return object
        })
    //mongoose instance, model constructor, name of collection
    //and reference to schema set on variable, that export 
    //fuction uses for a model to new objects
    const Recipe = mongoose.model("recipes", schema)
    return Recipe
}