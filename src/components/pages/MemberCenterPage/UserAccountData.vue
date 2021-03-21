<template>
    <div class="user-account-data">
        <avatar/>
        <div class="name-account-points-block">
            <div class="name-points-row">
                <div class="name">花柚子</div>
                <div class="points">120 點</div>
            </div>
            <div class="account">belinda90285@gmail.com</div>
        </div>
        <div class="log-out-btn click-animation-small">登出</div>
    </div>
</template>

<script>
    import Avatar from './Avatar'
    export default {
        name: 'UserAccountData',
        components: {
            Avatar
        }
    }
</script>

<style lang="sass" scoped>
.user-account-data
    height: 7rem
    box-shadow: .1rem .1rem .1rem 0 rgba(0, 0, 0, 0.1)
    background-color: #efe1ce
    padding: 1rem 1.5rem
    box-sizing: border-box
    display: flex
    align-items: center
    .name-account-points-block
        flex: 1
        font-size: 1.3rem
        font-weight: 500
        color: #333333
    // .avatar
    //     width: 6rem
    //     height: 6rem
    //     box-shadow: 0 .2rem .3rem 0 rgba(0, 0, 0, 0.2)
    //     border-radius: 50%
    //     background-color: white
    //     margin-right: 1rem
    //     position: relative
    //     overflow: hidden
    //     background-image: url('/images/animal.png')
    //     background-size: 80%
    //     background-repeat: no-repeat
    //     background-position: 50% 50%
    //     &::before
    //         content: '編輯'
    //         font-size: 1.2rem
    //         color: white
    //         text-align: center
    //         width: 100%
    //         height: 1.6rem
    //         background-color: rgba(51, 51, 51, 0.8)
    //         position: absolute
    //         bottom: 0
    .name-points-row
        display: flex
        align-items: center
        margin-bottom: .5rem
    .points
        width: 5rem
        height: 2rem
        border-radius: 1rem
        border: solid .1rem #ccaa76
        display: flex
        align-items: center
        justify-content: center
        margin-left: 1rem
        font-size: 1.2rem
    .log-out-btn
        width: 5rem
        height: 2.5rem
        border-radius: .5rem
        border: solid .1rem #ccaa76
        background-color: #f2c47e
        display: flex
        align-items: center
        justify-content: center
        font-size: 1.2rem
        font-weight: 500
        color: #654e2d
</style>