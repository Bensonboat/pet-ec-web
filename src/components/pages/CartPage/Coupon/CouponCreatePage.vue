<template>
    <div class="coupon-add-page">
        <div class='header'>
            <img src="/images/icons/back.svg" alt="" class="back-icon click-animation-small" @click="closeCreatePage">
            <div>新增優惠序號</div>
        </div>
        <div class="content-block">
            <div class="input-block">
                <input type="text" class="input" placeholder="請輸入優惠序號" v-model="couponNumber">
            </div>
            <div class="confirm-btn click-animation-small" :class="{'input-valid' : couponNumber !== ''}">確認</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CouponAddPage',
        data(){
            return{
                couponNumber: ''
            }
        },
        methods: {
            closeCreatePage(){
                this.$emit('close-create-page')
            }
        }
    }
</script>

<style lang="sass" scoped>
.coupon-add-page
    position: fixed
    top: 0
    left: 0
    z-index: 999
    width: 100vw
    height: 100vh
    background-color: #e5ceae
    .header
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15)
        background-color: #333333
        position: relative
        height: 5rem
        display: flex
        align-items: center
        justify-content: center
        font-size: 1.4rem
        font-weight: 500
        color: #efe1ce
    .back-icon
        width: 2.4rem
        height: 2.4rem
        position: absolute
        left: 1rem
        top: 50%
        transform: translateY(-50%)
    .content-block
        padding: 1.5rem
    .input-block
        padding: 1.3rem 1.5rem
        border-radius: .5rem
        background-color: #ffffff
    .input
        width: 100%
        border: none
        outline: none
        font-size: 1.2rem
        font-weight: 500
        color: #333333
    .confirm-btn
        border-radius: .5rem
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4)
        background-color: #333333
        padding: 1.3rem 1.5rem
        font-size: 1.5rem
        font-weight: 500
        color: #5c5c5c
        box-sizing: border-box
        display: flex
        justify-content: center
        align-items: center
        position: fixed
        bottom: .5rem
        width: calc(100%  -  1rem)
        left: 50%
        transform: translateX(-50%)
    .input-valid
        color: #e5ceae
</style>