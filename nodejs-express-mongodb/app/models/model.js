module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            title: String,
            ingredients: String,
            instructions: String
        },
        {
            timestamp: true
        })
        schema.method("toJSON", function() {
            const { __v, _id, ...object } = this.toObject();
            object.id = _id;
            return object;
        })
    const Recipe = mongoose.model("recipe", schema)
    return Recipe
}