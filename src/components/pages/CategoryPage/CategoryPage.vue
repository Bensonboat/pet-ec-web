<template>
    <div class="category-page">
        <div class="bg" :style="{backgroundPosition: position}"></div>
        <div class="type-icon-block">
            <div class="breed-type-circle" v-show="this.$route.params.type === 'cat'">
                <div class="default-black-color cat-type txt">喵喵</div>
                <img src="/images/icons/cat-black.png" alt="貓咪圖案" class="cat-icon">
                <div class="tick-block">
                    <img src="/images/icons/tick.svg" alt="打勾圖案" class="tick-icon">
                </div>
            </div>
            <div class="breed-type-circle" v-show="this.$route.params.type === 'dog'">
                <div class="default-black-color dog-type txt">汪汪</div>
                <img src="/images/icons/dog-black.png" alt="狗狗圖案" class="dog-icon">
                <div class="tick-block">
                    <img src="/images/icons/tick.svg" alt="打勾圖案" class="tick-icon">
                </div>
            </div>
            <div class="breed-type-circle" v-show="this.$route.params.type === 'mix'">
                <div class="default-black-color mix-type txt">汪喵</div>
                <img src="/images/icons/mix-black.png" alt="貓狗圖案" class="mix-icon">
                <div class="tick-block">
                    <img src="/images/icons/tick.svg" alt="打勾圖案" class="tick-icon">
                </div>
            </div>
        </div>
        <div class="category-options-block">
            <div 
                class="category-option" 
                v-for='(item, index) in options' 
                :key="index" 
                :class="{'option-seledted' : item.selected}"
                @click="toggleSelectOption(index)"    
            >
                {{item.name}}
                <div v-show='item.selected' class="category-tick-block">
                    <img src="/images/icons/tick.svg" alt="打勾圖案" class="category-tick-icon">
                </div>
            </div>
        </div>
        <div class="confirm-btn click-animation" :class="[selected ? 'selected' : '']" @click="routerSwitch('/product_list_page')">
            <div>OK</div>
            <img v-show='selected' src="/images/icons/next.svg" alt="下一步圖案" class="next-step-icon">
            <img v-show='!selected' src="/images/icons/next-unselect.svg" alt="下一步圖案" class="next-step-icon">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CategoryPage',
        data(){
            return {
                position: '',
                circle: {
                    cat: false,
                    dog: false,
                    mix: true
                },
                options: [
                    {
                        name: '玩具',
                        selected: false,
                        value: ''
                    },
                    {
                        name: '飼料',
                        selected: false,
                        value: ''
                    },
                    {
                        name: '罐頭',
                        selected: false,
                        value: ''
                    },
                    {
                        name: '零食',
                        selected: false,
                        value: ''
                    },
                    {
                        name: '睡窩',
                        selected: false,
                        value: ''
                    },
                    {
                        name: '貓砂',
                        selected: false,
                        value: ''
                    },
                    {
                        name: '抓板',
                        selected: false,
                        value: ''
                    },
                    {
                        name: '用品',
                        selected: false,
                        value: ''
                    },
                    {
                        name: '其他',
                        selected: false,
                        value: ''
                    },
                ],
                selected: false,
                selectType: '',
            }
        },
        mounted(){
            let x = 0
            setInterval(() => {
                x--;
                this.position = `${x}px ${x}px`;
                
                if(x < -2000){
                    x = 0
                }
            }, 20);

            // 預設貓咪類別
            if(this.$route.params.type === undefined){
                this.$router.replace({ name: "CategoryPage", params: {type: 'cat'} })
            }
        },
        methods: {
            toggleSelectOption(index){
                this.options = this.options.map((item, key) => {
                    if(index !== key){
                        item.selected = false 
                    } else {
                        item.selected = !item.selected
                        if(item.selected){
                            this.selected = true
                            this.selectType = item.name
                        } else {
                            this.selected = false
                            this.selectType = ''
                        }
                    }
                    return item
                })
            },
            routerSwitch(){
                if(this.selectType === ''){ return };
                this.$router.push('/product_list_page')
            },
        }
    }
</script>

<style lang="sass" scoped>
.category-page
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
        // z-index: -1
    .type-icon-block
        top: 8.5rem
        left: 50%
        transform: translateX(-50%)
        position: absolute
    .breed-type-circle
        border-radius: 50%
        border: solid 4px
        border-color: #333333
        background-color: #f2c47e
        // position: absolute
        box-sizing: border-box
        width: 8rem
        height: 8rem
        .txt
            position: absolute
            font-size: 2rem
            font-weight: bold
            letter-spacing: 3px
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            text-align: center
            width: 100%
    // .dog-circle
    //     right: 5.4rem
    //     top: 21.5rem
    // .cat-circle
    //     left: 5rem
    //     top: 9rem
    // .mix-circle
    //     top: 34rem
    //     left: 7.5rem
    // .cat-type
    //     width: 14rem
    //     height: 14rem
    //     left: 4rem
    //     top: 8.5rem
    .cat-icon
        width: 6rem
        height: 6rem
        position: absolute
        bottom: 0
        left: -2rem
        // top: 12.1rem
        // left: 1.8rem
    // .dog-type
    //     width: 12rem
    //     height: 12rem
    //     right: 5.5rem
    //     top: 21.5rem
    .dog-icon
        bottom: -1rem
        right: -3rem
        position: absolute
        width: 5rem
        height: 5rem
    // .mix-type
    //     width: 12rem
    //     height: 12rem
    //     top: 34rem
    //     left: 7.5rem
    .mix-icon
        bottom: -2rem
        left: -4rem
        // top: 39rem
        // left: 2rem
        position: absolute
        width: 6rem
        height: 6rem
    .tick-icon
        width: 1.2rem
        height: 1.2rem        
    .tick-block
        position: absolute
        width: 2rem
        height: 2rem
        background-color: #333333
        right: 0
        display: flex
        align-items: center
        justify-content: center
        border-radius: 50%
    .category-options-block
        margin-top: 16rem
        padding: 0 4rem
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        gap: 3rem 
    .category-option
        width: 6rem
        height: 6rem
        margin: 0 auto
        border-radius: 50%
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.12)
        border: solid 2px #ccaa76
        background-color: #f2c47e
        font-size: 1.8rem
        font-weight: 500
        font-stretch: normal
        font-style: normal
        line-height: normal
        letter-spacing: normal
        color: #333333
        display: flex
        align-items: center
        justify-content: center
        position: relative
        box-sizing: border-box
    .category-tick-block
        width: 2rem
        height: 2rem
        position: absolute
        background-color: #333333
        display: flex
        align-items: center
        justify-content: center
        border-radius: 50%
        right: -1rem
        top: -.5rem
    .category-tick-icon
        width: 1.2rem
        height: 1.2rem
    .option-seledted
        border-color: #333333
    .confirm-btn
        width: 25rem
        height: 3.8rem
        border-radius: 5rem
        border: solid 2px #c99246
        background-color: #e3a652
        margin: 5rem auto
        position: relative
        // position: absolute
        // bottom: 2rem
        // left: 50%
        // transform: translateX(-50%)
        font-size: 1.8rem
        font-weight: bold
        display: flex
        justify-content: center
        align-items: center
        color: #c99246
        font-family: 'roboto'
    .next-step-icon
        width: 1.4rem
        height: 1.4rem
        position: absolute
        right: 1.6rem
    .selected
        color: #333333
        border-color: #333333
</style>