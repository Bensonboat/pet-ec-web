<template>
  <div class="cart-item-attribute">
    <img
      :src="cartData.image"
      alt="商品圖片"
      class="product-img"
      @click="checkDetail"
    />
    <div class="product-basic-block">
      <div class="product-name">{{ cartData.title }}</div>
      <div class="product-spec">{{ cartData.sku_name }}</div>
      <div class="price-number-row">
        <div class="price">NT${{ cartData.price }}</div>
        <div class="number-block">
          <div class="select-number-block">
            <div
              class="btn number-operate-block minus click-animation"
              @click="updateNumber(-1)"
            >
              <img
                src="/images/icons/less.svg"
                alt="-1"
                class="select-number-icon"
              />
            </div>
            <div class="btn number">{{ cartData.qty }}</div>
            <div
              class="btn number-operate-block add click-animation"
              @click="updateNumber(1)"
            >
              <img
                src="/images/icons/plus.svg"
                alt="+1"
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
  props: {
    cartData: Object
  },
  methods: {
    updateNumber(number) {
      this.cartData.qty = this.cartData.qty + number; // 更新當前數量

      // 合併回原購物車
      let items = this.$store.state.cartData; // 取得舊購物車資料
      items[this.cartData.index].qty = this.cartData.qty; // 把當前數量更新到舊物車資料

      // 更新資料庫購物車
      this.updateCart(items);

      if (this.cartData.qty === 0) {
        this.setModalContent();
      }
    },
    checkDetail() {
      let data = this.cartData;
      this.$router.push({
        path: "/product/" + data.type + "/" + data.id
      });
    },
    setModalContent() {
      let default_data_structure = {
        title: "確認刪除",
        detail: "是否將此商品移出購物車?",
        btn1: "Yes",
        btn2: "No",
        src: "/images/icons/white-alert.svg",
        blockClass: "fail-block",
        iconClass: "fail-icon",
        closeTriggerFunction: "btn2"
      };

      this.$store.dispatch("setGlobalModalContent", default_data_structure);
    },
    updateCart(items) {
      let id = localStorage.getItem("sessID");
      let data = {
        items,
        id
      };
      this.$store.dispatch("toggleLoading", true);
      this.$api.AddCartItem(data).then(() => {
        this.$store.dispatch("toggleLoading", false);
        this.$store.dispatch("setCartData");
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.cart-item-attribute
    margin-bottom: 2rem
    display: flex
    align-items: flex-start
    .product-img
        width: 8rem
        height: 8rem
        border: solid .1rem #f8f8f8
        margin-right: 1rem
        box-sizing: border-box
        flex-shrink: 0
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
