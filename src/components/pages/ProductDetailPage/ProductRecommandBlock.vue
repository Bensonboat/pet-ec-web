<!-- 商品推薦橫軸選單 -->
<template>
  <div class="product-recommand-block">
    <div class="recommand-text">
      <img
        src="/images/icons/heart.svg"
        alt="愛心圖案"
        class="recommand-icon"
      />
      <div>推薦給你</div>
    </div>
    <div class="product-recommand-row">
      <product-basic-data
        v-for="(item, index) in productData"
        :key="index"
        :product_data="item"
        :showQuickAddIcon="false"
        :showMultiplePics="false"
        class="recommand-item"
      />
    </div>
    <!-- <div class="product-recommand-row">
            <div v-for="(item, index) in productData" :key="index" class="recommand-item">
                <img :src="item.img" alt="product picture" class="recommand-product-img">
                <div class="recommand-product-name">{{item.name}}</div>
                <div>{{item.price}}</div>
            </div>
        </div> -->
  </div>
</template>

<script>
import ProductBasicData from "../../layouts/ProductBasicData";

export default {
  name: "ProductRecommandBlock",
  props: ["recommand"],
  components: {
    ProductBasicData
  },
  data() {
    return {
      productData: []
    };
  },
  watch: {
    recommand: {
      handler(data) {
        this.productData = data.map(item => {
          return {
            // images: item.images,
            name: item.title,
            images: ["/images/p1.jpg", "/images/test2.png"],

            // type: query.type,
            id: item.id,
            max_origin_price: item.max_origin_price,
            max_price: item.max_price,
            min_origin_price: item.min_origin_price,
            min_price: item.min_price
            // is_favorite
          };
        });
        this.$forceUpdate();
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.product-recommand-block
    margin-top: 1rem
    background-color: #efe1ce
    padding: 1rem .5rem 8rem .5rem
    .recommand-text
        display: flex
        align-items: center
        font-size: 1.4rem
        font-weight: 500
        color: #333333
    .recommand-icon
        width: 1.6rem
        height: 1.6rem
        margin-right: .8rem
    .product-recommand-row
        overflow-x: scroll
        // width: 100%
        display: flex
        margin-top: .6rem
        // padding-bottom: 2rem
    .recommand-item
        margin-right: .6rem
        // height: 23rem
        // width: 14rem
        flex: 1 0 auto
    .recommand-product-img
        width: 13rem
        height: 13rem
    .recommand-product-name
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
</style>
