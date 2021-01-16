<template>
    <div class="product-basic-data">
        <div class="product-content-block">
            <div class="product-image-block">
                <img :src="product_data.img" alt="product image" class="product-image">
            </div>
            <div class="product-name-block default-text-color">
                {{product_data.name}}
            </div>
            <div class="product-bottom-block">
                <div class="product-price-block default-text-color">${{product_data.price}}</div>
                <div class="product-cart-block">
                    <img src="/images/cart.png" alt="cart image" class="cart-image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductBasicData',
        props: {
            product_data: Object
        }
    }
</script>

<style lang="sass" scoped>
.product-basic-data
    width: 50%
    height: 18.5rem
    display: flex
    justify-content: center
    position: relative
    .product-content-block
        position: relative
    .product-image-block
        width: 10rem
        height: 10rem
        text-align: center
        .product-image
            width: 100%
            height: 100%
    .product-name-block
        width: 10rem
        margin-top: 1rem
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
        width: 100%
    .product-cart-block
        width: 2rem
        height: 2rem
        .cart-image
            height: 100%


</style>