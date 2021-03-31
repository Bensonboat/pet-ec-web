<template>
  <div class="coupon-add-page">
    <page-header :title="'新增優惠序號'" @previous-page="closeCreatePage" />
    <div class="content-block">
      <div class="input-block">
        <input
          type="text"
          class="input"
          placeholder="請輸入優惠序號"
          v-model="couponNumber"
        />
      </div>
      <div
        class="confirm-btn click-animation-small"
        :class="{ 'input-valid': couponNumber !== '' }"
      >
        確認
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/layouts/PageHeader";
export default {
  name: "CouponAddPage",
  components: {
    PageHeader
  },
  data() {
    return {
      couponNumber: ""
    };
  },
  methods: {
    closeCreatePage() {
      this.$emit("close-create-page");
    }
  }
};
</script>

<style lang="sass" scoped>
.coupon-add-page
    position: fixed
    top: 0
    left: 0
    z-index: 999
    width: 100vw
    height: 100vh
    background-color: #e5ceae
    .content-block
        padding: 1.5rem
    .input-block
        padding: 1.3rem 1.5rem
        border-radius: .5rem
        background-color: #ffffff
    .input
        width: 100%
        border: none
        outline: none
        font-size: 1.2rem
        font-weight: 500
        color: #333333
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
</style>
