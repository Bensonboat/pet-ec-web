<template>
    <div class="base-select">
        <div class="auto-close-bgc-mask" @click="toggleOptionMenu" v-show="showOptionMenu"></div>
        <div class="base-select-block" @click="toggleOptionMenu">
            <div v-if="currentSelect === ''" class="current-select lighter-text">{{placeholder}}</div>
            <div v-else class="current-select">{{currentSelect}}</div>
            <div 
                v-show='showOptionMenu'
                class="option-menu"
            >
                <div 
                    v-for='(item, index) in options' 
                    :key="index" 
                    class="option"
                    @click="selectItem(item)"
                >
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseSelect',
        props: {
            placeholder: {
                type: String,
                default: '請輸入'
            }
        },
        data(){
            return {
                showOptionMenu: false,
                currentSelect: '',
                options: [
                    {
                        name: '貨到付款',
                        value: '貨到付款'
                    },
                    {
                        name: '信用卡',
                        value: '信用卡'
                    }
                ]
            }
        },
        methods: {
            selectItem(data){
                this.$emit('input', data.value);
                this.currentSelect = data.name
            },
            toggleOptionMenu(){
                this.showOptionMenu = !this.showOptionMenu
            }
        }
    }
</script>

<style lang="sass" scoped>
.base-select
    overflow: hidden
    display: inline-block
    .auto-close-bgc-mask
        width: 100vw
        height: 100vh
        background-color: transparent
        position: absolute
        top: 0
        left: 0
    .current-select
        padding: .5rem 1.5rem
        border: solid 1px rgba(0,0,0,.15)
        width: 100%
        height: 100%
        overflow: scroll
        border-radius: 5px
        color: #666666
        display: flex
        align-items: center
    .lighter-text
        color: #CFD8D7
    .option-menu
        background-color: white
        border-radius: 5px
        margin-top: 10px
        box-shadow: 0 2px 5px rgba(0,0,0,.15)
        position: relative
        &:before
            content: ''
            display: block
            width: 1rem
            height: 1rem
            background-color: white
            position: absolute
            left: 30%
            top: -0.5rem
            transform: rotate(45deg)
            z-index: -1
            box-shadow: 1px 1px 2px rgba(0,0,0,1)
    .option
        padding: .5rem 1.2rem
        word-break: break-word
        color: #666666
        // border-bottom: solid 1px lightgray
    .base-select-block
        position: absolute
        z-index: 100
        width: inherit
        height: inherit
</style>