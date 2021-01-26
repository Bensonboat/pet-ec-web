<template>
    <div class="loading-mask">
        <div class="bgc-mask"></div>
        <div class="loading">
            <div class="loading-icon-spinner"></div>
            <div class="loading loading-icon-txt"></div>
        </div>
        <div class="loading-txt">
            Loading
            <span v-for="(item, index) in dots" :key="index">{{item}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'loadingMask',
        data(){
            return{
                dots: ['.']
            }
        },
        mounted() {
            this.dotAnimation()
        },
        methods: {
            dotAnimation(){
                let that = this;
                setInterval(() => {
                    that.dots.push('.');
                    if(that.dots.length > 3){
                        that.dots = []
                    }
                }, 800)
            }
        }
    }
</script>
<style lang="sass" scoped>
.loading-mask
    .bgc-mask
        opacity: .7
        background-color: white
        position: absolute
        width: 100vw
        height: 100vh
    .loading
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        z-index: 99999
    .loading-icon-spinner
        width: 25px
        height: 25px
        background: #d1d1d1
        animation: loader-spin .8s infinite ease-in
    .loading-icon-txt
        width: 55px
        height: 55px
        display: flex
        justify-content: center
        align-items: center
        animation: loader-txt .8s infinite ease-in
        color: white
        // font-family: Righteous
        font-size: 22px
    .loading-txt
        z-index: 99999
        // font-family: Righteous
        position: absolute
        top: 55%
        left: 50%
        font-size: 20px
        color: #d1d1d1
        transform: translateX(-50%)
    @keyframes loader-spin
        0%
            transform: rotate(0deg)
        17%
            border-bottom-right-radius: .01%
        25%
            transform: translateY(9px) rotate(22.5deg)
        50%
            transform: translateY(18px) rotate(45deg)
            border-bottom-right-radius: 40px
        75%
            transform: translateY(9px) rotate(67.5deg)
        100%
            transform: translateY(0) rotate(90deg)
    @keyframes loader-txt
        25%
            transform: translate(-50%, -20px)
        50%
            transform: translate(-50%, -20px)
        75%
            transform: translate(-50%, -20px)
        100%
            transform: translate(-50%, -50%)
</style>
