<template>
    <div class="default-coupon-list coupon-list">
        <div class="coupon-content-mask">
            <div class="default-coupon-list-header coupon-list-header default-shadow">
                <img 
                    src="/images/cross.png" 
                    alt="close icon"
                    class="default-close-coupon-list-icon close-coupon-list-icon"
                    @click="closeCouponList"    
                >
                <div class="default-text-color">優惠 / 獎勵</div>
                <div class="enter-coupon-text default-light-green-color">輸入優惠序號</div>
            </div>
            <div class="event-campaign">
                <img src="/images/animal.png" alt="coupon event image" style="width: 5rem; height: 5rem">
                <div class="default-text-color default-event-text event-text">$100 元註冊優惠等你來拿 元註冊優惠等你來拿</div>
            </div>
            <div class="all-coupon-list-block">
                <div 
                    v-for='(item, index) in couponData'
                    :key="index"
                    class="each-coupon-card default-border-radius default-shadow"
                >
                    <div class="coupon-name default-deep-green-color default-coupon-name">{{item.name}}</div>
                    <div class="coupon-using-condition default-gray-color default-coupon-using-condigion">{{item.condition}}</div>
                    <div class="coupon-using-time-block default-text-color default-conpon-using-time-block">
                        <div>請於</div>
                        <div>{{item.time}}</div>
                    </div>
                    <div class="default-select-coupon-btn select-coupon-btn default-light-green-bgc default-border-radius">選取</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CouponList',
        data(){
            return {
                couponData: [
                    {
                        name: '$100 折扣優惠',
                        condition: '結帳金額超過 $100 元方可使用',
                        time: '2021年 12月 31日 下午 11時前使用'
                    },
                    {
                        name: '半買半相送 超級好康五折卷 五折 五折 五折五折五折',
                        condition: '結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用',
                        time: '2021年 12月 31日 下午 11時前使用'
                    },
                    {
                        name: '$100 折扣優惠',
                        condition: '結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 結帳金額超過 $100 元方可使用 ',
                        time: '2021年 12月 31日 下午 11時前使用'
                    }

                ]
            }
        },
        methods: {
            closeCouponList(){
                this.$emit('close-coupon-list')
            }
        }
    }
</script>

<style lang="sass" scoped>
.coupon-list
    .coupon-content-mask
        width: 100vw
        height: calc(100 * var(--vh))
        position: fixed
        top: 0
        left: 0
        background-color: #fff
        z-index: 3100
        overflow: scroll
    .coupon-list-header
        padding: 2rem 0 1rem 0
        display: flex
        justify-content: center
        align-items: center
        font-weight: 800
    .enter-coupon-text
        position: absolute
        right: 20px
    .close-coupon-list-icon
        position: absolute
        left: 20px
    .event-campaign
        background-color: #B2DBBF
        opacity: .7
        display: flex
        align-items: center
        justify-content: space-between
        padding: 2rem 4rem
    .event-text
        margin-left: 2rem
    .all-coupon-list-block
        padding: 0 2rem 5rem 2rem
    .each-coupon-card
        margin-top: 2rem
        padding: 2rem
    .coupon-name
        font-weight: 700
    .coupon-using-condition
        margin-top: .5rem
    .coupon-using-time-block
        display: flex
        align-items: center
        margin-top: 2rem
    .select-coupon-btn
        display: flex
        align-items: center
        justify-content: center
        margin-top: 1rem
</style>