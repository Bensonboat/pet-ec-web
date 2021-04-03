<template>
  <div class="order-detail-page">
    <page-header :title="'訂單詳情'" @previous-page="previousPage" />
    <div class="sub-title-row flex-center">
      <div
        class="sub-title flex-center"
        :class="{ 'active-tab': !checkingFinishedOrder }"
        @click="toggleCheckingTab"
      >
        處理中
      </div>
      <div
        class="sub-title flex-center"
        :class="{ 'active-tab': checkingFinishedOrder }"
        @click="toggleCheckingTab"
      >
        已完成
      </div>
    </div>
    <div class="order-content-block">
      <order-detail-card />
      <order-detail-card />
      <order-detail-card />
      <order-detail-card />
      <order-detail-card />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/layouts/PageHeader";
import OrderDetailCard from "./OrderDetailCard";

export default {
  name: "OrderDetailPage",
  components: {
    PageHeader,
    OrderDetailCard
  },
  data() {
    return {
      checkingFinishedOrder: true // false for Processing ; true for Finished
    };
  },
  methods: {
    previousPage() {
      this.$router.go(-1);
    },
    toggleCheckingTab() {
      this.checkingFinishedOrder = !this.checkingFinishedOrder;
    }
  }
};
</script>

<style lang="sass" scoped>
.order-detail-page
    .others-btn
        position: absolute
        right: 1rem
    .sub-title-row
        height: 4.4rem
        box-shadow: .1rem .1rem .1rem 0 rgba(0, 0, 0, 0.1)
        background-color: #efe1ce
        font-size: 1.4rem
        font-weight: 500
        color: rgba(51, 51, 51, 0.6);
    .sub-title
        flex: 1
        height: 100%
        box-sizing: border-box
    .active-tab
        color: #333333
        border-bottom: solid .3rem #c8a87b
    .order-content-block
        padding: .5rem
        height: calc(100% - 10rem)
        overflow: scroll
</style>
