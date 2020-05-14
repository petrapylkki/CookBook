//defining Mongoose model that represents recipes collection in db
module.exports = mongoose => {
    const schema = mongoose.Schema(
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
            const { __v, _id, ...object } = this.toObject();
            object.id = _id;
            return object;
        })
    const Recipe = mongoose.model("recipe", schema)
    return Recipe
}