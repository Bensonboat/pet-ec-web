<template>
    <div class="checkout-process">
        <div class="process-title">訂單確認</div>
        <div class="process-line-block">
            <div class="circle full-circle"></div>
            <svg :width="svgWidth" height="1px">
                <line x1="0" y1="0" x2="300" y2="0" style="stroke: #333333;stroke-width: .3rem"/>
            </svg>
            <div class="circle" :class="{'full-circle' : step === 2}"></div>
            <svg :width="svgWidth" height="1px">
                <line x1="0" y1="0" x2="300" y2="0" style="stroke: #333333;stroke-width: .3rem"/>
            </svg>
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CheckoutProcess',
        props: {
            step: Number
        },
        data(){
            return {
                svgWidth: '9rem'
            }
        }
    }
</script>

<style lang="sass" scoped>
.checkout-process
    height: 4.4rem
    background-color: #efe1ce
    padding: 1.3rem 2rem
    box-sizing: border-box
    color: #333333
    display: flex
    justify-content: space-between
    .process-title
        font-size: 1.2rem
        font-weight: 500
    .process-line-block
        display: flex
        align-items: center
    .circle
        width: 1rem
        height: 1rem
        border-radius: 100%
        border: solid 1px #333333
    .full-circle
        background-color: #333333
    .cart-item-attr-block
        background-color: #fff
</style>