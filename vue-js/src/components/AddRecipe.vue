<template>
  <div class="submit-form">
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
        <input
          class="form-control"
          id="ingredients"
          required
          v-model="recipe.ingredients"
          name="ingredients"
        />
      </div>

      <div class="form-group">
        <label for="instructions">Instructions</label>
        <input
          class="form-control"
          id="instructions"
          required
          v-model="recipe.instructions"
          name="instructions"
        />
      </div>

      <button @click="saveRecipe" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newRecipe">Add</button>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

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
        };
    },
    methods: {
        saveRecipe() {
            const data = {
                title: this.recipe.title,
                ingredients: this.recipe.ingredients,
                instructions: this.recipe.instructions
            };

            DataService.create(data)
                .then(response => {
                    this.recipe.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                console.log(e);
                });
        },
    
        newRecipe() {
            this.submitted = false;
            this.recipe = {};
        }
    }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>