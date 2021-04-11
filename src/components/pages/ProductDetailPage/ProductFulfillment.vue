<template>
  <div class="product-fulfillment">
    <div class="item">
      <div class="title">送貨方式</div>
      <div class="content">宅配</div>
    </div>
    <div class="item">
      <div class="title">付款方式</div>
      <div class="content">信用卡一次付清</div>
      <div class="content">貨到付款</div>
    </div>
    <div class="item">
      <div class="title">退換貨須知</div>
      <div class="content">
        1. 七天鑑賞期，享有免費退貨服務(以收執聯簽收日或郵戳為憑)。
      </div>
      <div class="content">2. 商品拆封使用後，無法提供退貨。</div>
      <div class="content">
        3. 單筆訂單僅提供一次退貨，若第二次退貨則會請消費者負擔運費。
      </div>
      <div class="content">4. 特價出清即期商品不可退貨。</div>
      <div class="content">5. 傳LINE告知訂單編號、退貨商品以及退貨原因。</div>
      <div class="content">
        6.
        退貨之商品，需保持寄達時商品原貌(包含完整商品、配件、說明書及發票等)。
      </div>
      <div class="content">
        7.
        提出退貨申請的2-3工作天內，與您聯繫確認後，宅配人員到指定地址收取退貨包裏。
      </div>
      <div class="content">
        8.
        退貨商品請裝回原運送裝材，如已損壞則需找新外包裝，勿將託運單直接黏貼於商品。
      </div>
      <div class="content">9. 商品退回後，拍照回傳託運單簽收聯。</div>
      <div class="content">
        10.
        商品退回倉庫驗收無誤後，即可退購物金到您的帳戶(刷卡的訂單將會進行刷退)。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductFulfillment"
};
</script>

<style lang="sass" scoped>
.product-fulfillment
  font-size: 1.2rem
  font-weight: 500
  color: #333333
  .item
    padding: 0 1.5rem 1rem 1.5rem
    border-radius: .3rem
    margin-bottom: 2rem
    border-bottom: solid 1px rgba(51, 51, 51, 0.15)
  .title
    color: #c78832
    margin-bottom: .6rem
  .content
    margin-bottom: .4rem
</style>
