<template>
  <div class="order-complete-page">
    <div class="page-header flex-center">
      <img src="/images/icons/Logo.svg" alt="logo" class="logo-icon" />
    </div>
    <!-- <page-header /> -->
    <div class="title">訂單成功</div>
    <div class="description">訂單成功訂單成功訂單成功訂單成功訂單成功</div>
    <order-complete-detail class="detail" />
    <div class="total-price-block">
      <div class="text">訂單總金額</div>
      <div class="price">NT$2,380</div>
    </div>
    <router-link to="/home">
      <button class="home-btn flex-center">回首頁</button>
    </router-link>
    <!-- <div class="home-btn flex-center">回首頁</div> -->
  </div>
</template>

<script>
import OrderCompleteDetail from "@/components/layouts/OrderCompleteDetail";
// import PageHeader from "../../layouts/PageHeader.vue";
export default {
  name: "OrderCompletePage",
  components: {
    OrderCompleteDetail
    // PageHeader
  }
};
</script>

PageHeader<style lang="sass" scoped>
.order-complete-page
  // padding: .6rem
  font-weight: 500
  text-align: center
  color: #333333
  position: relative
  padding-top: 5rem
  .page-header
    height: 5rem
    width: 100%
    box-shadow: 0 .2rem .4rem 0 rgba(0, 0, 0, 0.15)
    background-color: #333333
    font-size: 1.4rem
    font-weight: 500
    color: #efe1ce
    position: fixed
    top: 0
    left: 0
  .logo-icon
    display: flex
    width: 12rem
    height: 4rem
  .detail
    margin-top: 1.5rem
  .title
    font-size: 1.4rem
    margin: 1.5rem 0 .4rem 0
  .description
    font-size: 1.2rem
  .total-price-block
    display: flex
    justify-content: space-between
    padding: 1rem
  .text
    font-family: NotoSansTC
    font-size: 12px
  .price
    font-family: roboto
    font-size: 1.4rem
    color: #f94956
  .home-btn
    width: calc(100%  -  1.2rem)
    height: 4.4rem
    border-radius: .5rem
    background-color: #333333
    font-family: NotoSansTC
    font-size: 1.5rem
    font-weight: 500
    color: #e5ceae
    position: fixed
    bottom: 1.5rem
    left: 50%
    transform: translateX(-50%)
</style>
