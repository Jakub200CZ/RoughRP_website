<template>
  <div class="main">
    <div class="main">
      <h1 class="text-2xl font-bold text-gray-300">Welcome</h1>
      <div class="status">
        <p id="serverStatus"><span class="loading">Načítání dat</span></p>
        <p id="playerCount"><span class="loading">Načítání dat</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>