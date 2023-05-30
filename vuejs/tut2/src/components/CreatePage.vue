<template>
  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label"> Page Title </label>
        <input type="text" class="form-control" v-model="pageTitle" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Content</label>
        <textarea
          type="text"
          rows="5"
          class="form-control"
          v-model="content"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Link Text</label>
        <input type="text" class="form-control" v-model="linkText" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Link URL</label>
        <input type="text" class="form-control" v-model="linkUrl" />
      </div>
      <div class="row mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="published" />
          <label for="gridCheck1" class="from-check-label">Published</label>
        </div>
      </div>
      <div class="mb-3">
        <button
          class="btn btn-primary"
          @click.prevent="submitForm"
          :disabled="isFormValid"
        >
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["pageCreated"],
  computed: {
    isFormValid() {
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },
  },
  data() {
    return {
      pageTitle: "",
      content: "",
      linkText: "",
      linkUrl: "",
      published: true,
    };
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert("Please fill the form");
        return;
      }

      this.$emit("pageCreated", {
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          text: this.linkText,
          url: this.linkUrl,
        },
        published: this.published,
      });

      this.clearForm();
    },
    clearForm() {
      this.pageTitle = "";
      this.content = "";
      this.linkText = "";
      this.linkUrl = "";
      this.published = true;
    },
  },
  watch: {
    pageTitle(newPageTitle, oldPageTitle) {
      if (this.linkText === oldPageTitle) {
        this.linkText = newPageTitle;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
