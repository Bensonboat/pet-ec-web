<template>
  <div class="cart-item-attribute">
    <img src="/images/p1.jpg" alt="" class="product-img" />
    <div class="product-basic-block">
      <div class="product-name">EQUILÍBRIO 尊爵 機能天然糧</div>
      <div class="product-spec">3.5kg3.5kg3.5kg</div>
      <div class="price-number-row">
        <div class="price">NT$2,380</div>
        <div class="number-block">
          <div class="select-number-block">
            <div
              class="btn number-operate-block minus click-animation"
              @click="selectNumber(-1)"
            >
              <img
                src="/images/icons/less.svg"
                alt="減一圖案"
                class="select-number-icon"
              />
            </div>
            <div class="btn number">{{ number }}</div>
            <div
              class="btn number-operate-block add click-animation"
              @click="selectNumber(1)"
            >
              <img
                src="/images/icons/plus.svg"
                alt="加一圖案"
                class="select-number-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItemAttribute",
  data() {
    return {
      number: 0
    };
  },
  methods: {
    selectNumber(number) {
      this.number = this.number + number;
      if (this.number < 0) {
        this.number = 0;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.cart-item-attribute
    margin-bottom: 2rem
    // background-color: #fff
    // padding: 1rem
    display: flex
    align-items: flex-start
    .product-img
        width: 8rem
        height: 8rem
        border: solid .1rem #f8f8f8
        margin-right: 1rem
        box-sizing: border-box
    .product-basic-block
        height: 100%
        flex-grow: 1
    .product-name
        font-size: 1.2rem
        color: #333333
        margin-bottom: .5rem
    .product-spec
        word-break: break-all
        margin-bottom: 1.2rem
        border: solid .1rem rgba(227, 166, 82, 0.5)
        color: rgba(227, 166, 82, 0.5)
        padding: .1rem 1rem
        border-radius: .5rem
        width: fit-content
    .price-number-row
        display: flex
        align-items: flex-end
        justify-content: space-between
    .select-number-block
        width: 10rem
        height: 2.4rem
        background-color: #f7f0e6
        display: flex
        align-items: center
    .number-block
        display: flex
        justify-content: space-between
        align-items: center
        // margin-top: 1.2rem
        font-size: 1.2rem
        font-weight: 500
    .number-operate-block
        width: 3.2rem
    .select-number-block
        width: 12rem
        height: 2.4rem
        border-radius: .4rem
        background-color: #f7f0e6
        display: flex
        align-items: center
        justify-content: space-around
        text-align: center
        .btn
            height: 100%
            display: flex
            align-items: center
            justify-content: center
            width: 100%
    .minus
        border-right: solid .1rem #ffffff
    .add
        border-left: solid .1rem #ffffff
    .select-number-icon
        width: 1.2rem
        height: 1.2rem
    .price
        font-size: 1.4rem
        color: #f94956
    .number
        color: #333333
        font-size: 1.2rem
</style>
