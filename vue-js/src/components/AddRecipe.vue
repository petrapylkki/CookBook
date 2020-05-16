<template>
  <div class="submit-form">
    <h4>Add a Recipe</h4>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="recipe.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="ingredients">Ingredients</label>
        <textarea
          class="form-control"
          rows="4"
          id="ingredients"
          required
          v-model="recipe.ingredients"
          name="ingredients"
        />
      </div>

      <div class="form-group">
        <label for="instructions">Instructions</label>
        <textarea
          class="form-control"
          rows="3"
          id="instructions"
          required
          v-model="recipe.instructions"
          name="instructions"
        />
      </div>

      <button @click="saveRecipe" class="btn btn-success fix">Submit</button>
      <a class="btn btn-secondary fix mr-2" href="/recipes">Cancel</a>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <a class="btn btn-info btn-sm" href="/recipes">Go back to homepage</a>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService"

export default {
  name: "add-recipe",
  data() {
    return {
      recipe: {
        id: null,
        title: "",
        ingredients: "",
        instructions: ""
      },
        submitted: false
    }
  },
  methods: {
    saveRecipe() {
      const data = {
        title: this.recipe.title,
        ingredients: this.recipe.ingredients,
        instructions: this.recipe.instructions
      }

    DataService.create(data)
      .then(response => {
        this.recipe.id = response.data.id
        console.log(response.data)
        this.submitted = true
      })
      .catch(e => {
      console.log(e)
      })
    }
  }
}
</script>
<style>
@media screen and (min-width: 800px) {
  .submit-form {
    width: 33em;
  }
}
.submit-form {
  text-align:left;
}
.fix {
  float: right;
}
</style>