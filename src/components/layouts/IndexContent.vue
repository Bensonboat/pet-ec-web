<template>
  <div class="index-content">
    <the-heading :class="[!showHeading ? 'transparent-heading' : '']" />
    <router-view
      class="index-content-router-view"
      ref="index_content_router"
      @scroll.native="handleScroll"
    />
    <!-- <transition name="basic">
      <product-basic-spec v-if="getShowProductAllSpecModalStatus" />
    </transition> -->
  </div>
</template>

<script>
import TheHeading from "./TheHeading.vue";
// import ProductBasicSpec from "@/components/layouts/ProductBasicSpec";

export default {
  name: "IndexContent",
  components: {
    TheHeading
    // ProductBasicSpec
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
  // computed: {
  //   getShowProductAllSpecModalStatus() {
  //     return this.$store.state.showProductAllSpecModal;
  //   }
  // },
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
