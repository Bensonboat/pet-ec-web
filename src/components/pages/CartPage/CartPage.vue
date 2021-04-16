<template>
  <div class="cart-page">
    <checkout-process :step="checkoutStep" />
    <div>
      <div v-show="checkoutStep === 1">
        <div class="order-list-block">
          <div v-if="innerGetCartData.length === 0" class="order-infomation">
            尚未加入商品
          </div>
          <div class="order-infomation" v-else>
            <cart-item-attribute
              v-for="(item, index) in innerGetCartData"
              :key="index"
              :cartData="item"
              @number-update="numberUpdate"
            />
            <div class="order-note-block">
              <input type="text" placeholder="請輸入訂單備註" class="note" />
            </div>
          </div>
        </div>
        <coupon-total-price @next-step="toCertainStep" />
      </div>
      <div v-show="checkoutStep === 2">
        <div class="all-order-confirm-block">
          <div class="shipping-infomation-block">
            <shipping-infomation
              @shipping-info-validate="shippingInfoValidate"
            />
          </div>
        </div>
        <order-confirm-block
          :orderValidate="orderValidate"
          @to-certain-step="toCertainStep"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutProcess from "./CheckoutProcess";
import CouponTotalPrice from "./Coupon/CouponTotalPrice";
import ShippingInfomation from "./ShippingInfomation";
import OrderConfirmBlock from "./OrderConfirmBlock";
import CartItemAttribute from "./CartItemAttribute";

export default {
  name: "CartPage",
  components: {
    CheckoutProcess,
    CartItemAttribute,
    CouponTotalPrice,
    ShippingInfomation,
    OrderConfirmBlock
  },
  data() {
    return {
      checkoutStep: 1,
      orderValidate: false,
      innerGetCartData: ""
    };
  },
  mounted() {
    this.$store.dispatch("setCartData");
  },
  computed: {
    getCartData() {
      return this.$store.getters.getCartData;
    }
  },
  watch: {
    getCartData(data) {
      this.innerGetCartData = data.map((item, index) => {
        item["index"] = index;
        return item;
      });
    }
  },
  methods: {
    // toHomePage() {
    //   this.$router.push("/home_page");
    // },
    shippingInfoValidate(value) {
      this.orderValidate = value;
    },
    toCertainStep(step) {
      this.checkoutStep = step;
    },
    numberUpdate() {
      let id = localStorage.getItem("sessID");
      let items = this.$store.state.cartData;
      items = items.filter(item => item.qty !== 0);

      let data = {
        items,
        id
      };
      this.$store.dispatch("toggleLoading", true);
      this.$api.AddCartItem(data).then(res => {
        this.$store.dispatch("toggleLoading", false);
        this.$store.dispatch("setCartData");
        if (res.data.data.id !== "") {
          localStorage.setItem("sessID", res.data.data.id);
        }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.cart-page.index-content-router-view
    overflow-y: hidden
.cart-page
    .order-list-block
        padding: 0 .5rem 0 .5rem
        margin-top: .5rem
        overflow: hidden
    .order-infomation, .shipping-infomation-block
        background-color: #fff
        padding: 1rem
        height: calc(100vh - 8.8rem)
        overflow: scroll
    // .shipping-infomation-block
    //     height: calc(100vh - 50rem)
    .order-note-block
        margin-top: 3rem
        margin-bottom: 400px
        padding: .9rem 13rem .9rem 1.5rem
        border-radius: .5rem
        box-shadow: inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)
        border: solid .1rem #ede8e1
        background-color: #ffffff
        .note
            border: none
            font-size: 1.2rem
            font-weight: 500
            outline: none
            color: #333333
    .all-order-confirm-block
        padding: .5rem

    // .process-list-block
    //     padding-bottom: 2rem
    // .next-step-btn
    //     width: 50%
    //     padding: 1rem 2rem
    //     text-align: center
    //     margin: 2rem auto 5rem auto
</style>
