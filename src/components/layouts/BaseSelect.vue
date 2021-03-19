<template>
    <div class="base-select" @click="toggleOptionMenu">
        <div class="select-text-block">
            <div class="select-text">{{currentSelectText}}</div>
            <img src="/images/icons/filter.svg" alt="篩選按鈕" class="filter-icon">
        </div>
        <!-- <input @click="toggleOptionMenu" class='default-text-color input-background' v-model='currentSelect' type="text" @blur='toggleOptionMenu'> -->
        <div class="auto-close-bgc-mask" @click.stop="toggleOptionMenu" v-show="showOptionMenu"></div>
        <transition name='basic'>
            <div class="base-select-block" v-show='showOptionMenu'>
                <!-- <div v-if="currentSelect === ''" class="current-select lighter-text">{{placeholder}}</div>
                <div v-else class="current-select">{{currentSelect}}</div> -->
                <!-- <div 
                    v-show='showOptionMenu'
                    class="option-menu"
                > -->
                    <div 
                        v-for='(item, index) in options' 
                        :key="index" 
                        class="option"
                        @click="selectItem(item)"
                    >
                        {{item.name}}
                    </div>
                <!-- </div> -->
            </div>            
        </transition>
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
                currentSelectText: '價格由低到高',
                options: [
                    {
                        name: '最新上架商品',
                        value: '貨到付款'
                    },
                    {
                        name: '熱門銷量商品',
                        value: '信用卡'
                    },
                    {
                        name: '價格由低到高',
                        value: '貨到付款'
                    },
                    {
                        name: '價格由高到低',
                        value: '貨到付款'
                    },
                ]
            }
        },
        methods: {
            selectItem(data){
                this.$emit('input', data.value);
                this.currentSelectText = data.name
            },
            toggleOptionMenu(){
                // setTimeout(() => {
                this.showOptionMenu = !this.showOptionMenu
                // }, 100)
            }
        }
    }
</script>

<style lang="sass" scoped>
.base-select
    position: relative
    width: inherit
    height: inherit
    background-color: #f2c47e
    box-sizing: border-box
    background-color: #f2c47e
    border-radius: .4rem
    border: solid .1rem #333333
    padding: 0 1rem
    color: #333333
    // border: solid 1px lightblue
    // overflow: hidden
    // .input-background
    //     color: transparent
    //     border: none
    //     outline: none
    //     z-index: 200
    //     width: 100%
    //     height: 100%
    //     position: absolute
    //     top: 0
    //     left: 0
    //     box-sizing: border-box
    //     background-color: #f2c47e
    //     border-radius: 4px
    //     border: solid 1px #333333
    //     background-color: #f2c47e
    //     padding: .4rem 1rem .6rem
    .select-text-block
        display: flex
        align-items: center
        height: 100%
    .select-text
        height: 100%
        word-break: keep-all
        display: flex
        align-items: center
    .auto-close-bgc-mask
        width: 100vw
        height: 100vh
        background-color: transparent
        opacity: .5
        position: fixed
        top: 0
        left: 0
        z-index: 1
    .current-select
        padding: .5rem 1.5rem
        border: solid .1rem rgba(0,0,0,.15)
        width: 100%
        height: 100%
        overflow: scroll
        border-radius: .5rem
        color: #666666
        display: flex
        align-items: center
    .lighter-text
        color: #CFD8D7
    .option-menu
        background-color: #f2c47e
        border-radius: .5rem
        // margin-top: 40px
        box-shadow: 0 .2rem .5rem rgba(0,0,0,.15)
        position: relative
        // &:before
        //     content: ''
        //     display: block
        //     width: 1rem
        //     height: 1rem
        //     background-color: white
        //     position: absolute
        //     left: 30%
        //     top: -0.5rem
        //     transform: rotate(45deg)
        //     z-index: -1
        //     box-shadow: 1px 1px 2px rgba(0,0,0,1)
    .option
        // padding: .5rem 1.2rem
        word-break: break-word
        color: #333333
        margin-top: .8rem
        // border-bottom: solid 1px lightgray
    .base-select-block
        position: absolute
        z-index: 100
        // width: inherit
        // height: inherit
        left: 0
        top: 3.6rem
        padding: 0 1rem 1rem 1rem
        border-radius: .4rem
        box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.18)
        border: solid .1rem #333333
        background-color: #f2c47e
        width: 100%
        box-sizing: border-box
    .filter-icon
        width: 1.2rem
        height: 1.2rem
        margin-left: .6rem
</style>