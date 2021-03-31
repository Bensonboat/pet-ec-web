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
  </div>
</template>

<script>
export default {
  name: "MyApp",
  mounted() {
    this.addCartItem();
    document.cookie = "test=123";
  },
  computed: {
    getLoadingStatus() {
      return this.$store.getters.getLoadingStatus;
    }
  },
  methods: {
    addCartItem() {
      let data = {
        items: [
          {
            product_id: 1,
            sku_id: 1,
            qty: 1
          }
        ]
      };

      this.$api.AddCartItem(data).then(res => {
        console.log(res, "??? CART");
        this.$store.dispatch("getCartData");
      });
    }
  }
};
</script>
<style lang="sass">
@import '@/sass/default.sass'
@import '@/sass/system_color.sass'

.my-app
  width: 100vw
  height: calc(100 * var(--vh))
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
