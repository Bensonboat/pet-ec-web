<template>
  <div class="payment-select-page">
    <page-header :title="'付款方式'" @previous-page="close" />
    <div class="content-block">
      <div
        v-for="(item, index) in payments"
        :key="index"
        class="payment-btn"
        :class="{ selected: item.selected }"
        @click="selectPayment(index)"
      >
        {{ item.name }}
        <img
          v-show="item.selected"
          src="/images/icons/tick.svg"
          alt="打勾圖案"
          class="tick-icon"
        />
      </div>
      <!-- <div
        class="confirm-btn click-animation-small"
        :class="{ 'input-valid': isSelected }"
      >
        確認
      </div> -->
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/layouts/PageHeader";

export default {
  name: "PaymentSelectPage",
  components: {
    PageHeader
  },
  data() {
    return {
      isSelected: false,
      payments: [
        {
          name: "貨到付款",
          value: "cash_on_delivery",
          selected: false
        },
        {
          name: "信用卡",
          value: "creditCard",
          selected: false
        },
        {
          name: "ATM 轉帳",
          value: "atm",
          selected: false
        },
        {
          name: "超商代碼",
          value: "cvs",
          selected: false
        },
        {
          name: "超商條碼",
          value: "barcode",
          selected: false
        }
      ]
    };
  },
  methods: {
    selectPayment(index) {
      this.payments = this.payments.map((item, key) => {
        if (index === key) {
          item.selected = true;
          this.isSelected = true;
          this.passPaymentMethod(item);
        } else {
          item.selected = false;
        }
        return item;
      });
      this.close();
    },
    close() {
      this.$emit("close-page");
    },
    passPaymentMethod(item) {
      this.$emit("payment-method", item);
    }
  }
};
</script>

<style lang="sass" scoped>
.payment-select-page
    position: fixed
    top: 0
    left: 0
    z-index: 999
    width: 100vw
    height: 100vh
    background-color: #e5ceae
    .content-block
        padding: 1.5rem
    .payment-btn
        padding: 1rem 2rem
        border-radius: .5rem
        border: solid .1rem #ccaa76
        background-color: #f2c47e
        font-size: 1.4rem
        font-weight: 500
        color: #333333
        margin-bottom: 1.2rem
        position: relative
        overflow: hidden
    .tick-icon
        width: 1rem
        height: 1rem
        position: absolute
        left: .35rem
        top: .2rem
    .confirm-btn
        border-radius: .5rem
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4)
        background-color: #333333
        padding: 1.3rem 1.5rem
        font-size: 1.5rem
        font-weight: 500
        color: #5c5c5c
        box-sizing: border-box
        display: flex
        justify-content: center
        align-items: center
        position: fixed
        bottom: .5rem
        width: calc(100%  -  1rem)
        left: 50%
        transform: translateX(-50%)
    .input-valid
        color: #e5ceae
    .selected
        border-color: #333333
        &::before
            content: ''
            display: block
            width: 5rem
            height: 5rem
            background-color: #333333
            position: absolute
            left: -3rem
            top: -3rem
            transform: rotate(45deg)
</style>
