<!-- 商品列表 -->
<template>
  <div class="default-product-basic-data product-basic-data">
    <div
      class="product-content-block"
      @click="
        checkProductDetail(product_data.id) +
          getSingleProductData(product_data.id)
      "
    >
      <div class="product-top-block">
        <div
          v-if="showMultiplePics"
          class="product-image-block"
          v-touch:swipe.left="changeCurrentImage(1)"
          v-touch:swipe.right="changeCurrentImage(-1)"
        >
          <img
            class="product-image"
            v-show="imageIndex === currentShowsImgIndex"
            v-for="(image, imageIndex) in product_data.images"
            :key="imageIndex"
            :src="image.src"
            alt="photos"
          />
          <div class="photo-dots">
            <div
              v-show="product_data.images.length > 1"
              v-for="(item, index) in product_data.images"
              :key="index"
              class="dot"
              :class="index === currentShowsImgIndex ? 'selected-img-dot' : ''"
            ></div>
          </div>
        </div>
        <div v-else class="product-image-block">
          <img
            :src="product_data.img[0]"
            alt="product image"
            class="product-image"
          />
        </div>
        <div
          class="quick-add-icon-block click-animation"
          @click.stop="quickAdd(product_data.id)"
        >
          <img src="/images/icons/bag-add.svg" alt="快速加入按鈕" />
        </div>
      </div>
      <div class="product-bottom-block">
        <div class="product-name-block default-text-color">
          {{ product_data.name }}
        </div>
        <div class="product-price-block">
          <div :class="[product_data.min_price ? 'original-price-remove' : '']">
            NT${{ product_data.min_origin_price }} ~
            {{ product_data.max_origin_price }}
          </div>
          <div
            class="default-red-color special-price"
            v-if="product_data.min_price"
          >
            NT${{ product_data.min_price }} ~ {{ product_data.max_price }}
          </div>
        </div>
      </div>
      <div
        class="favorite-icon-block"
        @click.stop="toggleCollection(product_data.id)"
      >
        <img
          v-show="!product_data.is_favorite"
          src="/images/icons/pink-line-heart.svg"
          alt="未收藏"
        />
        <img
          v-show="product_data.is_favorite"
          src="/images/icons/pink-filled-heart.svg"
          alt="已收藏"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as types from "@/store/mutation-types.js";

export default {
  name: "ProductBasicData",
  props: {
    product_data: {
      type: Object,
      default: null
    },
    showQuickAddIcon: Boolean,
    showMultiplePics: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentShowsImgIndex: 0
    };
  },
  methods: {
    checkProductDetail(id) {
      let type = this.$route.query.type;
      let subType = this.$route.query.subType;

      this.$router.push({
        path: "/product/",
        query: {
          type,
          subType,
          id
        }
      });
    },
    changeCurrentImage(value) {
      return () => {
        this.currentShowsImgIndex = this.currentShowsImgIndex + value;
        if (this.currentShowsImgIndex < 0) {
          this.currentShowsImgIndex = this.product_data.images.length - 1;
          return;
        }
        if (this.currentShowsImgIndex >= this.product_data.images.length) {
          this.currentShowsImgIndex = 0;
        }
      };
    },
    showProductAllSpecModal() {
      this.$store.commit(types.SHOW_PRODUCT_ALL_SPEC_MODAL, true);
    },
    getSingleProductData(id) {
      this.$store.dispatch("toggleLoading", true);
      return this.$api.getSingleProduct(id).then(res => {
        let data = res.data.data;

        this.$store.commit(types.SET_SINGLE_PRODUCT_DATA, data);
        this.$store.dispatch("toggleLoading", false);
      });
    },
    quickAdd(id) {
      this.getSingleProductData(id).then(() => {
        this.showProductAllSpecModal();
      });
    },
    toggleCollection(id) {
      if (!this.product_data.is_favorite) {
        this.addToCollections(id);
      } else {
        this.removeCollection(id);
      }
    },
    addToCollections(id) {
      let data = {
        products: [id]
      };
      this.$api
        .addToCollections(data)
        .then(() => {
          this.product_data.is_favorite = true;
        })
        .catch(err => {
          if (err.data.code === 3002) {
            alert("尚未登入");
          }
        });
    },
    removeCollection(id) {
      this.$api.removeCollection(id).then(() => {
        this.product_data.is_favorite = false;
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.product-basic-data
    display: flex
    justify-content: center
    position: relative
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
    height: 25.2rem
    width: 15.2rem
    overflow: hidden
    margin-top: .6rem
    background-color: #f8f8f8
    .product-content-block
        position: relative
        width: 100%
        height: 100%
        display: flex
        flex-direction: column
    .product-image-block
        width: 15.2rem
        height: 15.2rem
        overflow: hidden
        text-align: center
        background-color: #fff
        // background-color: #ececec
        .product-image
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            height: 100%
    .product-name-block
        text-align: left
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
        font-size: 1.2rem
        font-weight: 500
        font-weight: 500
        color: #333333
    .product-bottom-block
        position: relative
        padding: 1.3rem .6rem 1rem .6rem
        box-sizing: border-box
        height: 100%
    .product-cart-block
        height: 2rem
        .cart-image
            height: 100%
    .special-price
        font-size: 1.4rem
        margin-top: .4rem
        color: #f94956
    .original-price-remove
        text-decoration: line-through
    .product-price-block
        margin-top: .6rem
        position: absolute
        bottom: 1rem
        font-family: 'roboto'
        font-size: 1.2rem
    .quick-add-icon-block
        width: 3rem
        height: 3rem
        background-color: #333333
        border-radius: 50%
        position: absolute
        bottom: 0
        bottom: -1rem
        right: .6rem
        z-index: 5
        display: flex
        align-items: center
        justify-content: center
        overflow: hidden
        img
            width: 1.4rem
            height: 1.4rem
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
        &:before
            content: ''
            display: block
            background-color: rgba(255, 255, 255, 0.15)
            width: 100%
            height: 100%
            transform: rotate(-45deg) translateY(2rem)
    .product-top-block
        position: relative
    .photo-dots
        position: absolute
        bottom: .5rem
        left: 50%
        transform: translateX(-50%)
        display: grid
        grid-template-columns: .5rem .5rem
        gap: .4rem
    .dot
        width: .5rem
        height: .5rem
        border-radius: .25rem
        background-color: #454545
        opacity: 0.4
    .selected-img-dot
        opacity: 1
    .favorite-icon-block
      position: absolute
      bottom: 1rem
      right: 1rem
      width: 1.6rem
      height: 1.5rem
      img
        width: 100%
        height: 100%
</style>
