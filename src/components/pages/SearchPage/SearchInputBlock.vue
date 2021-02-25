<template>
    <div class="search-input-block">
        <img src="/images/icons/back.svg" alt="上一步按鈕" class="icon" @click="previousPage">
        <div class="input-block">
            <input type="text" placeholder="搜尋" class="input" v-model="searchKeyWord">
            <img src="/images/icons/del.png" alt="清除按鈕" class="del-icon" @click="clearInput">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchInputBlock',
        data(){
            return{
                searchKeyWord: '',
            }
        },
        methods: {
            previousPage(){
                this.$router.go(-1)
            },
            clearInput(){
                this.searchKeyWord = ''
            }
        }
    }
</script>

<style lang="sass" scoped>
.search-input-block
    height: 4.4rem
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)
    background-color: #333333
    padding: 1rem 1.5rem 1rem 1rem
    box-sizing: border-box
    display: flex
    align-items: center
    .icon
        width: 2.4rem
        height: 2.4rem
        margin-right: 1rem
    .del-icon
        width: 1.6rem
        height: 1.6rem
        position: absolute
        right: 1rem
        top: 50%
        transform: translateY(-50%)
    .input-block
        padding: 6px 10px 6px 12px
        border-radius: 5px
        border: solid 1px #333333
        background-color: #ffffff
        width: 100%
        position: relative
        .input
            background-color: transparent
            border: none
            outline: none
</style>