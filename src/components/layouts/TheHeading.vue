<template>
  <div class="the-heading default-black-bgc">
    <div class="heading-operation-left-block">
      <div @click="previousPage" class="operation-item click-animation">
        <img src="/images/icons/back.svg" alt="上一步按鈕" class="icon" />
      </div>
      <div @click="routerSwitcher('/search_page')">
        <img src="/images/icons/search.svg" alt="搜尋按鈕" class="icon" />
      </div>
    </div>
    <div
      @click="routerSwitcher('/category_page/cat')"
      class="logo-block click-animation"
    >
      LOGO
      <!-- <img src="/images/animal.png" alt="Logo" class="icon logo-icon"> -->
    </div>
    <div class="heading-operation-right-block">
      <div
        class="operation-item click-animation"
        @click="routerSwitcher('/member_center_page')"
      >
        <img src="/images/icons/user.svg" alt="使用者 icon" class="icon" />
      </div>
      <div
        class="cart-block click-animation"
        @click="routerSwitcher('/cart_page')"
      >
        <img src="/images/icons/bag.svg" alt="購物車按鈕" class="icon" />
        <div class="in-cart-number">{{ getCartItemNumber }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeading",
  computed: {
    getCartItemNumber() {
      return this.$store.state.cartData.length;
    }
  },
  methods: {
    previousPage() {
      this.$router.go(-1);
    },
    routerSwitcher(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="sass" scoped>
.the-heading
    height: 4.4rem
    box-sizing: border-box
    display: flex
    justify-content: space-between
    align-items: center
    position: relative
    z-index: 20
    padding: 1rem
    box-sizing: border-box
    position: absolute
    width: 100%
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15)
    .icon
        cursor: pointer
        width: 2.4rem
        height: 2.4rem
    .logo-block
        position: absolute
        left: 50%
        transform: translateX(-50%)
        width: 90px
        height: 30px
        opacity: 0.1
        border-radius: 5px
        display: flex
        align-items: center
        justify-content: center
        background-color: #f4f4f4
        font-family: MicrosoftSansSerif
        font-size: 14px
        font-weight: normal
        font-stretch: normal
        font-style: normal
        line-height: normal
        letter-spacing: normal
        color: #5c5c5c
    // .logo-icon
    //     display: flex
    //     width: 3rem
    //     height: 3rem
    .heading-operation-right-block
        display: flex
        align-items: center
    .heading-operation-left-block
        display: flex
        align-items: center
    .operation-item
        margin-right: 1.5rem
        position: relative
    .cart-block
        position: relative
    .in-cart-number
        position: absolute
        top: -.3rem
        right: -.3rem
        width: 1.5rem
        height: 1.5rem
        border-radius: 50%
        display: flex
        align-items: center
        justify-content: center
        font-size: 1.2rem
        background-color: #e5ceae
        color: #333333
        font-weight: 900
        font-family: Roboto
.the-heading.trans-heading
    background-color: transparent
</style>
