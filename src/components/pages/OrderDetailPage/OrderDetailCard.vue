<template>
  <div class="order-detail-card">
    <div class="order-number-row flex-center">
      <div>{{ orderData.created_at | dateFormat }}</div>
      <div class="right-side">
        <div>#{{ orderData.code }}</div>
        <div class="toggle-products" @click="toggleProducts">
          <img
            v-show="showProducts"
            src="/images/icons/white-minus.svg"
            alt="縮小"
          />
          <img
            v-show="!showProducts"
            src="/images/icons/white-plus.svg"
            alt="展開"
          />
        </div>
      </div>
    </div>
    <div class="order-status-block">
      <div class="payment-method">{{ orderData.status }}</div>
      <div class="order-status flex-center">{{ orderData.status }}</div>
    </div>
    <div class="order-total-price-block">
      訂單總金額 <span class="total-price">NT$ {{ orderData.price }}</span>
    </div>
    <div v-if="showProducts">
      <div class="product-detail-block flex-center">
        <img src="/images/p1.jpg" alt="商品圖片" class="product-img" />
        <div>
          <div class="name">EQUILÍBRIO 尊爵 機能天然糧食 尊爵 機能天然糧食</div>
          <div class="spec-number-row flex-center">
            <div class="spec">
              3KG
            </div>
            <div>x2</div>
          </div>
          <div class="product-price">NT$2,380</div>
        </div>
      </div>
      <div class="product-detail-block flex-center">
        <img src="/images/p1.jpg" alt="商品圖片" class="product-img" />
        <div>
          <div class="name">EQUILÍBRIO 尊爵 機能天然糧食 尊爵 機能天然糧食</div>
          <div class="spec-number-row flex-center">
            <div class="spec">
              3KG
            </div>
            <div>x2</div>
          </div>
          <div class="product-price">NT$2,380</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetailCard",
  props: ["orderData"],
  filters: {
    dateFormat(date) {
      return date.split(" ")[0];
    }
  },
  data() {
    return {
      showProducts: false,
      singleOrderData: ""
    };
  },
  methods: {
    toggleProducts() {
      this.showProducts = !this.showProducts;
      if (this.showProducts && this.singleOrderData === "") {
        let id = this.orderData.id;
        this.getSingleOrder(id);
      }
    },
    getSingleOrder(id) {
      this.$api.getSingleOrder(id).then(res => {
        console.log(res, "single order");
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.order-detail-card
    padding: 1rem
    box-shadow: .1rem .1rem .1rem 0 rgba(0, 0, 0, 0.1)
    background-color: #ffffff
    margin-bottom: .5rem
    overflow: hidden
    .order-number-row
      justify-content: space-between
      font-size: 1.4rem
      font-weight: 500
      color: #c8a87b
      .right-side
        display: flex
        align-items: center
    .toggle-products
      width: 1.4rem
      height: 1.4rem
      background-color: #c8a87b
      border-radius: 50%
      box-sizing: border-box
      margin-left: .8rem
      display: flex
      align-items: center
      justify-content: center
      img
        width: 50%
        height: 50%
    .order-status-block
      display: flex
      align-items: center
      justify-content: space-between
      color: #333333
      font-size: 1.2rem
    .order-status
      padding: 0 .5rem
      // width: 5.2rem
      height: 2rem
      border-radius: .2rem
      border: solid .1rem #333333
      margin-top: .8rem
    .order-total-price-block
      display: flex
      justify-content: flex-end
      font-size: 1.2rem
      color: #333333
      margin-top: 1rem
      border-bottom: solid .1rem #e9dcca
      padding-bottom: 1rem
      .total-price
        font-size: 1.4rem
        color: #f94956
        margin-left: .6rem
    .product-detail-block
        width: 100%
        margin-top: 1rem
        justify-content: space-between
        align-items: flex-start
        font-size: 1.4rem
        font-weight: 500
        color: #333333
    .product-img
        width: 8rem
        height: 8rem
        border: solid .1rem #f7f0e6
        margin-right: 1rem
    .name
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 1
        overflow: hidden
    .spec-number-row
      justify-content: space-between
      // padding-right: 1rem
      margin-top: .5rem
    .spec
      width: 75%
      word-break: break-all
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 1
      overflow: hidden
    .product-price
      display: flex
      justify-content: flex-end
      margin-top: 2rem
      color: #f94956
</style>
