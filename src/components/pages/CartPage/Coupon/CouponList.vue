<template>
  <div class="coupon-list">
    <page-header :title="''" @previous-page="closeCouponList">
      <template #pageHeaderButton>
        <div
          class="add-coupon-btn click-animation-small"
          @click="toggleCreatePage"
        >
          輸入優惠序號
        </div>
      </template>
    </page-header>
    <div class="coupon-list-title">優惠卷選取</div>
    <div class="coupon-list-block">
      <div v-if="couponData.length === 0">尚無可使用的優惠卷</div>
      <div
        class="coupon"
        v-for="(item, index) in couponData"
        :key="index"
        :class="{
          selected: item.selected,
          'bottom-space': index + 1 === couponData.length
        }"
        @click="selectCoupon(index)"
      >
        <div class="coupon-name">{{ item.name }}</div>
        <div class="coupon-detail">{{ item.detail }}</div>
        <div class="coupon-time">有效期限 {{ item.time }}</div>
        <img
          v-show="item.selected"
          src="/images/icons/tick.svg"
          alt="打勾圖案"
          class="tick-icon"
        />
        <img
          src="/images/icons/coupon.svg"
          alt="coupon icon"
          class="coupon-icon"
        />
      </div>
    </div>
    <div
      class="confirm-btn click-animation-samll"
      :class="{ 'select-validate': selectValidate }"
      @click="couponSelectConfirm"
    >
      確認
    </div>
    <transition name="left-in">
      <coupon-create-page
        v-if="showCreateCouponPage"
        @close-create-page="toggleCreatePage"
      />
    </transition>
  </div>
</template>

<script>
import CouponCreatePage from "./CouponCreatePage";
import PageHeader from "@/components/layouts/PageHeader";

export default {
  name: "CouponList",
  components: {
    CouponCreatePage,
    PageHeader
  },
  data() {
    return {
      couponData: [
        {
          name: "$100 折扣優惠",
          detail: "結帳金額超過 $100 元方可使用",
          time: "2021年 12月 31日 下午 11時前使用",
          selected: false
        },
        {
          name: "半買半相送 超級好康五折卷 五折 五折 五折五折五折",
          detail:
            "結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用",
          time: "2021年 12月 31日 下午 11時前使用",
          selected: false
        },
        {
          name: "$100 折扣優惠",
          detail:
            "結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 ",
          time: "2021年 12月 31日 下午 11時前使用",
          selected: false
        },
        {
          name: "$100 折扣優惠",
          detail: "結帳金額超過 $100 元方可使用",
          time: "2021年 12月 31日 下午 11時前使用",
          selected: false
        },
        {
          name: "半買半相送 超級好康五折卷 五折 五折 五折五折五折",
          detail:
            "結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用",
          time: "2021年 12月 31日 下午 11時前使用",
          selected: false
        }
      ],
      selectValidate: false,
      showCreateCouponPage: false
    };
  },
  mounted() {
    this.getCoupon();
  },
  methods: {
    selectCoupon(index) {
      this.couponData.map((item, key) => {
        key === index ? (item.selected = true) : (item.selected = false);
        this.selectValidate = true;
      });
    },
    closeCouponList() {
      this.$emit("close-coupon-list");
    },
    couponSelectConfirm() {
      if (this.selectValidate) {
        alert("select!!");
        this.closeCouponList();
      }
    },
    toggleCreatePage() {
      this.showCreateCouponPage = !this.showCreateCouponPage;
    },
    getCoupon() {
      this.$api.getCoupon().then(res => {
        this.couponData = res.data.data;
      });
    }
    // closeCouponList() {
    //     this.$emit("close-coupon-list");
    // },
    // toggleView(){
    //     this.showCouponList = !this.showCouponList
    // }
  }
};
</script>

<style lang="sass" scoped>
.coupon-list
  position: fixed
  top: 0
  left: 0
  z-index: 999
  width: 100vw
  height: 100vh
  background-color: #e5ceae
  .coupon-list-title
    height: 5rem
    box-sizing: border-box
    padding: 1.3rem 1rem
    box-shadow: .1rem .1rem .1rem 0 rgba(0, 0, 0, 0.1)
    background-color: #333333
    display: flex
    align-items: center
  .coupon-list-title
    height: 4.4rem
    background-color: #efe1ce
    font-size: 1.2rem
    color: #333333
    padding-left: 2rem
    font-weight: 500
  .coupon-list-block
    padding: 1.5rem
    overflow: scroll
    height: 100%
  .coupon
    padding: 1rem 2rem
    border-radius: .5rem
    border: solid .1rem #ccaa76
    background-color: #f2c47e
    margin-bottom: 1rem
    position: relative
    overflow: hidden
  .selected
    border-color: #333333
    &:before
      content: ''
      display: block
      width: 5rem
      height: 5rem
      background-color: #333333
      position: absolute
      left: -3rem
      top: -3rem
      transform: rotate(45deg)
  .coupon-name
    font-size: 1.4rem
    font-weight: 500
    color: #333333
    margin-bottom: .2rem
  .coupon-detail
    font-size: 1.2rem
    color: #333333
    margin-bottom: 1rem
  .coupon-time
    font-size: 1.2rem
    color: #a67a3d
  .tick-icon
    width: 1rem
    height: 1rem
    position: absolute
    left: .35rem
    top: .2rem
  .bottom-space
    margin-bottom: 30rem
  .confirm-btn
    width: calc(100% - 1rem)
    padding: 1.3rem 1.5rem
    border-radius: .5rem
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.4)
    background-color: #333333
    position: fixed
    bottom: .5rem
    font-size: 1.5rem
    font-weight: 500
    color: #5c5c5c
    box-sizing: border-box
    left: 50%
    transform: translateX(-50%)
    text-align: center
    z-index: 3
  .select-validate
    color: #e5ceae
  .add-coupon-btn
    padding: .6rem 1rem
    border-radius: .5rem
    border: solid .1rem #efe1ce
    background-color: #333333
    box-sizing: border-box
    font-size: 1.2rem
    font-weight: 500
    color: #efe1ce
    position: absolute
    right: 1.5rem
  .coupon-icon
    position: absolute
    right: 0
    top: 50%
    transform: translate(40%, -50%)
    opacity: .2
    width: 8rem
    height: 8rem
  // 左側移入
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
