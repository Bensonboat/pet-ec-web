<template>
    <div class="default-checkout-process checkout-process">
        <div 
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
        </div>
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
                processData: [
                    {
                        number: 1,
                        text: '購物車'
                    },
                    {
                        number: 2,
                        text: '填寫資料'
                    },
                    {
                        number: 3,
                        text: '訂單完成'
                    }
                ],
                // currentStep: 1
            }
        }
    }
</script>

<style lang="sass" scoped>
.checkout-process
    display: flex
    justify-content: space-evenly
    margin-top: 3rem
    .each-process-block
        display: flex
        justify-content: flex-start
        align-items: center
    .process-step-block
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
    .process-step-number
        display: flex
        justify-content: center
        align-items: center
        border-radius: 50%
    .process-step-text
        margin-top: .5rem
    .opacity-mask
        opacity: .5
</style>