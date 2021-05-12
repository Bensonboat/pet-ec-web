<template>
  <div class="order-complete-detail">
    <div v-for="(item, index) in orderData" :key="index" class="detail-row">
      <div class="label">{{ item.label }}</div>
      <div class="value">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCompleteDetail",
  data() {
    return {
      orderData: {
        date: {
          label: "訂單日期",
          value: "2021-03-20"
        },
        order_code: {
          label: "訂單編號",
          value: "#1426370786968"
        },
        payment: {
          label: "付款方式",
          value: "信用卡"
        },
        delivery: {
          label: "收貨方式",
          value: "全家(新東二店)"
        },
        name: {
          label: "姓名",
          value: "花柚子"
        },
        phone: {
          label: "電話",
          value: "0987654321"
        },
        address: {
          label: "地址",
          value:
            "台中市西屯區市政北七路238號10樓A2台中市西屯區市政北七路238號10樓A2"
        },
        email: {
          label: "信箱",
          value: "test@gmail.com"
        }
      }
    };
  }
};
</script>

<style lang="sass" scoped>
.order-complete-detail
  background-color: #fff
  width: 29rem
  margin: auto
  padding: 1rem
  font-family: NotoSansTC, roboto
  font-size: 1.2rem
  font-weight: 500
  border-radius: .5rem
  border: solid .1rem #ede8e1
  .detail-row
    display: flex
    align-items: flex-start
    justify-content: space-between
    margin-bottom: 1rem
  .label
    color: #9b9b9b
    flex: 1
    display: flex
    justify-content: flex-start
  .value
    color: #333333
    flex: 2
    display: flex
    justify-content: flex-end
    text-align: left
</style>
