<template>
  <div class="cart-empty">
    <img src="/images/icons/bag.svg" alt="購物車" class="icon" />
    <div class="message">您的購物袋中沒有商品</div>
    <div
      class="click-animation-small go-shop-btn flex-center"
      @click="goShopping"
    >
      去逛逛
    </div>
  </div>
</template>

<script>
export default {
  name: "CartEmpty",
  methods: {
    goShopping() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../../sass/system_color'
.cart-empty
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .icon
    width: 8rem
    height: 7rem
    border: solid 1px
  .go-shop-btn
    width: 10rem
    height: 3.5rem
    border-radius: .5rem
    background-color: $color2
    font-size: 1.5rem
    font-weight: 500
    color: $color1
  .message
    font-size: 1.5rem
    font-weight: 500
    color: $color2
    margin: 1.5rem 0
</style>
