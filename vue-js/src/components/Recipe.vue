<template>
  <div v-if="currentRecipe" class="edit-form">
    <h4>Edit the Recipe</h4>
    <!--shows div if form is unsubmitted-->
    <div v-if="!submitted">
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
      <button type="submit" class="btn btn-success fix"
        @click="updateRecipe">
        Update
      </button>
      <button class="btn btn-danger mr-2 fix"
      @click="deleteRecipe">
      Delete
      </button>
      <a class="btn btn-secondary fix mr-2" href="/recipes">Cancel</a>
    </div>
    <div v-else>
      <h4>You updated successfully!</h4>
      <a class="btn btn-info btn-sm" href="/recipes">Go back to homepage</a>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService"

export default {
  name: "recipe",
  data() {
    //initialize empty properties
    return {
      currentRecipe: null,
      submitted : false
    }
  },
  methods: {
    getRecipe(id) {
      //calls DataService.get() method to set id 
      //for currentRecipe with error handling
      DataService.get(id)
        .then(response => {
          this.currentRecipe = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    updateRecipe() {
      //calls DataService.update() method to set current id
      //to the modified currentRecipe with error handling
      DataService.update(this.currentRecipe.id, this.currentRecipe)
        .then(response => {
          console.log(response.data)
          this.submitted = true
        })
        .catch(e => {
          console.log(e)
        })
    },
    deleteRecipe() {
      //calls DataService.delete() method to delete currentRecipe
      //with given id and then send client back to main page
      DataService.delete(this.currentRecipe.id)
        .then(response => {
          console.log(response.data)
          this.$router.push({ name: "recipes" })
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  //calls getRecipe() method with set id after DOM has been mounted
  mounted() {
    this.getRecipe(this.$route.params.id)
  }
}
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