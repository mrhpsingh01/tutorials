<template>
  <Navbar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  />
  <!-- <page-view v-if="pages.length > 0" :page="pages[activePage]" /> -->
  <create-page @page-created="pageCreated" />
</template>

<script>
import PageView from "./components/PageView.vue";
import Navbar from "./components/Navbar.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  components: { Navbar, PageView, CreatePage },
  created() {
    this.getPages();
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();
      this.pages = data;
    },
    pageCreated(pageObj) {
      console.log(pageObj);
      this.pages.push(pageObj);
    },
  },
};
</script>

<style></style>
