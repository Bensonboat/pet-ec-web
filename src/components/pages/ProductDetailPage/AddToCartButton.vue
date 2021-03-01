<template>
    <div class="add-to-cart-button">
        <div class="add-to-bag-btn-block">
            <img src="/images/icons/bag-add.svg" alt="購物車按鈕" class="bag-add-icon">
            <div class="text">加入購物袋</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AddToCartButton',
    }
</script>

<style lang="sass" scoped>
.add-to-cart-button
    .bag-add-icon
        width: 1.8rem
        height: 1.8rem
    .add-to-bag-btn-block
        width: calc(100% - 1rem)
        height: 5rem
        border-radius: .5rem
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4)
        background-color: #333333
        position: fixed
        bottom: .5rem
        left: 50%
        transform: translateX(-50%)
        display: flex
        align-items: center
        justify-content: center
        .text
            font-size: 1.5rem
            font-weight: 500
            color: #e5ceae
            margin-left: .8rem
            
</style>