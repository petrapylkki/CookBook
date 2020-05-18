<template>
  <div id="app">
    <!--defining navbar-->
    <nav class="navbar navbar-expand navbar-light bg-light shadow">
      <a href="#" class="navbar-brand">Cookbook</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/recipes" class="nav-link">Recipes</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
      </div>
    </nav>
    <!--route outlet-->
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
