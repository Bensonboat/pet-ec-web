<template>
    <div class="add-new-coupon">
        <div class="header-block">
            <img src="/images/left-arrow.png" alt="previous page icon" class="icon" @click="BackToPreviousView">
            <div class="default-text-color">新增優惠序號</div>
        </div>
        <div class="content-block">
            <div class="add-coupon-input-block default-border-radius">
                <input type="text" placeholder="請輸入優惠序號" class="default-border-radius">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AddNewCoupon',
        methods: {
            BackToPreviousView(){
                this.$emit('toggle-add-modal')
            }
        }
    }
</script>

<style lang="sass" scoped>
.add-new-coupon
    .header-block
        position: relative
        height: 5rem
        display: flex
        align-items: center
        justify-content: center
    .icon
        width: 1.5rem
        height: 1.5rem
        position: absolute
        left: 2rem
    .content-block
        padding: 2rem
    .add-coupon-input-block
        width: 80%
        background-color: #d1d1d1
        margin: auto
        input
            background-color: #d1d1d1
            border: none
            padding: 1rem 2rem
            outline: none
</style>