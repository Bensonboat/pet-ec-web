<template>
  <div class="index-content">
    <the-heading :class="[!showHeading ? 'transparent-heading' : '']" />
    <router-view
      class="index-content-router-view"
      ref="index_content_router"
      @scroll.native="handleScroll"
    />
  </div>
</template>

<script>
import TheHeading from "./TheHeading.vue";

export default {
  name: "IndexContent",
  components: {
    TheHeading
  },
  data() {
    return {
      showHeading: true,
      currentHeight: ""
    };
  },
  mounted() {
    this.getCartData();
  },
  watch: {
    $route() {
      // 如果在前一畫面往下滾 header 消失的階段回到上一頁又沒有滾動的話，header會消失
      this.showHeading = true;
    }
  },
  methods: {
    handleScroll() {
      // 是否顯示 Heading
      let current_height = this.$refs.index_content_router.$el.scrollTop;
      if (current_height > 50) {
        this.showHeading = false;

        if (this.currentHeight > current_height) {
          // 向上滾動時
          this.showHeading = true;
        }
        this.currentHeight = current_height;
      }
    },
    getCartData() {
      this.$store.dispatch("setCartData");
    }
  }
};
</script>

<style lang="sass" scoped>
.index-content
    position: relative
    .index-content-router-view
        height: calc(100% - 4.4rem)
        padding-top: 4.4rem
        overflow-y: scroll
        margin: auto
    .index-content-router-view::-webkit-scrollbar
        display: none
    .transparent-heading
        background-color: transparent
        opacity: 0
        transition: .5s
</style>
