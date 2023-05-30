<template>
  <div class="buttons">
    <button class="button" @click="$store.dispatch('decreaseCount')">-</button>
    <button class="button" @click="$store.dispatch('increaseCount')">+</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
