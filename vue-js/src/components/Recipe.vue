<template>
  <div v-if="currentRecipe" class="edit-form">
    <h4>Edit the Recipe</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input 
        type="text" 
        class="form-control" 
        id="title"
        v-model="currentRecipe.title"
        />
      </div>
      <div class="form-group">
        <label for="ingredients">Ingredients</label>
        <textarea
        rows="4"
        type="text" 
        class="form-control" 
        id="ingredients"
        v-model="currentRecipe.ingredients"
        />
      </div>
      <div class="form-group">
        <label for="instructions">Instructions</label>
        <textarea
        rows="3"
        type="text" 
        class="form-control" 
        id="instructions"
        v-model="currentRecipe.instructions"
        />
      </div>
    </form>
    
    <button type="submit" class="btn btn-success fix"
      @click="updateRecipe">
      Update
    </button>

    <button class="btn btn-danger mr-2 fix"
      @click="deleteRecipe">
      Delete
    </button>

    <a class="btn btn-secondary fix mr-2" href="/recipes">Cancel</a>

    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Click on a Recipe...</p>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "recipe",
  data() {
    return {
        currentRecipe: null,
        message: ''
    };
  },
  methods: {
    getRecipe(id) {
        DataService.get(id)
            .then(response => {
                this.currentRecipe = response.data;
                console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
    },

    updateRecipe() {
        DataService.update(this.currentRecipe.id, this.currentRecipe)
            .then(response => {
                console.log(response.data);
                this.message = 'The recipe was updated successfully!';
            })
            .catch(e => {
                console.log(e);
            });
    },

    deleteRecipe() {
        DataService.delete(this.currentRecipe.id)
            .then(response => {
                console.log(response.data);
                this.$router.push({ name: "recipes" });
            })
            .catch(e => {
                console.log(e);
            });
    }
  },
  mounted() {
    this.message = '';
    this.getRecipe(this.$route.params.id);
  }
};
</script>

<style>
@media screen and (min-width: 800px) {
  .edit-form {
    width: 33em;
  }
}
.edit-form {
  text-align:left;
}
.fix {
  float: right;
}
</style>