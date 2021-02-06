<template>
    <div class="default-product-basic-data product-basic-data">
        <div class="product-content-block">
            <div @click="checkProductDetail(product_data.type, product_data.id)">
                <div class="product-image-block">
                    <img
                        :src="product_data.img"
                        alt="product image"
                        class="product-image"
                    />
                </div>
                <div
                    class="product-name-block default-text-color default-product-name-block"
                >
                    {{ product_data.name }}
                </div>
            </div>
            <div class="product-bottom-block">
                <div
                    class="product-price-block default-product-price-block"
                >
                    <span class="default-deep-green-color" :class="[product_data.special_price ? 'original-price' : '']">${{ product_data.price }}</span>
                    <span class="default-red-color special-price" v-if="product_data.special_price">${{ product_data.special_price }}</span>
                </div>
                <div v-if='showQuickAddIcon' class="product-cart-block" @click="showQuickAddModal">
                    <img
                        src="/images/add-to-bag.png"
                        alt="cart image"
                        class="cart-image"
                    />
                </div>
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
    // border: solid 1px pink
    display: flex
    justify-content: center
    position: relative
    border-radius: 5px
    // border-bottom: solid 1px pink
    // box-shadow: 0 2px 5px rgba(0,0,0,.1)
    .product-content-block
        position: relative
        width: 100%
        height: 100%
    .product-image-block
        width: 100%
        // width: 13rem
        // height: 13rem
        text-align: center
        .product-image
            // width: 15rem
            // height: 15rem

            width: 100%
            // height: 100%
    .product-name-block
        text-align: center
        // padding: 0 1.5rem 0 0 
        // width: 15rem
        margin: .5rem auto 0 auto
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 1
        overflow: hidden
    .product-bottom-block
        // position: absolute
        // bottom: 0
        // margin-top: 1.5rem
        display: flex
        justify-content: space-between
        align-items: center
        width: 100%
        padding: 1.5rem 1rem
        box-sizing: border-box
        // width: 15rem
        // left: 50%
        // transform: translateX(-50%)
    .product-cart-block
        // width: 5rem
        height: 2rem
        .cart-image
            height: 100%
    .special-price
        margin-left: 1rem
    .original-price
        text-decoration: line-through
</style>