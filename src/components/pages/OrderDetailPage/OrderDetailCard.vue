<template>
  <div class="order-detail-card">
    <div class="order-number-row flex-center">
      <div>#1426370786968</div>
      <div>2021-03-20</div>
    </div>
    <div class="product-detail-block flex-center">
      <img src="/images/p1.jpg" alt="商品圖片" class="product-img" />
      <div>
        <div class="name">EQUILÍBRIO 尊爵 機能天然糧食 尊爵 機能天然糧食</div>
        <div class="spec-number-row flex-center">
          <div>3KG</div>
          <div>x2</div>
        </div>
        <div class="payment-price-row flex-center">
          <div>貨到付款</div>
          <div class="price">NT$2,380</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetailCard"
};
</script>

<style lang="sass" scoped>
.order-detail-card
    padding: 1rem
    box-shadow: .1rem .1rem .1rem 0 rgba(0, 0, 0, 0.1)
    background-color: #ffffff
    margin-bottom: .5rem
    .order-number-row
        justify-content: space-between
        font-size: 1.4rem
        font-weight: 500
        color: #c8a87b
    .product-detail-block
        margin-top: 1rem
        padding-top: 1rem
        border-top: solid .1rem #f7f0e6
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
        padding-right: 1rem
        margin-top: .5rem
    .payment-price-row
        justify-content: space-between
        padding-right: 1rem
        margin-top: 2rem
    .price
        color: #f94956
</style>
