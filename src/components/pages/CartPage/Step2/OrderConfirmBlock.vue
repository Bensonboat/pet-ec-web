<template>
  <div class="order-confirm-block">
    <div
      class="operate-button click-animation-small"
      @click="togglePaymentSelectPage"
    >
      <div class="operate-text-block">
        <img src="/images/icons/pay.svg" alt="付款圖案" class="operate-icon" />
        <div>
          {{
            selectPaymentMethod === ""
              ? "選擇付款方式"
              : `${selectPaymentMethod.name} 付款`
          }}
        </div>
      </div>
      <img
        src="/images/icons/black-back.svg"
        alt="向下箭頭圖案"
        class="arrow-icon"
      />
    </div>
    <div
      class="operate-button click-animation-small"
      @click="toggleMemberSelect"
    >
      <div class="operate-text-block">
        <img
          src="/images/icons/points.svg"
          alt="星星圖案"
          class="operate-icon"
        />
        <div>將資料註冊會員並累積點數</div>
      </div>
      <div class="tick-block">
        <img
          v-show="memberSelected"
          src="/images/icons/black-tick.svg"
          alt="向下箭頭圖案"
          class="tick-icon"
        />
      </div>
    </div>
    <div class="next-step-block">
      <div class="previous-step-btn" @click="backToStepOne">上一步</div>
      <div
        class="order-confirm"
        :class="{ 'order-validate': orderValidate }"
        @click="checkoutConfirm"
      >
        確認結帳
      </div>
    </div>
    <transition name="left-in">
      <payment-select
        v-show="showPaymentSelectPage"
        @close-page="togglePaymentSelectPage"
        @payment-method="getPayementMethod"
      />
    </transition>
  </div>
</template>

<script>
import PaymentSelect from "./PaymentSelect";

export default {
  name: "Payment",
  props: ["orderValidate", "allOrderData"],
  components: {
    PaymentSelect
  },
  data() {
    return {
      memberSelected: true,
      showPaymentSelectPage: false,
      selectPaymentMethod: ""
    };
  },
  methods: {
    toggleMemberSelect() {
      this.memberSelected = !this.memberSelected;
    },
    backToStepOne() {
      this.$emit("to-certain-step", 1);
    },
    togglePaymentSelectPage() {
      this.showPaymentSelectPage = !this.showPaymentSelectPage;
    },
    checkoutConfirm() {
      if (!this.orderValidate) {
        return;
      }

      let data = this.allOrderData.shipping_info;
      data["order_note"] = this.allOrderData.order_note;

      this.$api
        .createOrders(data)
        .then(res => {
          alert(res.data.msg);
          console.log(res, "create orders res");
        })
        .catch(err => {
          alert(err.data.msg);
        });
      console.log(this.allOrderData, "#####");
    },
    getPayementMethod(payment) {
      this.selectPaymentMethod = payment;
    }
  }
};
</script>

<style lang="sass" scoped>
.order-confirm-block
    padding: .9rem 1.5rem
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2)
    background-color: #fff
    width: 100%
    position: absolute
    bottom: 0
    box-sizing: border-box
    .operate-button
        padding: .9rem 1.5rem
        border-radius: 5px
        border: solid 1px #333333
        background-color: #f2c47e
        display: flex
        align-items: center
        justify-content: space-between
        color: #333333
        margin-bottom: 1rem
    .operate-text-block
        display: flex
        justify-content: flex-start
    .operate-icon
        width: 1.6rem
        height: 1.6rem
        margin-right: .6rem
    .tick-block
        width: 1.4rem
        height: 1.4rem
        border-radius: .2rem
        border: solid .1rem #333333
        background-color: #f2c47e
    .tick-icon
        width: 1.4rem
        height: 1.4rem
    .arrow-icon
        width: 1.4rem
        height: 1.4rem
        transform: rotate(180deg)
    .next-step-block
        display: flex
        margin-top: 1.5rem
        justify-content: space-between
    .previous-step-btn
        padding: .9rem 2.6rem
        border-radius: .5rem
        border: solid 1px #333333
        background-color: #ffffff
        font-size: 1.2rem
        font-weight: 500
        color: #333333
    .order-confirm
        padding: .9rem 7.2rem
        border-radius: .5rem
        background-color: #333333
        color: #5c5c5c
        font-size: 1.2rem
        font-weight: 500
    .order-validate
        color: #e5ceae
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
