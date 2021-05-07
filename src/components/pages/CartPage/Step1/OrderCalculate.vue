<template>
  <div
    class="coupon-calculate"
    :class="[showBottom ? 'show-bottom' : 'hide-bottom']"
  >
    <div
      @click="toggleBottomBlock"
      class="flex-center"
      style="border-radius: 50%; width: 2.5rem; height: 2.5rem; background-color: #333333; position: absolute; left: 50%; top: 0; transform: translate(-50%, -50%)"
    >
      <img
        v-show="!showBottom"
        src="/images/icons/back.svg"
        alt=""
        style="width: 1.6rem; height: 1.6rem; transform: rotate(90deg)"
      />
      <img
        v-show="showBottom"
        src="/images/icons/back.svg"
        alt=""
        style="width: 1.6rem; height: 1.6rem; transform: rotate(-90deg)"
      />
    </div>
    <div class="detail-block">
      <div class="total-items-number">
        共 {{ this.$store.state.cartData.length }}件商品
      </div>
      <div class="order-detail-price-block">
        <div
          class="detail-item"
          v-for="(item, index) in orderDetailItems"
          :key="index"
        >
          <div class="item">{{ item.label }}</div>
          <div class="item">{{ item.price }}</div>
        </div>

        <!-- <div class="detail-item">
          <div class="item">商品金額</div>
          <div class="item">{{ total }}</div>
        </div>
        <div class="detail-item">
          <div class="item">折扣優惠</div>
          <div class="item">
            - <span v-show="discountPirce !== 0">{{ discountPirce }}</span>
          </div>
        </div> -->
        <div class="detail-item">
          <div class="item">小計</div>
          <div class="item total-price">NT$ 999</div>
        </div>
      </div>
    </div>
    <div class="functional-btn" @click="toggleUsingPointsSelect">
      <div class="functional-btn-text">
        <img src="/images/icons/points.svg" alt="點數" class="icon" />
        <div>點數 120點</div>
      </div>
      <div class="flex-center">
        <div>此筆訂單可折抵 12 元</div>
        <div class="tick-block flex-center">
          <img
            v-show="usingPointsSelect"
            src="/images/icons/black-tick.svg"
            alt="向下箭頭圖案"
            class="tick-icon"
          />
        </div>
      </div>
    </div>
    <div class="functional-btn" @click="toggleCouponList">
      <div class="functional-btn-text">
        <img src="/images/icons/coupon.svg" alt="優惠卷圖案" class="icon" />
        <div>選擇優惠卷序號</div>
      </div>
      <img
        src="/images/icons/black-back.svg"
        alt="向下箭頭圖案"
        class="arrow-icon"
      />
    </div>
    <div class="next-step-block">
      <div class="keep-shopping click-animation-small" @click="keepShoping">
        繼續選購
      </div>
      <div class="next-step click-animation-small" @click="nextStep">
        下一步
      </div>
    </div>
    <transition name="left-in">
      <coupon-list
        v-if="showCouponListBlock"
        @close-coupon-list="toggleCouponList"
      />
    </transition>
  </div>
</template>

<script>
import CouponList from "../Coupon/CouponList";

export default {
  name: "OrderCalculate",
  components: { CouponList },
  data() {
    return {
      showCouponListBlock: false,
      total: 0,
      discountPirce: 100,
      usingPointsSelect: false,
      orderDetailItems: {
        productsTotalPrice: {
          label: "商品金額",
          price: 0
        },
        delivery: {
          label: "運費",
          price: 50
        },
        coupon: {
          label: "折扣優惠",
          price: -200
        }
      },
      showBottom: false
    };
  },
  mounted() {
    // 初始進來 computed 可能不會作用，所以 mounted 做一次更新金額的動作
    let cart_data = this.$store.state.cartData;
    this.orderDetailItems.productsTotalPrice.price = this.allProductsCalculate(
      cart_data
    );
  },
  computed: {
    getCartData() {
      return this.$store.state.cartData;
    }
  },
  watch: {
    getCartData(data) {
      this.orderDetailItems.productsTotalPrice.price = this.allProductsCalculate(
        data
      );
    },
    usingPointsSelect(value) {
      if (value) {
        this.orderDetailItems["pointsDiscount"] = {
          label: "點數折扣",
          price: -12
        };
      } else {
        delete this.orderDetailItems["pointsDiscount"];
      }
    }
  },
  methods: {
    nextStep() {
      this.$emit("next-step", 2);
    },
    toggleCouponList() {
      this.showCouponListBlock = !this.showCouponListBlock;
    },
    keepShoping() {
      this.$router.push("/category_page/cat");
    },
    allProductsCalculate(data) {
      if (data.length === 0) {
        return;
      }

      let total = data
        .map(item => {
          return item.price * item.qty;
        })
        .reduce((a, b) => a + b);
      return total;
    },
    toggleUsingPointsSelect() {
      this.usingPointsSelect = !this.usingPointsSelect;
    },
    toggleBottomBlock() {
      this.showBottom = !this.showBottom;
    }
    // calculateOrder() {
    //   let total = 0;
    //   for (let item in this.orderDetailItems) {
    //     total += this.orderDetailItems[item].price;
    //   }
    //   // this.orderDetailItems.map(item => {
    //   //   console.log(item);
    //   // });
    //   return total;
    // }
  }
};
</script>

<style lang="sass" scoped>
.show-bottom
  bottom: 0
.hide-bottom
  top: 90%
.coupon-calculate
    padding: .9rem 1.5rem
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2)
    background-color: #fff
    width: 100%
    position: absolute
    // bottom: 0
    // top: 90%
    box-sizing: border-box
    .detail-block
        display: flex
        justify-content: space-between
    .total-items-number
        flex: 1
        font-size: 1.2rem
        font-weight: 500
        color: #9b9b9b
    .order-detail-price-block
        flex: 1
    .detail-item
        font-size: 1.2rem
        font-weight: 500
        color: #333333
        display: flex
        justify-content: flex-end
        margin-bottom: .5rem
        align-items: center
        .item
            flex: 1
            text-align: right
    .functional-btn
        padding: .9rem 1.5rem
        border-radius: 5px
        border: solid 1px #333333
        background-color: #f2c47e
        display: flex
        align-items: center
        justify-content: space-between
        color: #333333
        margin-top: 1rem
    .functional-btn-text
        display: flex
        justify-content: flex-start
    .icon
        width: 1.6rem
        height: 1.6rem
        margin-right: .6rem
    .arrow-icon
        width: 1.4rem
        height: 1.4rem
        transform: rotate(180deg)
    .next-step-block
        display: flex
        margin-top: 1.5rem
        justify-content: space-between
    .keep-shopping
        padding: .9rem 2.6rem
        border-radius: .5rem
        border: solid 1px #333333
        background-color: #ffffff
        font-size: 1.2rem
        font-weight: 500
        color: #333333
    .next-step
        padding: .9rem 7.2rem
        border-radius: .5rem
        background-color: #333333
        color: #e5ceae
        font-size: 1.2rem
        font-weight: 500
    .total-price
        color: #f94956
    .tick-block
        width: 1.4rem
        height: 1.4rem
        border-radius: .2rem
        border: solid .1rem #333333
        background-color: #f2c47e
        margin-left: 1rem
    .tick-icon
        width: 1.2rem
        height: 1.2rem


    // 動畫 左側移入
    .left-in-leave
        left: 0
        opacity: 1
    .left-in-leave-active
        transition: .3s linear
    .left-in-leave-to
        left: -30rem
        opacity: 0
    .left-in-enter
        left: -30rem
        opacity: 0
    .left-in-enter-active
        transition: .3s linear
    .left-in-enter-to
        left: 0
        opacity: 1
</style>
