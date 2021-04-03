<template>
  <div class="my-app">
    <router-view class="outer-router-view" />
    <div v-show="getLoadingStatus">
      <div class="modal-mask"></div>
      <img
        src="/images/icons/loading-icon.png"
        alt="loading"
        class="loading-icon"
      />
    </div>
    <transition name="basic">
      <product-basic-spec v-if="getShowProductAllSpecModalStatus" />
    </transition>
  </div>
</template>

<script>
// import BaseModal from "@/components/layouts/BaseModal.vue";
import ProductBasicSpec from "@/components/layouts/ProductBasicSpec";

export default {
  name: "MyApp",
  components: { ProductBasicSpec },
  mounted() {
    // this.getCartData();
  },
  computed: {
    getLoadingStatus() {
      return this.$store.getters.getLoadingStatus;
    },
    getGlobalModalContent() {
      return this.$store.getters.getGlobalModalContent;
    },
    getShowProductAllSpecModalStatus() {
      return this.$store.state.showProductAllSpecModal;
    }
  },
  methods: {
    // addCartItem() {
    //   let data = {
    //     items: [
    //       {
    //         product_id: 1,
    //         sku_id: 1,
    //         qty: 1
    //       }
    //     ]
    //   };
    //   this.$api.AddCartItem(data).then(res => {
    //     console.log(res, "??? CART");
    //     this.$store.dispatch("getCartData");
    //   });
    // }
  }
};
</script>
<style lang="sass">
@import '@/sass/default.sass'
@import '@/sass/system_color.sass'

.my-app
  width: 100vw
  max-width: 900px
  height: calc(100 * var(--vh))
  margin: auto
  background-color: #e5ceae
  .outer-router-view
      height: 100%
  .loading-icon
    position: fixed
    top: 50%
    left: 50%
    width: 5rem
    height: 5rem
    animation: rotation 1s infinite ease-in
    @keyframes rotation
      from
          transform: translate(-50%, -50%) rotate(0deg);
      to
          transform: translate(-50%, -50%) rotate(359deg);
</style>
