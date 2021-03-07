<template>
    <div class="coupon-total-price">
        <div class="detail-block">
            <div class="total-items-number">共2件商品</div>
            <div class="price-detail">
                <div class="product-price-block">
                    <div class="item">商品金額</div>
                    <div class="item">2380</div>
                </div>
                <div class="discount-block">
                    <div class="item">折扣優惠</div>
                    <div class="item">-100</div>
                </div>
                <div class="total-price-block">
                    <div class="item">小計</div>
                    <div class="item total-price">NT$ 2380</div>
                </div>
            </div>
        </div>
        <div class="coupon-button click-animation-small" @click="toggleCouponList">
            <div class="coupon-text-block">
                <img src="/images/icons/fire.svg" alt="優惠卷圖案" class="coupon-icon">
                <div>選擇優惠卷序號</div>
            </div>
            <img src="/images/icons/black-back.svg" alt="向下箭頭圖案" class="arrow-icon">
        </div>
        <div class="next-step-block">
            <div class="keep-shopping click-animation-small" @click="keepShoping">繼續選購</div>
            <div class="next-step click-animation-small" @click="nextStep">下一步</div>
        </div>
        <coupon-list v-if="showCouponListBlock" @close-coupon-list='toggleCouponList'/>
    </div>
</template>

<script>
import CouponList from './CouponList.vue'
    
    export default {
        name: 'CouponPrice',
        components: { CouponList },
        data(){
            return {
                showCouponListBlock: false
            }
        },
        methods: {
            nextStep(){
                this.$emit('next-step', 2)
            },
            toggleCouponList(){
                this.showCouponListBlock = !this.showCouponListBlock
            },
            keepShoping(){
                this.$router.push('/category_page/cat')
            }
        }
    }
</script>

<style lang="sass" scoped>
.coupon-total-price
    padding: .9rem 1.5rem
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2)
    background-color: #fff
    width: 100%
    // height: 18rem
    position: absolute
    bottom: 0
    box-sizing: border-box
    .detail-block
        display: flex
        justify-content: space-between
    .total-items-number
        flex: 1
        font-size: 1.2rem
        font-weight: 500
        color: #9b9b9b
    .price-detail
        flex: 1
    .product-price-block, .discount-block, .total-price-block
        font-size: 1.2rem
        font-weight: 500
        color: #333333
        display: flex
        justify-content: flex-end
        margin-bottom: .5rem
        align-items: center
        .item
            flex: 1
            text-align: right
    .coupon-button
        padding: .9rem 1.5rem
        border-radius: 5px
        border: solid 1px #333333
        background-color: #f2c47e
        display: flex
        align-items: center
        justify-content: space-between
        color: #333333
        margin-top: 1rem
    .coupon-text-block
        display: flex
        justify-content: flex-start
    .coupon-icon
        width: 1.6rem
        height: 1.6rem
        margin-right: .6rem
    .arrow-icon
        width: 1.4rem
        height: 1.4rem
        transform: rotate(180deg)
    .next-step-block
        display: flex
        margin-top: 1.5rem
        justify-content: space-between
    .keep-shopping
        padding: .9rem 2.6rem
        border-radius: .5rem
        border: solid 1px #333333
        background-color: #ffffff
        font-size: 1.2rem
        font-weight: 500
        color: #333333
    .next-step
        padding: .9rem 7.2rem
        border-radius: .5rem
        background-color: #333333
        color: #e5ceae
        font-size: 1.2rem
        font-weight: 500
    .total-price
        color: #f94956
</style>