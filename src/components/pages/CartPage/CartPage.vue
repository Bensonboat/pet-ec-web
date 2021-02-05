<template>
    <div class="cart-page">
        <div class="default-white-bgc default-border-radius process-list-block">
            <checkout-process/>
            <order-list/>
        </div>
        <coupon-price/>
        <div class="default-deep-green-bgc next-step-btn default-border-radius">
            <div>下一步</div>
        </div>

    </div>
</template>

<script>
import CheckoutProcess from './CheckoutProcess'
import CouponPrice from './CouponPrice'
import OrderList from './OrderList'

export default {
    name: 'CartPage',
    components: {
        CheckoutProcess,
        OrderList,
        CouponPrice
    }
}

</script>

<style lang="sass" scoped>
.cart-page
    .process-list-block
        padding-bottom: 2rem
    .next-step-btn
        width: 50%
        padding: 1rem 2rem
        text-align: center
        margin: 2rem auto 5rem auto
</style>