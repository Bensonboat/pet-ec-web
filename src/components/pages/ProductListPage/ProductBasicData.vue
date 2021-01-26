<template>
    <div class="product-basic-data">
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
                    class="product-price-block default-text-color default-product-price-block"
                >
                    ${{ product_data.price }}
                </div>
                <div class="product-cart-block" @click="showQuickAddModal">
                    <img
                        src="/images/cart.png"
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
    width: 48%
    height: 21rem
    display: flex
    justify-content: center
    position: relative
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
            width: 13rem
            height: 13rem

            // width: 100%
            // height: 100%
    .product-name-block
        width: 15rem
        margin: 1rem auto 0 auto
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
    .product-bottom-block
        position: absolute
        bottom: 0
        display: flex
        justify-content: space-between
        align-items: center
        // width: 100%
        width: 15rem
        left: 50%
        transform: translateX(-50%)
    .product-cart-block
        width: 5rem
        height: 2rem
        .cart-image
            height: 100%
</style>