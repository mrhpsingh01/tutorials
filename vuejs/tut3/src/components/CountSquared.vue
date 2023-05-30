<template>
  <h3>
    {{ $store.state.count }}<sup>2</sup> = {{ $store.getters.counterSquared }}
  </h3>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
