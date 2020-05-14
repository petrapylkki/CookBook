import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/recipes",
      name: "recipes",
      component: () => import("./components/RecipesList")
    },
    {
      path: "/recipes/:id",
      name: "recipe-details",
      component: () => import("./components/Recipe")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddRecipe")
    }
  ]
})