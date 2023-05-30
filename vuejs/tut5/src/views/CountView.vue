<template>
  <div>
    <button @click="storeCounter.increaseCount">
      {{ storeCounter.count }}
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";

const storeCounter = useCounterStore();
</script>

<style>
button {
  font-size: larger;
}
</style>
