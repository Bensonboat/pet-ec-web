<template>
    <div class="searched-tip-block">
        <div class="searched-title-block">
            <img :src="modalData.icon" alt="搜尋圖案" class="icon">
            <div>{{modalData.title}}</div>
        </div>
        <div :class="{'order-type': modalData.isTag}">
            <div 
                v-for='(item, index) in modalData.keyWords' 
                :key="index" 
                class="key-word click-animation-small"
                :class="{'tag-look': modalData.isTag}"
                @click="getKeyWord(item)"
            >{{item}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchTipBlock',
        props: {
            modalData: {
                type: Object
            }
        },
        data(){
            return {
                keyWords: ['狗飼料', '貓砂', 'Royal', '外出用品']
            }
        },
        methods: {
            getKeyWord(key_word){
                this.$emit('pass-key-word', key_word)
            }
        }
    }
</script>

<style lang="sass" scoped>
.searched-tip-block
    padding: 1rem 1rem 2rem
    border-radius: .5rem
    border: solid .1rem #333333
    background-color: #f2c47e
    .searched-title-block
        font-size: 1.4rem
        font-weight: 500
        color: #333333
        padding-bottom: 1rem
        border-bottom: solid .1rem #333333
        display: flex
        align-items: center
    .key-word
        margin-top: .8rem
        font-size: 1.4rem
        font-weight: 500
        color: #333333
    .order-type
        display: flex
        align-items: center
        justify-content: flex-start
        flex-wrap: wrap
    .tag-look
        padding: .2rem 1rem .4rem
        border-radius: 1.2rem
        border: solid .1rem #333333
        background-color: #e3a652
        margin: 1rem .8rem 0 0 
    .icon
        width: 1.4rem
        height: 1.4rem
        margin-right: .6rem
</style>