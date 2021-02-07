<template>
    <div class="default-order-infomation order-infomation">
        <div class="infomation-header">
            <div class="default-text-color">訂單資料</div>
            <div class="default-light-green-color" @click="previousStep">上一步</div>
        </div>
        <div class="infomation-content-block">
            <div class="each-info-block">
                <div class="label">
                    <span class="default-red-color">*</span>
                    <span class="default-text-color">姓名</span>
                </div>
                <div class="infomation-input-block">
                    <input type="text" class="default-text-color infomation-input" v-model="infomation.name">
                </div>
            </div>
            <div class="each-info-block">
                <div class="label">
                    <span class="default-red-color">*</span>
                    <span class="default-text-color">電話</span>
                </div>
                <div class="infomation-input-block">
                    <input type="text" class="default-text-color infomation-input" v-model="infomation.number">
                </div>
            </div>
            <div class="each-info-block">
                <div class="label">
                    <span class="default-red-color">*</span>
                    <span class="default-text-color">寄送地址</span>
                </div>
                <div class="infomation-input-block">
                    <input type="text" class="default-text-color infomation-input" v-model="infomation.address">
                </div>
            </div>
            <div class="each-info-block">
                <div class="default-text-color label">email</div>
                <div class="infomation-input-block">
                    <input type="text" class="default-text-color infomation-input" v-model="infomation.email">
                </div>
            </div>
            <div class="sign-up-block">
                <div class="sign-up-block" @click="toggleSignUpSelect">
                    <div class="sign-up-text default-light-green-color">將資料註冊會員並累積點數</div>
                    <div class="default-order-sign-up-select-block order-sign-up-select-block default-border-radius">
                        <img src="/images/tick.png" alt="tick icon" v-if="signUpSelect">
                    </div>
                </div>
                <div v-show="!signUpSelect" class="warning-text default-red-color">No ~ 下次需重新輸入資料且會遺失當前點數</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderInfomation",
    data(){
        return {
            infomation: {
                name: '劉德華',
                number: '0987654321',
                address: '台中市西區民全路吧啦吧啦吧啦',
                email: 'hello_world@gmail.com'
            },
            signUpSelect: true
        }
    },
    methods: {
        previousStep(){
            this.$emit('previousStep', -1)
        },
        toggleSignUpSelect(){
            this.signUpSelect = !this.signUpSelect
        }
    }
};
</script>

<style lang="sass" scoped>
.order-infomation
    padding: 0 3rem
    margin-top: 2rem
    .label
        padding: 0 1rem
        span
            margin-right: .5rem
    .infomation-header
        font-weight: 800
        display: flex
        justify-content: space-between
        align-items: center
    .infomation-content-block
        margin-top: 2rem
    .each-info-block
        margin-top: 1.5rem
    .infomation-input-block
        border-bottom: solid 1px #d1d1d1
        margin-top: .5rem
        width: 90%
    .infomation-input
        width: 100%
        border: none
        outline: none
        padding: .5rem 1rem
        letter-spacing: 1px
    .sign-up-block, .sign-up-text
        display: flex
        align-items: center
        flex-wrap: wrap
    .sign-up-block
        margin-top: 1rem
    .order-sign-up-select-block
        display: flex
        align-items: center
        justify-content: center
        margin-left: .5rem
        cursor: pointer
        padding: .2rem
    .warning-text
        width: 100%
        margin-top: .5rem
</style>