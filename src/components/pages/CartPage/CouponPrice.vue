<template>
    <div class="default-coupon-price coupon-price default-white-bgc default-border-radius">
        <div class="add-coupon-block">
            <img src="/images/tag.png" alt="tag icon" class="default-tag-icon tag-icon">
            <div class="default-light-green-color default-add-coupon-text" @click="toggleCouponList">新增優惠序號</div>
        </div>
        <div class="default-gray-color used-coupon-name">已使用優惠序號 - {{couponName}}</div>
        <div class="total-price-block default-total-price-block default-deep-green-color">
            <div>小計</div>
            <div>$3200</div>
        </div>
        <coupon-list v-if="showCouponList" @close-coupon-list='toggleCouponList'/>
    </div>
</template>

<script>
import CouponList from './CouponList'
    export default {
        name: 'CouponPrice',
        components: { 
            CouponList 
        },
        data(){
            return {
                couponName: '夏日寵物涼一下 9折優惠',
                showCouponList: false
            }
        },
        methods: {
            toggleCouponList(){
                this.showCouponList = !this.showCouponList
            }
        }
    }
</script>

<style lang="sass" scoped>
.coupon-price
    margin-bottom: 5rem
    .add-coupon-block
        display: flex
        justify-content: flex-start
        align-items: center
    .tag-icon
        margin-right: 2rem
    .used-coupon-name
        margin-top: .5rem
    .total-price-block
        margin-top: 1rem
        display: flex
        justify-content: space-between
        align-items: center
        // padding-right: 1rem
</style>