<template>
  <div class="input">
    <input type="text" v-model="colorCode" placeholder="Enter a Color" />
  </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
