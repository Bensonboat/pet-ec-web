<template>
    <div class="coupon-list">
        <div class='coupon-list-title'>
            <img src="/images/icons/back.svg" alt="" class="back-icon" @click="closeCouponList">
            <div>優惠卷選取</div>
        </div>
        <div class="coupon-list-block">
            <div 
                class="coupon click-animation-small" 
                v-for='(item, index) in couponData' 
                :key="index" 
                :class="{'selected' : item.selected, 'bottom-space' : index+1 === couponData.length}" 
                @click="selectCoupon(index)"
            >
                <div class="coupon-name">{{item.name}}</div>
                <div class="coupon-detail">{{item.detail}}</div>
                <div class="coupon-time">有效期限 {{item.time}}</div>
                <img v-show='item.selected' src="/images/icons/tick.svg" alt="打勾圖案" class="tick-icon">
            </div>
        </div>
        <div class="confirm-btn" :class="{'select-validate' : selectValidate}" @click="couponSelectConfirm">確認</div>
    </div>
</template>

<script>
export default {
    name: "CouponList",
    data() {
        return {
            // showCouponList: true,
            couponData: [
                {
                    name: "$100 折扣優惠",
                    detail: "結帳金額超過 $100 元方可使用",
                    time: "2021年 12月 31日 下午 11時前使用",
                    selected: false
                },
                {
                    name: "半買半相送 超級好康五折卷 五折 五折 五折五折五折",
                    detail: "結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用",
                    time: "2021年 12月 31日 下午 11時前使用",
                    selected: false
                },
                {
                    name: "$100 折扣優惠",
                    detail: "結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 ",
                    time: "2021年 12月 31日 下午 11時前使用",
                    selected: false
                },
                {
                    name: "$100 折扣優惠",
                    detail: "結帳金額超過 $100 元方可使用",
                    time: "2021年 12月 31日 下午 11時前使用",
                    selected: false
                },
                {
                    name: "半買半相送 超級好康五折卷 五折 五折 五折五折五折",
                    detail: "結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用",
                    time: "2021年 12月 31日 下午 11時前使用",
                    selected: false
                },
            ],
            selectValidate: false
        };
    },
    methods: {
        selectCoupon(index){
            this.couponData.map((item, key) => {
                key === index ? item.selected = true : item.selected = false
                this.selectValidate = true
            });
        },
        closeCouponList(){
            this.$emit('close-coupon-list')
        },
        couponSelectConfirm(){
            if(this.selectValidate){
                alert('select!!')
                this.closeCouponList()
            }
        }
        // closeCouponList() {
        //     this.$emit("close-coupon-list");
        // },
        // toggleView(){
        //     this.showCouponList = !this.showCouponList
        // }
    },
};
</script>

<style lang="sass" scoped>
.coupon-list
    position: fixed
    top: 0
    left: 0
    z-index: 999
    width: 100vw
    height: 100vh
    background-color: #e5ceae
    .back-icon
        width: 2.4rem
        height: 2.4rem
        margin-right: 1rem
    .coupon-list-title
        height: 4.4rem
        box-sizing: border-box
        padding: 1.3rem 1rem
        box-shadow: .1rem .1rem .1rem 0 rgba(0, 0, 0, 0.1)
        background-color: #333333
        color: #e5ceae
        // background-color: #efe1ce
        // color: #333333
        font-size: 1.4rem
        font-weight: 500
        display: flex
        align-items: center
    .coupon-list-block
        padding: 1.5rem
        overflow: scroll
        height: 100%
    .coupon
        padding: 1rem 2rem
        border-radius: .5rem
        border: solid .1rem #ccaa76
        background-color: #f2c47e
        margin-bottom: 1rem
        position: relative
        overflow: hidden
    .selected
        border-color: #333333
        &:before
            content: ''
            display: block
            width: 5rem
            height: 5rem
            background-color: #333333
            position: absolute
            left: -3rem
            top: -3rem
            transform: rotate(45deg)
    .coupon-name
        font-size: 1.4rem
        font-weight: 500
        color: #333333
        margin-bottom: .2rem
    .coupon-detail
        font-size: 1.2rem
        color: #333333
        margin-bottom: 1rem
    .coupon-time
        font-size: 1.2rem
        color: #a67a3d
    .tick-icon
        width: 1rem
        height: 1rem
        position: absolute
        left: .35rem
        top: .2rem
    .bottom-space
        margin-bottom: 300px
    .confirm-btn
        width: calc(100% - 1rem)
        padding: 1.3rem 1.5rem
        border-radius: .5rem
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.4)
        background-color: #333333
        position: absolute // fixed to absolute
        bottom: .5rem
        font-size: 1.5rem
        font-weight: 500
        color: #5c5c5c
        box-sizing: border-box
        left: 50%
        transform: translateX(-50%)
        text-align: center
        z-index: 3
    .select-validate
        color: #e5ceae
</style>