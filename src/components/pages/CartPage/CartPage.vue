<template>
  <div class="cart-page">
    <cart-empty v-if="innerGetCartData.length === 0" />
    <div v-else>
      <checkout-process :step="checkoutStep" />
      <div>
        <div v-show="checkoutStep === 1">
          <div class="order-list-block" @click="toggleOrderCalculateBlock">
            <div class="order-infomation" @scroll="toggleOrderCalculateBlock">
              <cart-item-attribute
                v-for="(item, index) in innerGetCartData"
                :key="index"
                :cartData="item"
              />
              <div class="order-note-block">
                <input
                  type="text"
                  placeholder="請輸入訂單備註"
                  class="note"
                  v-model="orderNote"
                />
              </div>
            </div>
          </div>
          <order-calculate @next-step="toCertainStep" ref="order_calculate" />
        </div>
        <div v-show="checkoutStep === 2">
          <div class="all-order-confirm-block">
            <div class="shipping-infomation-block">
              <shipping-infomation
                :userData="userData"
                @shipping-info-validate="shippingInfoValidate"
                @shipping-info="getShippingInfo"
              />
            </div>
          </div>
          <order-confirm-block
            :orderValidate="orderValidate"
            :allOrderData="allOrderData"
            @to-certain-step="toCertainStep"
          />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <!-- <div v-if="$store.state.globalModalContent !== ''">
      <div class="modal-mask"></div>
      <base-modal @btn1="btn1" @btn2="btn2" />
    </div> -->
  </div>
</template>

<script>
import CheckoutProcess from "./CheckoutSteps";
import OrderCalculate from "./Step1/OrderCalculate";
import ShippingInfomation from "./Step2/ShippingInfomation";
import OrderConfirmBlock from "./Step2/OrderConfirmBlock";
import CartItemAttribute from "./Step1/CartItemAttribute";
import CartEmpty from "./CartEmpty";
// import BaseModal from "@/components/layouts/BaseModal";

export default {
  name: "CartPage",
  components: {
    CheckoutProcess,
    CartItemAttribute,
    OrderCalculate,
    ShippingInfomation,
    OrderConfirmBlock,
    CartEmpty
    // BaseModal
  },
  data() {
    return {
      checkoutStep: 1,
      orderValidate: false, // 是否填寫必要欄位
      innerGetCartData: this.$store.state.staticFakeDefaultCartData,
      orderNote: "",
      allOrderData: "",
      userData: ""
    };
  },
  created() {
    this.$store.dispatch("setCartData");
  },
  mounted() {
    this.$store.dispatch("toggleLoading", true);
    this.getUserData();
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
      this.$store.dispatch("toggleLoading", false);
    }
  },
  methods: {
    shippingInfoValidate(value) {
      this.orderValidate = value;
    },
    toCertainStep(step) {
      this.checkoutStep = step;
    },
    getShippingInfo(data) {
      this.allOrderData = {
        shipping_info: data,
        order_note: this.orderNote,
        items: this.$store.state.cartData
      };
    },
    // btn1() {
    //   let items = this.$store.state.cartData;
    //   items = items.filter(item => item.qty !== 0);
    //   this.updateCart(items);
    //   this.$store.dispatch("setGlobalModalContent", "");
    // },
    // btn2() {
    //   let items = this.$store.state.cartData;
    //   items = items.map(item => {
    //     item.qty === 0 ? (item.qty = 1) : "";
    //     return item;
    //   });
    //   this.updateCart(items);
    //   this.$store.dispatch("setGlobalModalContent", "");
    // },
    // updateCart(items) {
    //   let id = localStorage.getItem("sessID");
    //   let data = {
    //     items,
    //     id
    //   };
    //   this.$store.dispatch("toggleLoading", true);
    //   this.$api.AddCartItem(data).then(() => {
    //     this.$store.dispatch("toggleLoading", false);
    //     this.$store.dispatch("setCartData");
    //   });
    // },
    getUserData() {
      this.$api
        .getUsers()
        .then(res => {
          this.userData = res.data.data;
          this.$store.dispatch("setUser", this.userData);
        })
        .catch(err => {
          if (err.data.code === 3002) {
            alert("請重新登入");
            this.$router.push("/login");
          }
        });
    },
    toggleOrderCalculateBlock() {
      this.$refs.order_calculate.toggleBottomBlock();
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
        margin-bottom: 12rem
        // margin-bottom: 400px
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
