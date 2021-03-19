<template>
    <div class="login-page">
        <div class="page-header">
            <div class="toggle-mode-btn">註冊</div>
            <div>登入</div>
        </div>
        <div class="content-block">
            <div class="bg" :style="{ backgroundPosition: position }"></div>
            <div class="logo-block">LOGP</div>
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
        width: 4.4rem
        height: 3rem
        border-radius: .5rem
        border: solid .1rem #efe1ce
        background-color: #333333
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        left: 1.5rem
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
    .logo-block
        width: 80px
        height: 80px
        text-align: center
        line-height: 80px
        margin: 30px auto
        border-radius: 4.4px
        border: solid 0.9px #333333
        color: #333333
        position: relative
        z-index: 1
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
        color: #dec39e
    .login-btn
        background-color: #333333
        color: #e5ceae
        display: flex
        align-items: center
        justify-content: center
</style>