<template>
    <div class="searched-tip-block">
        <div class="searched-title-block">
            <div>{{modalData.title}}</div>
        </div>
        <div class="key-word-block" :class="{'order-type': modalData.isTag}">
            <div 
                v-for='(item, index) in modalData.keyWords' 
                :key="index" 
                class="key-word"
                :class="{'tag-look': modalData.isTag}"
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
        }
    }
</script>

<style lang="sass" scoped>
.searched-tip-block
    padding: 1rem 1rem 2rem
    border-radius: .5rem
    border: solid 1px #333333
    background-color: #f2c47e
    .searched-title-block
        font-size: 14px
        font-weight: 500
        color: #333333
        padding-bottom: 1rem
        border-bottom: solid 1px #333333
    .key-word-block

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
        padding: 2px 10px 4px
        border-radius: 12px
        border: solid 1px #333333
        background-color: #e3a652
        margin: 1rem .8rem 0 0 
</style>