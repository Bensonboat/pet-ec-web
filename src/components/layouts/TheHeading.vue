<template>
    <div class="the-heading default-shadow">
        <div class="heading-operation-left-block">
            <div @click="previousPage" class="operation-item">
                <img src="/images/left-arrow.png" alt="" class="left-arrow-icon">
            </div>
            <div class="operation-item">
                <img src="/images/search.png" alt="" class="search-icon">
            </div>
        </div>
        <div @click="toHomePage">
            <img src="/images/animal.png" alt="" class="logo-icon">
        </div>
        <div class="heading-operation-right-block">
            <div class="operation-item">
                <img src="/images/user.png" alt="" class="user-icon">
            </div>
            <div class="operation-item">
                <img src="/images/cart.png" alt="" class="cart-icon">
                <div class="default-deep-green-bgc in-cart-number">1</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheHeading',
        methods: {
            toHomePage(){
                this.$router.push('/home_page')
            },
            previousPage(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="sass" scoped>
.the-heading
    height: 5rem
    display: flex
    justify-content: center
    align-items: center
    position: relative
    background-color: #fff
    z-index: 3000
    .logo-icon
        display: flex
        width: 3rem
        height: 3rem
    .user-icon, .cart-icon, .search-icon, .left-arrow-icon
        width: 2rem
        height: 2rem
        display: flex        
    .heading-operation-right-block
        display: flex
        flex-wrap: nowrap
        position: absolute
        right: 2rem
    .heading-operation-left-block
        display: flex
        position: absolute
        left: 2rem
    .operation-item
        margin-right: 1.5rem 
        position: relative
    .in-cart-number
        position: absolute
        top: -10px
        right: -15px
        width: 2rem
        height: 2rem
        border-radius: 50%
        display: flex
        align-items: baseline
        justify-content: center
        font-size: 12px

</style>