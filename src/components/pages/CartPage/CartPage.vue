<template>
    <div class="cart-page">
        <div class="default-white-bgc default-border-radius process-list-block">
            <checkout-process :step='checkoutProcessStep'/>
            <div>
                <div v-show="checkoutProcessStep === 1">
                    <order-list/>
                    <coupon-price/>
                </div>
                <div v-show="checkoutProcessStep === 2">
                    <order-infomation @previousStep='processSteps'/>
                    <payment style="width: 100px; height: 30px"/>
                </div>
                <order-complete v-show="checkoutProcessStep === 3"/>
            </div>
        </div>
        <div v-if='checkoutProcessStep !== 3' class="default-deep-green-bgc next-step-btn default-border-radius" @click="processSteps(1)">
            下一步
        </div>
        <div v-else class="default-deep-green-bgc next-step-btn default-border-radius" @click="toHomePage">回首頁</div>

    </div>
</template>

<script>
import CheckoutProcess from './CheckoutProcess'
import CouponPrice from './CouponPrice'
import OrderInfomation from './OrderInfomation'
import Payment from './Payment'
import OrderList from './OrderList'
import OrderComplete from './OrderComplete'

export default {
    name: 'CartPage',
    components: {
        CheckoutProcess,
        OrderList,
        CouponPrice,
        OrderInfomation,
        OrderComplete,
        Payment
    },
    data(){
        return {
            checkoutProcessStep: 1
        }
    },
    methods: {
        processSteps(val){
            this.checkoutProcessStep = this.checkoutProcessStep + val
        },
        toHomePage(){
            this.$router.push('/home_page')
        }
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