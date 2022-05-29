<template>
  <div id="nav">
    <router-link class="nav-it" to="/">Home</router-link> |
    <router-link class="nav-it" to="/rules">Pravidla</router-link> |
    <router-link class="nav-it" to="/docs">Docs</router-link> |
    <router-link class="nav-it" to="/vip">VIP</router-link> |
    <router-link class="nav-it" to="/gov">Zákony</router-link>
  </div>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #111827;
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
  transition: 0.2s;
}

#nav a.router-link-exact-active {
  color: rgb(234 179 8);
}

#nav a:hover {
  color: rgb(234 179 8);
  transition: 0.2s;
}
</style>
