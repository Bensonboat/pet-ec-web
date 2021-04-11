<!-- 快速加入的商品 modal -->
<template>
  <div class="product-basic-spec">
    <div class="all-spec-block">
      <img
        src="/images/icons/close.svg"
        alt="關閉按鈕"
        class="close-icon click-animation"
        @click="closeAllSpecModal"
      />
      <div class="product-attribute-block">
        <img :src="productData[0]" alt="商品圖片" class="product-image" />
        <div class="name-price-block">
          <div class="product-name">{{ productData.title }}</div>
          <div
            class="price origin-price"
            :class="{ 'origin-price-remove': productData.price !== '' }"
          >
            {{ productData.origin_price }}
          </div>
          <div class="price special-price">{{ productData.price }}</div>
        </div>
      </div>
      <div class="product-spec-block">
        <div class="spec-text">規格</div>
        <div class="spec-options-block">
          <!-- 
                    <div class="spec-option selected">
                        2kg
                        <img src="/images/icons/tick.svg" alt="打勾圖案" class="tick-icon">
                    </div> -->
          <div
            class="spec-option"
            v-for="(item, index) in specOptions"
            :key="index"
            :class="{ selected: item.selected }"
            @click="selectItem(index)"
          >
            {{ item.name }}
            <img
              v-show="item.selected"
              src="/images/icons/tick.svg"
              alt="打勾圖案"
              class="tick-icon"
            />
          </div>
          <!-- <div class="spec-option">6kg</div>
                    <div class="spec-option">2kg</div>
                    <div class="spec-option">4kg</div>
                    <div class="spec-option">6kg</div>
                    <div class="spec-option">2kg</div>
                    <div class="spec-option">4kg</div>
                    <div class="spec-option">6kg</div> -->
        </div>
      </div>
      <div
        class="number-block"
        :class="{ 'not-allow-operate': !allowSelectNumber }"
      >
        <div>數量</div>
        <div class="select-number-block">
          <div
            class="btn number-operate-block minus click-animation-small"
            @click="selectNumber(-1)"
          >
            <img
              src="/images/icons/less.svg"
              alt="減一圖案"
              class="select-number-icon"
            />
          </div>
          <div class="btn">{{ number }}</div>
          <div
            class="btn number-operate-block add click-animation-small"
            @click="selectNumber(1)"
          >
            <img
              src="/images/icons/plus.svg"
              alt="加一圖案"
              class="select-number-icon"
            />
          </div>
        </div>
      </div>
      <div
        class="confirm-btn click-animation"
        :class="{ ok: number > 0 }"
        @click="confirm"
      >
        確認
      </div>
    </div>
  </div>
</template>

<script>
import * as types from "../../store/mutation-types";
// import store from '../../store';
// import API from '@/axios/api'

export default {
  name: "ProductBasicSpec",
  data() {
    return {
      allowSelectNumber: false,
      productData: {},
      specOptions: [],
      // specOptions: [
      //     {
      //         name: '2kg',
      //         value: '2kg',
      //         selected: false
      //     },
      //     {
      //         name: '4kg',
      //         value: '4kg',
      //         selected: false
      //     },
      //     {
      //         name: '6kg',
      //         value: '6kg',
      //         selected: false
      //     },
      //     {
      //         name: '8kg',
      //         value: '8kg',
      //         selected: false
      //     },
      //     {
      //         name: '10kg',
      //         value: '10kg',
      //         selected: false
      //     },
      //     {
      //         name: '2kg雞肉口味',
      //         value: '2kg',
      //         selected: false
      //     },
      //     {
      //         name: '4kg字數測試 字數測試',
      //         value: '4kg',
      //         selected: false
      //     },
      //     {
      //         name: 'M',
      //         value: '6kg',
      //         selected: false
      //     },
      // ],
      number: 0
    };
  },
  mounted() {
    this.getSingleProductData();
  },
  methods: {
    closeAllSpecModal() {
      this.$store.commit(types.SHOW_PRODUCT_ALL_SPEC_MODAL, false);
    },
    selectItem(index) {
      this.specOptions.map((item, key) => {
        if (this.number === 0) {
          this.number = 1;
        }

        if (index === key) {
          item.selected = true;
          this.allowSelectNumber = true;
          this.productData.price = item.price;
          this.productData.origin_price = item.origin_price;
        } else {
          item.selected = false;
        }
      });
    },
    selectNumber(number) {
      this.number = this.number + number;
      if (this.number < 0) {
        this.number = 0;
      }
    },
    confirm() {
      let data = this.addToCartDataParser();
      data = {
        items: [data]
      };
      this.$store.dispatch("toggleLoading", true);
      this.$api.AddCartItem(data).then(res => {
        console.log(res, "??? CART");
        alert(res.data.msg);
        this.$store.dispatch("toggleLoading", false);
        this.$store.dispatch("setCartData", data);

        if (res.data.data.id !== "") {
          document.cookie = `sessid=${res.data.data.id}`;
        }
      });
      this.closeAllSpecModal();
    },
    getSingleProductData() {
      let data = this.$store.state.singleProductData;
      this.productData = data;

      let skus = data.skus;
      if (skus.length > 0) {
        this.specOptions = skus.map(item => {
          return {
            name: item.name,
            value: item.sku,
            selected: false,
            origin_price: item.origin_price,
            price: item.price,
            id: item.id
          };
        });
      }
    },
    addToCartDataParser() {
      let spec_obj = this.specOptions.find(item => item.selected);
      let product_data = this.productData;
      let to_cart_data = {
        qty: this.number,
        product_id: product_data.id,
        title: product_data.title,
        description: product_data.description,
        type: product_data.type,
        subType: product_data.subType,
        sku_id: spec_obj.id,
        sku_name: spec_obj.name,
        // image: product_data.image[0],
        price: spec_obj.price
      };

      return to_cart_data;
    }
  }
};
</script>

<style lang="sass" scoped>
.product-basic-spec
    position: fixed
    width: 100vw
    height: 100vh
    background-color: rgba(0, 0, 0, .8)
    z-index: 30
    top: 0
    left: 0
    .all-spec-block
        color: #333333
        width: 100vw
        max-width: 900px
        left: 50%
        transform: translateX(-50%)
        // height: 30.5rem
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4)
        background-color: #ffffff
        position: fixed
        bottom: 0
        z-index: 10
        padding: 1.5rem
        box-sizing: border-box
    .close-icon
        width: 1.4rem
        height: 1.4rem
        position: absolute
        right: 1rem
        top: 1rem
    .product-attribute-block
        display: flex;
        align-items: flex-start
        justify-content: space-between
    .product-image
        width: 8rem
        height: 8rem
    .name-price-block
        flex-grow: 1
    .product-name
        font-size: 1.4rem
        font-weight: 500
        width: 90%
    .price
        // font-family: MicrosoftSansSerif
    .origin-price
        font-size: 1.3rem
        margin-top: .7rem
    .origin-price-remove
        text-decoration: line-through
    .special-price
        font-size: 1.6rem
        color: #f94956
        margin-top: .4rem
    .product-spec-block
        margin-top: 3rem
    .spec-text
        font-size: 1.2rem
        font-weight: 500
    .spec-options-block
        display: flex
        flex-wrap: wrap
    .spec-option
        padding: .5rem 1.2rem // 自行調整過
        border-radius: .4rem
        background-color: #f7f0e6
        margin: .8rem .8rem 0 0
        font-size: 1.2rem
        font-weight: 500
        position: relative
        overflow: hidden
        box-sizing: border-box
        border: solid 1px #f7f0e6
    .selected
        border-color: #333333
        &::before
            content: ''
            display: block
            width: 5rem
            height: 5rem
            background-color: #333333
            position: absolute
            left: -3.7rem
            top: -3rem
            transform: rotate(45deg)
    .tick-icon
        width: .7rem
        height: .7rem
        position: absolute
        left: .25rem
        top: .1rem
    .number-block
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: 2.7rem
        font-size: 1.2rem
        font-weight: 500
    .number-operate-block
        width: 3.2rem
    .select-number-block
        width: 12rem
        height: 2.4rem
        border-radius: .4rem
        background-color: #f7f0e6
        display: flex
        align-items: center
        justify-content: space-around
        text-align: center
        .btn
            height: 100%
            width: 100%
            display: flex
            align-items: center
            justify-content: center
    .minus
        border-right: solid .1rem #ffffff
    .add
        border-left: solid .1rem #ffffff
    .select-number-icon
        width: 1.2rem
        height: 1.2rem
    .confirm-btn
        border-radius: .5rem
        background-color: #333333
        margin-top: 2.5rem
        font-size: 1.5rem
        font-weight: 500
        text-align: center
        color: #5c5c5c
        padding: 1rem 0
    .confirm-btn.ok
        color: #e5ceae
    .not-allow-operate
        opacity: .5
        pointer-events: none
</style>
