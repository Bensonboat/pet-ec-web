<template>
  <div class="shipping-infomation">
    <div
      v-for="(item, index) in shippingData"
      :key="index"
      class="each-info-block"
    >
      <div class="title">{{ item.title }}</div>
      <!-- <div
        class="input-block"
        :class="{
          'bottom-space': index === 3
        }"
      > -->
      <input
        type="text"
        :placeholder="item.placeholder"
        class="input"
        v-model="item.value"
      />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingInfomation",
  props: ["userData"],
  data() {
    return {
      shippingData: [
        {
          title: "姓名",
          placeholder: "請輸入收件人姓名",
          value: ""
        },
        {
          title: "電話",
          placeholder: "請輸入收件人電話",
          value: ""
        },
        {
          title: "住址",
          placeholder: "請輸入收件地址",
          value: ""
        },
        {
          title: "信箱",
          placeholder: "請輸入收件人信箱",
          value: ""
        }
      ],
      shippingInfomationValidate: false
    };
  },
  watch: {
    userData: {
      handler(data) {
        this.shippingData[0].value = data.firstname;
        this.shippingData[1].value = data.mobile;
        this.shippingData[3].value = data.email;
      }
    },
    shippingData: {
      handler(data) {
        this.shippingInfomationValidate = true;

        data.map(item => {
          if (item.value === "") {
            this.shippingInfomationValidate = false;
          }
        });

        if (this.shippingInfomationValidate) {
          let data = {
            customer_email: `${this.shippingData[3].value}`,
            customer_firstname: `${this.shippingData[0].value} - 消費者姓名`,
            customer_contact: `${this.shippingData[1].value} - 消費者聯絡方式`,
            payment_method: "creditCard",
            shipment_method: "delivery",
            receiver_firstname: `${this.shippingData[0].value} - 收件人姓名`,
            receiver_contact: `${this.shippingData[1].value} - 收件人聯絡方式`,
            address: this.shippingData[2].value,
            city: "City",
            country: "country",
            district: "district",
            postcode: "800",
            cart_id: localStorage.getItem("sessID")
          };
          this.$emit("shipping-info", data);
        }
        this.$emit("shipping-info-validate", this.shippingInfomationValidate);
      },
      deep: true
    }
  }
};
</script>

<style lang="sass" scoped>
.shipping-infomation
    background-color: #fff
    color: #333333
    // padding: 1.5rem
    font-size: 1.2rem
    font-weight: 500
    .title
        margin-bottom: .6rem
        &:before
            content: '*'
            color: #f66e78
            margin-right: .2rem
    // .input-block
    //     padding: .9rem 1.5rem
    //     border-radius: .5rem
    //     background-color: #f7f0e6
    .input
      font-size: 1.2rem
      height: 100%
      border: none
      outline: none
      background-color: transparent
      width: 100%
      padding: .9rem 1.5rem
      border-radius: .5rem
      background-color: #f7f0e6
      box-sizing: border-box
      &:focus
        border: solid .1rem #e8bb7d
    // .input-valid
    //     border: solid .1rem #e8bb7d
    .each-info-block
        margin-bottom: 1.2rem
    .bottom-space
        margin-bottom: 400px
</style>
