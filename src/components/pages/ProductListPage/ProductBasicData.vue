<template>
    <div class="default-product-basic-data product-basic-data">
        <div class="product-content-block">
            <div class="product-top-block" @click="checkProductDetail(product_data.type, product_data.id)">
                <div class="product-image-block">
                    <img
                        :src="product_data.img"
                        alt="product image"
                        class="product-image"
                    />
                </div>
                <div class="quick-add-icon-block">
                    <img src="/images/bag-add.png" alt="">
                </div>
            </div>
            <div class="product-bottom-block">
                <div
                    class="product-name-block default-text-color"
                >
                    {{ product_data.name }}
                </div>
                <div
                    class="product-price-block"
                >
                    <div class="default-deep-green-color" :class="[product_data.special_price ? 'original-price' : '']">NT${{ product_data.price }}</div>
                    <div class="default-red-color special-price" v-if="product_data.special_price">NT${{ product_data.special_price }}</div>
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
export default {
    name: "ProductBasicData",
    props: {
        product_data: Object,
        showQuickAddIcon: Boolean
    },
    methods: {
        showQuickAddModal() {
            this.$emit("show-quick-add-modal");
        },
        checkProductDetail(type, id){
            this.$router.push({
                path: '/product/' + type + '/' +id,
            })
        }
    },
};
</script>

<style lang="sass" scoped>
.product-basic-data
    display: flex
    justify-content: center
    position: relative
    // border-radius: 5px
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
    // border: solid 1px pink
    height: 25.2rem
    width: 15.2rem
    overflow: hidden
    margin-top: .6rem
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
        // width: 100%
        // width: 13rem
        // height: 13rem
        text-align: center
        // border: solid 1px pink
        background-color: #ececec
        .product-image
            // width: 15rem
            // height: 15rem

            width: 100%
            // height: 100%
    .product-name-block
        text-align: left
        // padding: 0 1.5rem 0 0 
        // width: 15rem
        // margin: .5rem auto 0 auto
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
        font-size: 1.2rem
        font-weight: 500
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
        // margin-left: 1rem
    .original-price
        text-decoration: line-through
    .product-price-block
        margin-top: .6rem
        position: absolute
        bottom: 1rem
        font-family: MicrosoftSansSerif
        font-size: 1.2rem
    .quick-add-icon-block
        width: 3rem
        height: 3rem
        background-color: #d8d8d8
        border-radius: 50%
        position: absolute
        bottom: 0
        bottom: -1rem
        right: .6rem
        img 
            width: 1.4rem
            height: 1.4rem
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
    .product-top-block
        position: relative
</style>