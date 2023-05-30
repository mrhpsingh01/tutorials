<template>
  <main class="container">
    <div class="counter">{{ counter }}</div>
    <div class="buttons">
      <button class="button" @click="decreaseCounter">-</button>
      <button class="button" @click="increaseCounter">+</button>
    </div>

    <div>The MASTER Counter is {{ oddOrEven }}</div>

    <div class="input">
      <input placeholder="Enter a Counter" type="number" v-model="counter" />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";

let counter = ref(0);

const decreaseCounter = () => {
  counter.value--;
};
const increaseCounter = () => {
  counter.value++;
};

let oddOrEven = computed(() => {
  if (counter.value % 2 === 0) return "even";
  return "odd";
});
</script>

<style>
.container {
  margin: 20px;
}
.counter {
  font-size: 96px;
  margin-left: 24px;
}
.button {
  padding: 14px;
  margin: 5px;
  font-size: 32px;
}
</style>
