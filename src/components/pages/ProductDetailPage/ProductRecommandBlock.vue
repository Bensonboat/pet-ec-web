<template>
    <div class="product-recommand-block">
        <div class="recommand-text">
            <img src="/images/filled-heart.png" alt="heart icon" class='recommand-icon'>
            <div>推薦給你</div>
        </div>
        <div class="product-recommand-row">
            <product-basic-data
                v-for="(item, index) in productData" 
                :key='index' 
                :product_data='item'
                :showQuickAddIcon='false'
                class="recommand-item"
            />
        </div>
        <!-- <div class="product-recommand-row">
            <div v-for="(item, index) in productData" :key="index" class="recommand-item">
                <img :src="item.img" alt="product picture" class="recommand-product-img">
                <div class="recommand-product-name">{{item.name}}</div>
                <div>{{item.price}}</div>
            </div>
        </div> -->
    </div>
</template>

<script>
import ProductBasicData from '../ProductListPage/ProductBasicData.vue'

    export default {
        name: 'ProductRecommandBlock',
        components: {
            ProductBasicData
        },
        data(){
            return {
                productData: [
                    // {
                    //     img: '/images/test.png',
                    //     name: 'Test',
                    //     price: 1000,
                    //     id: 4,
                    //     type: '零食'
                    // },
                    {
                        // img: '/images/p1.jpg',
                        img: ['/images/p1.jpg', '/images/test2.png'],
                        name: '吧啦吧啦',
                        price: 2000,
                        special_price: 1500,
                        id: 3,
                        type: '玩具'
                    },
                    {
                        // img: '/images/p1.jpg',
                        img: ['/images/p1.jpg', '/images/test2.png'],
                        name: '嘎啦嘎啦 台灣大黑熊 台灣大黑熊 白色大眼睛',
                        price: 1000,
                        id: 4,
                        type: '玩具'
                    },
                    {
                        // img: '/images/p1.jpg',
                        img: ['/images/p1.jpg', '/images/test2.png'],
                        name: 'Test',
                        price: 1000,
                        id: 4,
                        type: '零食'
                    },
                    {
                        // img: '/images/p1.jpg',
                        img: ['/images/p1.jpg', '/images/test2.png'],
                        name: '吧啦吧啦',
                        price: 2000,
                        id: 3,
                        type: '玩具'
                    },
                    {
                        // img: '/images/p1.jpg',
                        img: ['/images/p1.jpg', '/images/test2.png'],
                        name: '嘎啦嘎啦 台灣大黑熊 台灣大黑熊 白色大眼睛',
                        price: 1000,
                        id: 4,
                        type: '玩具'
                    },
                    {
                        // img: '/images/p1.jpg',
                        img: ['/images/p1.jpg', '/images/test2.png'],
                        name: 'Test',
                        price: 1000,
                        id: 4,
                        type: '零食'
                    },
                    {
                        // img: '/images/p1.jpg',
                        img: ['/images/p1.jpg', '/images/test2.png'],
                        name: '吧啦吧啦',
                        price: 2000,
                        id: 3,
                        type: '玩具'
                    },
                    {
                        // img: '/images/p1.jpg',
                        img: ['/images/p1.jpg', '/images/test2.png'],
                        name: '嘎啦嘎啦 台灣大黑熊 台灣大黑熊 白色大眼睛',
                        price: 1000,
                        id: 4,
                        type: '玩具'
                    },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
.product-recommand-block
    margin-top: 2rem
    .recommand-text
        display: flex
        align-items: center
        font-size: 1.4rem
        font-weight: 500
        color: #333333
    .recommand-icon
        width: 2rem
        height: 2rem
        margin-right: .5rem
    .product-recommand-row
        overflow-x: scroll
        // width: 100%
        display: flex
        margin-top: 1.2rem
        padding-bottom: 2rem
    .recommand-item
        margin-right: 1.5rem
        height: 23rem
        width: 14rem
        flex: 1 0 auto
    .recommand-product-img
        width: 13rem
        height: 13rem
    .recommand-product-name
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden 
</style>