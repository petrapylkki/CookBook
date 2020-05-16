<template>
  <div class="list row mx-auto">
    <div class="col-md-6">
      <div class="input-group mb-3 fix-searchbar">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-info" type="button"
            @click="searchTitle">Search</button>
        </div>
      </div>
    </div>
    <div class="col-md-2"></div>
    <div class="col-md-6">
      <h4>Recipe List</h4>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action list-group-item-info"
          :class="{ active: index == currentIndex }"
          v-for="(recipe, index) in recipes"
          :key="index"
          @click="setActiveRecipe(recipe, index)"
        >
          {{ recipe.title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentRecipe" class="card">
          <div class="row justify-content-between">
            <h4 style="margin-left:1rem;">Recipe</h4>
            <a class="btn btn-info btn-sm fix-btn" :href="'/recipes/' + currentRecipe.id">Edit</a>
          </div>
        <div>
          <label><strong>Title:</strong></label> {{ currentRecipe.title }}
        </div>
        <div>
          <label><strong>Ingredients:</strong></label>
          <p style="white-space: pre-line;">{{ currentRecipe.ingredients }}</p>
        </div>
        <div>
          <label><strong>Instructions:</strong></label>
          <p style="white-space: pre-line;">{{ currentRecipe.instructions }}</p>
        </div>
      </div>
      <div v-else>
        <br />
        <p style="margin-top:1rem;">Click on a recipe!</p>
      </div>
    </div>
  </div>
</template>
<script>
import DataService from "../services/DataService"

export default {
  name: "recipes-list",
  data() {
    return {
      recipes: [],
      currentRecipe: null,
      currentIndex: -1,
      title: ""
    }
  },
  methods: {
    retrieveRecipes() {
      DataService.getAll()
        .then(response => {
          this.recipes = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    refreshList() {
      this.retrieveRecipes()
      this.currentRecipe = null
      this.currentIndex = -1
    },
    setActiveRecipe(recipe, index) {
      this.currentRecipe = recipe
      this.currentIndex = index
    },
    searchTitle() {
      DataService.findByTitle(this.title)
        .then(response => {
          this.recipes = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted() {
    this.retrieveRecipes()
  }
}
</script>
<style>
.list {
  text-align: left;
  float: left;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
}
.fix-searchbar {
  width: 100%;
}
.btn-outline-info {
  background-color: white;
}
.fix-btn {
  max-width: fit-content;
  margin-right: 1rem;
}
.card {
  border: 0.4px solid #bee5eb;
  border-radius: 5px;
  padding: 10px;
  margin-top: 35px;
}
</style>