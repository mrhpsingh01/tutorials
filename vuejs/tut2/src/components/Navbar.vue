<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            v-for="(page, index) in publishedPages"
            class="nav-item"
            :key="index"
          >
            <NavbarLink
              :page="page"
              :isActive="activePage === index"
              @click.prevent="navLinkClick(index)"
            />
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-primary" @click.prevent="changeTheme">
            Toggle Navbar
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";

export default {
  props: ["pages", "activePage", "navLinkClick"],
  data() {
    return {
      theme: "dark",
    };
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  created() {
    this.getThemeSetting();
  },
  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme == "light") {
        theme = "dark";
      }
      this.theme = theme;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");
      if (theme) {
        this.theme = theme;
      }
    },
  },
  components: { NavbarLink },
};
</script>

<style lang="scss" scoped></style>
