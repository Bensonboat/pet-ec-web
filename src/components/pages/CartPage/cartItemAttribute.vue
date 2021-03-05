<template>
    <div class="cart-item-attribute">
        <img src="/images/p1.jpg" alt="" class="product-img">
        <div class="product-basic-block">
            <div class="product-name">EQUILÍBRIO 尊爵 機能天然糧</div>
            <div class="product-spec">3.5kg3.5kg3.5kg</div>
            <div class="price-number-row">
                <div>NT$2,380</div>
                <div class="select-number-block"> - 1 +</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cartItemAttribute'
    }
</script>

<style lang="sass" scoped>
.cart-item-attribute
    background-color: #fff
    padding: 1rem
    display: flex
    align-items: flex-start
    .product-img
        width: 8rem
        height: 8rem
        border: solid 1px #f8f8f8
        margin-right: 1rem
    .product-basic-block
        height: 100%
        flex-grow: 1
    .product-name
        font-size: 1.2rem
        color: #333333
        margin-bottom: .5rem
    .product-spec
        word-break: break-all
        margin-bottom: 1.2rem
        border: solid 1px rgba(227, 166, 82, 0.5)
        color: rgba(227, 166, 82, 0.5)
        padding: .1rem 1rem
        border-radius: 5px
        width: fit-content
    .price-number-row
        display: flex
        align-items: flex-end
        justify-content: space-between
    .select-number-block
        width: 10rem
        height: 2.4rem
        background-color: #f7f0e6
        display: flex
        align-items: center
</style>