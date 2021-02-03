<template>
    <div class="cart-page">
        <div class="default-white-bgc default-border-radius process-list-block">
            <checkout-process/>
            <order-list/>
        </div>
        <coupon-price/>
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
    // padding: 0 2rem
</style>