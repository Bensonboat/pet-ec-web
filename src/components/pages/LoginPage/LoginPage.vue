<template>
    <div class="login-page">
        <div class="page-header">
            <div @click="previousPage" class="click-animation pre-icon">
                <img src="/images/icons/back.svg" alt="上一步按鈕" class="icon">
            </div>
            <div class="toggle-mode-btn">註冊</div>
            <div>LOGO</div>
        </div>
        <div class="content-block">
            <div class="bg" :style="{ backgroundPosition: position }"></div>
            <div class="title flex-center">登入</div>
            <div class="form-block">
                <div class="btn-shape form-input-block">
                    <img src="/images/icons/dog-gold.png" alt="" class="icon">
                    <div class="form-input-text" v-if="!showAccountInput && account === ''">帳號</div>
                    <input type="text" class="input" v-model="account" @focus="toggleInput('account')" @blur="toggleInput('account')">
                </div>
                <div class="btn-shape form-input-block">
                    <img src="/images/icons/dog-gold.png" alt="" class="icon">
                    <div class="form-input-text" v-if="!showPasswordInput && password === ''">密碼</div>
                    <input type="text" class="input" v-model="password" @focus="toggleInput('password')" @blur="toggleInput('password')">
                </div>
                <div class="btn-shape login-btn">登入</div>
                <div class="forget-password-block">
                    <div class="text">忘記密碼?</div>
                </div>
                <div class="gap-line">
                    <div class="text flex-center">或</div>
                </div>
                <div class="others-login-block">
                    <div class="btn-shape other-login-btn">使用Google帳號登入</div>
                    <div class="btn-shape other-login-btn">使用Facebook帳號登入</div>
                </div>

            </div>
        </div>
        <!-- <loading-mask/> -->
    </div>
</template>

<script>
// import LoadingMask from '@/components/layouts/LoadingMask'
export default {
    name: "LoginPage",
    // components: {
    //     LoadingMask
    // }
    data(){
        return {
            position: '',
            account: '',
            password: '',
            showAccountInput: false,
            showPasswordInput: false
        }
    },
    mounted() {
        let x = 0;
        setInterval(() => {
            x--;
            this.position = `${x}px ${x}px`;

            if (x < -2000) {
                x = 0;
            }
        }, 20);
    },
    methods: {
        toggleInput(type){
            if(type === 'account'){
                this.showAccountInput = !this.showAccountInput
            } else if (type === 'password'){
                this.showPasswordInput = !this.showPasswordInput
            }
        },
        previousPage(){
            this.$router.go(-1)
        }
    }
};
</script>

<style lang="sass" scoped>
.login-page
    .page-header
        height: 5rem
        box-shadow: 0 .2rem .4rem 0 rgba(0, 0, 0, 0.15)
        background-color: #333333
        font-size: 1.4rem
        font-weight: 500
        color: #efe1ce
        display: flex
        justify-content: center
        align-items: center
        z-index: 1
        position: relative
    .toggle-mode-btn
        font-size: 1.2rem
        width: 4.4rem
        height: 3rem
        border-radius: .5rem
        border: solid .1rem #efe1ce
        background-color: #333333
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        right: 1.5rem
    .content-block
        position: relative
        .bg
            background-image: url('/images/icons/tiles.svg')
            background-repeat: repeat
            background-color: #E5CEAE
            background-size: 190px 190px
            width: 100%
            height: 100%
            position: fixed
            top: 0
            left: 0
    .title
        font-size: 2rem
        font-weight: 500
        color: #333333
        position: relative
        z-index: 1
        margin: 3rem 0
    // .logo-block
    //     width: 80px
    //     height: 80px
    //     text-align: center
    //     line-height: 80px
    //     margin: 30px auto
    //     border-radius: 4.4px
    //     border: solid 0.9px #333333
    //     color: #333333
    //     position: relative
    //     z-index: 1
    .form-block
        position: relative
        z-index: 1
    .form-input-block
        display: flex
        align-items: center
        padding-left: 2.5rem
        overflow: hidden
    .form-input-text
        position: absolute
        color: #e5ceae
        left: 50%
        transform: translateX(-50%)
        font-size: 1.4rem
    .btn-shape
        width: 25rem
        height: 3.8rem
        border-radius: 1.85rem
        border: solid .1rem #ceb28b
        background-color: #ffffff
        margin: auto
        margin-bottom: 1.5rem
        box-sizing: border-box
    .forget-password-block
        width: 25rem
        margin: auto
        font-size: 1.2rem
        font-weight: 500
        color: #333333
        display: flex
        justify-content: flex-end
        .text
            border-bottom: solid 1px
    .icon
        width: 1.8rem
        height: 1.8rem
        margin-right: 1rem
    .input
        width: 100%
        border: none
        outline: none
        font-size: 1.4rem
        font-weight: 500
        color: #333333
        font-weight: 600
    .login-btn
        background-color: #333333
        color: #e5ceae
        display: flex
        align-items: center
        justify-content: center
    .others-login-block
        margin-top: 4rem
    .other-login-btn
        border-radius: 1.85rem
        border: solid .2rem #333333
        background-color: #e3a652
        font-size: 1.4rem
        color: #333333
        display: flex
        justify-content: center
        align-items: center
    .pre-icon
        position: absolute
        left: 1.5rem
    .gap-line
        height: .1rem
        width: 25rem
        background: #333333
        margin: auto
        position: relative
        margin-top: 7.5rem
        .text
            width: 3rem
            position: absolute
            background-color: #e5ceae
            font-size: 1.2rem
            font-weight: 500
            color: #333333
            top: 0
            left: 50%
            transform: translate(-50%, -50%)

</style>