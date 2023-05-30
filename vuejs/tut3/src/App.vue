<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <count-display />
  <count-squared />
  <count-buttons />
  <count-input />
</template>

<script>
import CountDisplay from "./components/CountDisplay.vue";
import CountButtons from "./components/CountButtons.vue";
import CountInput from "./components/CountInput.vue";
import CountSquared from "./components/CountSquared.vue";
export default {
  name: "App",
  components: {
    CountDisplay,
    CountButtons,
    CountSquared,
    CountInput,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  padding: 20px;
  font-size: 32px;
  margin: 12px;
}
</style>
