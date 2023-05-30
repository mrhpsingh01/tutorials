<template>
  <a
    class="nav-link"
    :class="activeClasses"
    aria-current="page"
    :href="page.link.url"
    :title="`This is the ${page.link.text} page.`"
    >{{ page.link.text }}</a
  >
</template>

<script>
export default {
  props: ["page", "isActive"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
