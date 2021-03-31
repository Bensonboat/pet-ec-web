<template>
  <div class="page-header flex-center">
    <div @click="previousPage" class="click-animation pre-icon">
      <img src="/images/icons/back.svg" alt="上一步按鈕" class="icon" />
    </div>
    <div>{{ title }}</div>
    <slot name="pageHeaderButton" />
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: String
  },
  methods: {
    previousPage() {
      this.$emit("previous-page");
    }
  }
};
</script>

<style lang="sass" scoped>
.page-header
    height: 5rem
    box-shadow: 0 .2rem .4rem 0 rgba(0, 0, 0, 0.15)
    background-color: #333333
    font-size: 1.4rem
    font-weight: 500
    color: #efe1ce
    .pre-icon
        position: absolute
        left: 1rem
    .icon
        width: 2.4rem
        height: 2.4rem
</style>
