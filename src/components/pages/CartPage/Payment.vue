<template>
    <div class="default-payment payment-block">
        <!-- <div class="default-payment-header payment-header default-text-color">付款方式</div> -->
        <base-select v-model="paymentSelect" class="default-payment-select" :placeholder="'請輸入付款方式'"/>
    </div>
</template>

<script>
    import BaseSelect from '@/components/layouts/BaseSelect'
    export default {
        name: 'Payment',
        components: {
            BaseSelect
        },
        data(){
            return {
                paymentSelect: ''
            }
        }
    }
</script>

<style lang="sass" scoped>
.payment-block
    padding: 0 3rem
    margin-top: 2rem
    .payment-header
        margin-top: 2rem
        font-weight: 800
    .payment-icon
        margin-right: 2rem
</style>