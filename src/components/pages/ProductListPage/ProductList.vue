<template>
    <div class="product-list">
        <product-basic-data 
            v-for="(item, index) in productListData" 
            :key='index' 
            :product_data='item'
            class="product-basic-data"
        />
    </div>
</template>

<script>
import ProductBasicData from '../../layouts/ProductBasicData.vue';

export default {
    name: 'ProductList',
    components: { 
        ProductBasicData, 
    },
    data(){
        return {
            productListData: [
                {
                    img: '/images/animal.png',
                    name: '吧啦吧啦 台灣大黑熊 台灣大黑熊',
                    price: 2000
                },
                {
                    img: '/images/animal.png',
                    name: '嘎啦嘎啦 白色大眼睛',
                    price: 1000
                },
                {
                    img: '/images/animal.png',
                    name: '吧啦吧啦',
                    price: 2000
                },
                {
                    img: '/images/animal.png',
                    name: '嘎啦嘎啦 台灣大黑熊 台灣大黑熊 白色大眼睛',
                    price: 1000
                },
                {
                    img: '/images/test.png',
                    name: 'Test',
                    price: 1000
                }
            ]
        }
    }
    
}
</script>

<style lang="sass" scoped>
.product-list
    display: flex
    flex-wrap: wrap
    padding: 0 3rem
    justify-content: space-between
    align-content: stretch
    padding-bottom: 15rem
    .product-basic-data
        margin-top: 5rem
</style>