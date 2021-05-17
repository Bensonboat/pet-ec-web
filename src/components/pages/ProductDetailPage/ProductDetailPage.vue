<!-- 商品詳情頁 -->
<template>
  <div class="default-product-detail-page product-detail-page">
    <div class="product-content-block">
      <div class="product-attribute">
        <div
          class="img-block"
          v-touch:swipe.left="Swipe(1)"
          v-touch:swipe.right="Swipe(-1)"
        >
          <div
            class="flex-center next-img-arrow-block left"
            @click="changeCurrentImage(-1)"
          >
            <img src="/images/icons/back.svg" alt="箭頭" />
          </div>
          <div
            class="flex-center next-img-arrow-block right"
            @click="changeCurrentImage(1)"
          >
            <img src="/images/icons/back.svg" alt="箭頭" />
          </div>
          <img
            v-show="imageIndex === currentShowsImgIndex"
            v-for="(image, imageIndex) in productData.images"
            :key="imageIndex"
            :src="image.src"
            alt="photos"
          />
          <div class="img-dots-block">
            <div
              v-show="productData.images.length > 1"
              v-for="(item, index) in productData.images"
              :key="index"
              class="dots"
              :class="{ 'selected-img-dot': index === currentShowsImgIndex }"
              @click="showCurrentImg(index)"
            ></div>
          </div>
        </div>
        <div class="product-attribute-block">
          <div class="name">{{ productData.title }}</div>
          <div class="price-block">
            <div class="normal-price">
              NT${{ productData.min_origin_price }} ~
              {{ productData.max_origin_price }}
            </div>
            <div class="special-price">
              NT${{ productData.min_price }} ~ {{ productData.max_price }}
            </div>
          </div>
          <div class="favorite-icon-block" @click.stop="toggleFavoriteCollect">
            <img
              v-if="!productData.is_favorite"
              src="/images/icons/pink-line-heart.svg"
              alt="未收藏"
            />
            <img
              v-else
              src="/images/icons/pink-filled-heart.svg"
              alt="已收藏"
            />
          </div>
        </div>
      </div>
      <div class="detail-info-block">
        <detail-nav-row @toggle-product-info="toggleProductInfo" />
        <div class="default-more-content-block more-content-block">
          <product-description v-show="showProductInfo === 'description'" />
          <product-fulfillment v-show="showProductInfo === 'fulfillment'" />
          <product-review v-show="showProductInfo === 'review'" />
        </div>
      </div>
    </div>
    <product-recommand-block :recommand="productData.suggestions" />
    <add-to-cart-button @click.native="showProductAllSpecModal" />
  </div>
</template>

<script>
import DetailNavRow from "./DetailNavRow";
import ProductDescription from "./ProductDescription";
import ProductFulfillment from "./ProductFulfillment";
import ProductReview from "./ProductReview";
import ProductRecommandBlock from "./ProductRecommandBlock";
import AddToCartButton from "./AddToCartButton";
import * as types from "@/store/mutation-types.js";

export default {
  name: "ProductDetailPage",
  components: {
    DetailNavRow,
    ProductDescription,
    ProductFulfillment,
    ProductReview,
    ProductRecommandBlock,
    AddToCartButton
  },
  data() {
    return {
      productData: "",
      currentShowsImgIndex: 0,
      showProductInfo: "",
      collected: false
    };
  },
  mounted() {
    this.showProductInfo = "description";
    this.getSingleProductData();
  },
  computed: {
    getDetailProductData() {
      return this.$store.getters.getDetailProductData;
    },
    getCollectionsID() {
      return this.$store.getters.getCollectionsID;
    }
  },
  watch: {
    getDetailProductData(data) {
      this.productData = data;

      let arr = this.getCollectionsID;
      if (arr.length !== 0) {
        let is_favorite = arr.some(item => item === data.id);
        this.productData["is_favorite"] = is_favorite;
      }
    }
  },
  methods: {
    toggleProductInfo(value) {
      this.showProductInfo = value;
    },
    showCurrentImg(index) {
      this.currentShowsImgIndex = index;
    },
    changeCurrentImage(value) {
      // return () => {
      this.currentShowsImgIndex = this.currentShowsImgIndex + value;
      if (this.currentShowsImgIndex < 0) {
        this.currentShowsImgIndex = this.productData.images.length - 1;
        return;
      }
      if (this.currentShowsImgIndex >= this.productData.images.length) {
        this.currentShowsImgIndex = 0;
      }
      // };
    },
    Swipe(value) {
      return () => {
        this.changeCurrentImage(value);
      };
    },
    showProductAllSpecModal() {
      this.$store.commit(types.SHOW_PRODUCT_ALL_SPEC_MODAL, true);
    },
    getSingleProductData() {
      this.$store.dispatch("toggleLoading", true);
      let query = this.$route.query;
      let id = query.id;
      return this.$api.getSingleProduct(id).then(res => {
        let data = res.data.data;
        // data["type"] = query.type;
        // data["subType"] = query.subType;

        this.$store.commit(types.SET_SINGLE_PRODUCT_DATA, data);
        this.$store.dispatch("toggleLoading", false);
      });
    },
    toggleFavoriteCollect() {
      this.collected = !this.collected;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/sass/system_color'

.product-detail-page
    .product-content-block
        padding: .5rem
        background-color: #e5ceae
    .product-attribute
        background-color: #fff
        // padding: 1.5rem
        // border-radius: 5px
        // margin-top: .5rem
        position: relative
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
    .img-block
        // width: 95%
        width: 31rem
        height: 25rem
        overflow: hidden
        margin: 0 auto
        // margin: .5rem auto 0 auto
        position: relative
        display: flex
        justify-content: center
        img
            // width: 100%
            height: 100%
    .change-image-icon
        position: absolute
        width: 3rem
        height: 100%
        background-color: #fff
        opacity: .5
        top: 0
        img
            width: 3rem
            height: 3rem
            top: 50%
            position: absolute
            transform: translateY(-50%)
            opacity: .5
    .change-image-icon.left
        left: 0
    .change-image-icon.right
        right: 0
        transform: rotate(180deg)
    .product-attribute-block
        padding: 1rem 1.5rem
    .name
        font-size: 1.4rem
        font-weight: 500
        color: #333333
        font-family: 'roboto'
    // .spec-block
    //     // margin-top: 1rem
    //     padding: 1rem
    .more-content-block
        // background-color: #fff
        padding: 2rem
        // border-radius: 0 0 5px 5px
    .img-dots-block
        position: absolute
        bottom: .5rem
        left: 50%
        transform: translateX(-50%)
        display: grid
        grid-template-columns: .5rem .5rem .5rem
        gap: .4rem
    .dots
        width: .5rem
        height: .5rem
        border-radius: .25rem
        background-color: #454545
        opacity: 0.4
    .selected-img-dot
        opacity: 1
        // display: flex
        // align-items: center
        // justify-content: center
        // margin-top: 1rem
    // .dots
    //     width: .5rem
    //     height: .5rem
    //     // background-color: rgba(0,0,0, .1)
    //     border-radius: 50%
    //     margin: 0 .5rem
    // .origin-dot-color
    //     background-color: rgba(0,0,0,.1)
    .price-block
        font-family: 'roboto'
        font-size: 1.4rem
    .normal-price
        text-decoration: line-through
        color: #333333
        margin-top: 1rem
    .special-price
        font-size: 1.6rem
        color: #f94956
        margin-top: .4rem
    .detail-info-block
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
        margin-top: .5rem
        background-color: #fff
    .next-img-arrow-block
      width: 3rem
      height: 3rem
      border-radius: 50%
      position: absolute
      top: 50%
      transform: translateY(-50%)
      border: solid .1rem $color1
      box-sizing: border-box
      img
        width: 1.5rem
        height: 1.5rem
    .next-img-arrow-block.left
      left: 1rem
    .next-img-arrow-block.right
      right: 1rem
      transform: translateY(-50%) rotate(180deg)
    .favorite-icon-block
      position: absolute
      bottom: 1rem
      right: 1.2rem
      width: 2.2rem
      height: 2rem
      img
        width: 100%
        height: 100%
</style>
