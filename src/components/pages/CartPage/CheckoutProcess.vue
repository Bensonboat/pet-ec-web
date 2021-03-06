<template>
    <div class="checkout-process">
        <div class="process-title">訂單確認</div>
        <div class="process-line-block">
            <div class="circle full-circle"></div>
            <svg :width="svgWidth" height="1px">
                <line x1="0" y1="0" x2="300" y2="0" style="stroke: #333333;stroke-width: .3rem"/>
            </svg>
            <div class="circle" :class="{'full-circle' : step === 2}"></div>
            <svg :width="svgWidth" height="1px">
                <line x1="0" y1="0" x2="300" y2="0" style="stroke: #333333;stroke-width: .3rem"/>
            </svg>
            <div class="circle"></div>
        </div>
        <!-- <div class="cart-item-attr-block">

        </div> -->
        <!-- <div 
            v-for='(item, index) in processData' 
            :key="index"
            class="each-process-block"
        >
            <div class="process-step-block">
                <div 
                    class="default-process-step-number default-gray-bgc process-step-number"
                    :class="[step === index + 1 ? 'default-deep-green-bgc' : 'opacity-mask']"    
                >
                    {{item.number}}
                </div>
                <div 
                    class="process-step-text default-text-color"
                    :class="[step === index + 1 ? 'default-deep-green-color' : 'opacity-mask']"    
                >
                    {{item.text}}
                </div>
            </div>
            <img 
                v-if='index !== processData.length -1' 
                src="/images/right.png" 
                alt="next step icon" 
                class="default-step-icon"
                :class="[step === index + 1 ? '' : 'opacity-mask']"    
            >
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'CheckoutProcess',
        props: {
            step: Number
        },
        data(){
            return {
                svgWidth: '9rem'
                // processData: [
                //     {
                //         number: 1,
                //         text: '購物車'
                //     },
                //     {
                //         number: 2,
                //         text: '填寫資料'
                //     },
                //     {
                //         number: 3,
                //         text: '訂單完成'
                //     }
                // ],
                // currentStep: 1
            }
        }
    }
</script>

<style lang="sass" scoped>
.checkout-process
    height: 4.4rem
    background-color: #efe1ce
    padding: 1.3rem 2rem
    box-sizing: border-box
    color: #333333
    display: flex
    justify-content: space-between
    .process-title
        font-size: 1.2rem
        font-weight: 500
    .process-line-block
        display: flex
        align-items: center
    .circle
        width: 1rem
        height: 1rem
        border-radius: 100%
        border: solid 1px #333333
    .full-circle
        background-color: #333333
    .cart-item-attr-block
        background-color: #fff
    // display: flex
    // justify-content: space-evenly
    // margin-top: 3rem
    // .each-process-block
    //     display: flex
    //     justify-content: flex-start
    //     align-items: center
    // .process-step-block
    //     display: flex
    //     flex-direction: column
    //     align-items: center
    //     justify-content: center
    // .process-step-number
    //     display: flex
    //     justify-content: center
    //     align-items: center
    //     border-radius: 50%
    // .process-step-text
    //     margin-top: .5rem
    // .opacity-mask
    //     opacity: .5
</style>