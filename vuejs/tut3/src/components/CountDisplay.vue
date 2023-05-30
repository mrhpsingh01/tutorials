<template>
  <h1 class="count" :style="{ color: $store.state.colorCode }">
    {{ $store.state.count }}
  </h1>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
