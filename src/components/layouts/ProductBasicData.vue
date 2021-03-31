<!-- 商品列表 -->
<template>
  <div class="default-product-basic-data product-basic-data">
    <div
      class="product-content-block"
      @click="
        checkProductDetail(product_data.type, product_data.id) +
          getCurrentID(product_data.id)
      "
    >
      <div class="product-top-block">
        <!-- <div class="product-image-block"> -->
        <div
          v-if="showMultiplePics"
          class="product-image-block"
          v-touch:swipe.left="changeCurrentImage(1)"
          v-touch:swipe.right="changeCurrentImage(-1)"
        >
          <img
            class="product-image"
            v-show="imageIndex === currentShowsImgIndex"
            v-for="(image, imageIndex) in product_data.img"
            :key="imageIndex"
            :src="image"
            alt="photos"
          />
          <div class="photo-dots">
            <div
              v-for="(item, index) in product_data.img"
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
        <!-- </div> -->
        <div
          class="quick-add-icon-block click-animation"
          @click.stop="getCurrentID(product_data.id)"
        >
          <img src="/images/icons/bag-add.svg" alt="快速加入按鈕" />
        </div>
      </div>
      <div class="product-bottom-block">
        <div class="product-name-block default-text-color">
          {{ product_data.name }}
        </div>
        <div class="product-price-block">
          <div
            class="default-deep-green-color"
            :class="[product_data.price ? 'original-price-remove' : '']"
          >
            NT${{ product_data.origin_price }}
          </div>
          <div
            class="default-red-color special-price"
            v-if="product_data.price"
          >
            NT${{ product_data.price }}
          </div>
        </div>
        <!-- <div v-if='showQuickAddIcon' class="product-cart-block" @click="showQuickAddModal">
                    <img
                        src="/images/add-to-bag.png"
                        alt="cart image"
                        class="cart-image"
                    />
                </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import store from '@/store';
import * as types from '@/store/mutation-types.js';
import API from '@/axios/api';

export default {
  name: 'ProductBasicData',
  props: {
    product_data: Object,
    showQuickAddIcon: Boolean,
    showMultiplePics: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentShowsImgIndex: 0,
    };
  },
  methods: {
    // showQuickAddModal() {
    //     this.$emit("show-quick-add-modal");
    // },
    checkProductDetail(type, id) {
      this.$router.push({
        path: '/product/' + type + '/' + id,
      });
    },
    changeCurrentImage(value) {
      return () => {
        this.currentShowsImgIndex = this.currentShowsImgIndex + value;
        if (this.currentShowsImgIndex < 0) {
          this.currentShowsImgIndex = this.product_data.img.length - 1;
          return;
        }
        if (this.currentShowsImgIndex >= this.product_data.img.length) {
          this.currentShowsImgIndex = 0;
        }
      };
    },
    showProductAllSpecModal() {
      this.$store.commit(types.SHOW_PRODUCT_ALL_SPEC_MODAL, true);
    },
    getCurrentID(id) {
      this.$store.dispatch('toggleLoading', true);
      API.getSingleProduct(id)
        .then((res) => {
          let data = res.data.data;
          this.$store.commit(types.GET_SINGLE_PRODUCT_DATA, data);
          this.$store.dispatch('toggleLoading', false);
        })
        .then(() => {
          this.showProductAllSpecModal();
        });
    },
  },
};
</script>

<style lang="sass" scoped>
.product-basic-data
    display: flex
    justify-content: center
    position: relative
    // border-radius: 5px
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
    // border: solid 1px pink
    height: 25.2rem
    width: 15.2rem
    overflow: hidden
    margin-top: .6rem
    background-color: #f8f8f8
    // border-bottom: solid 1px pink
    // box-shadow: 0 2px 5px rgba(0,0,0,.1)
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
        // width: 100%
        // width: 13rem
        // height: 13rem
        text-align: center
        // border: solid 1px pink
        background-color: #ececec
        // background-image: url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png")
        // background-image: url("/images/animal.png")
        .product-image
            // width: 15rem
            // height: 15rem
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            width: 100%
            // height: 100%
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
        // position: absolute
        // bottom: 0
        // margin-top: 1.5rem
        // display: flex
        // justify-content: space-between
        // align-items: center
        // width: 100%
        // padding: 1.5rem 1rem
        padding: 1.3rem .6rem 1rem .6rem
        box-sizing: border-box
        height: 100%
        // flex-grow: 1
        // border: solid 1px red
        // align-items: flex-start
        // flex-wrap: wrap
        // width: 15rem
        // left: 50%
        // transform: translateX(-50%)
    .product-cart-block
        // width: 5rem
        height: 2rem
        .cart-image
            height: 100%
    .special-price
        font-size: 1.4rem
        margin-top: .4rem
        color: #f94956
        // margin-left: 1rem
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
// .fade-leave
//     opacity: 1

// .fade-leave-active
//     transition: opacity .2s

// .fade-leave-to
//     opacity: 0

// .fade-enter
//     opacity: 0

// .fade-enter-active
//     transition: opacity .2s

// .fade-enter-to
//     opacity: 1
</style>
