<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pravidla">Pravidla</router-link> |
      <router-link to="/ovladani">Ovládání</router-link> |
      <router-link to="/vip">VIP</router-link> |
      <router-link to="/gov">Zákony</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #242424;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #27ff9e;
}
</style>
