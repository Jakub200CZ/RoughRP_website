<template>
  <div id="nav">
      <router-link class="nav-it" to="/">Home</router-link> |
      <router-link class="nav-it" to="/pravidla">Pravidla</router-link> |
      <router-link class="nav-it" to="/ovladani">Ovládání</router-link> |
      <router-link class="nav-it" to="/vip">VIP</router-link> |
      <router-link class="nav-it" to="/gov">Zákony</router-link>
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

.nav-it {
  padding-inline: 5px;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #ff2727;
}
</style>
