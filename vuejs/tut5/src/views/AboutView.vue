<template>
  <main class="container">
    <div class="counter">{{ storeCounter.count }}</div>
    <div class="buttons">
      <button class="button" @click="storeCounter.decreaseCount">-</button>
      <button class="button" @click="storeCounter.increaseCount">+</button>
    </div>
    <div>The Counter is {{ storeCounter.oddOrEven }}</div>
    <div class="input">
      <input
        placeholder="Enter a Counter"
        type="number"
        v-model="storeCounter.count"
      />
    </div>
  </main>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
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
