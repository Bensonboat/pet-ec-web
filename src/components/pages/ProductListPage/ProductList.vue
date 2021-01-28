<template>
    <div class="product-list default-shadow">
        <product-basic-data 
            v-for="(item, index) in productListData" 
            :key='index' 
            :product_data='item'
            class="product-basic-data"
            @show-quick-add-modal='toggleQuickAddModal'
        />
        <div v-if="showQuickAddModal">
            <div class='modal-mask'></div>
            <product-spec class="quick-add-block" :product_data='quickAddProductData' @close-modal='toggleQuickAddModal'/>
        </div>
    </div>
</template>

<script>
import ProductBasicData from './ProductBasicData.vue';
import ProductSpec from './ProductSpec'

export default {
    name: 'ProductList',
    components: { 
        ProductBasicData,
        ProductSpec
    },
    data(){
        return {
            showQuickAddModal: false,
            productListData: [
                {
                    img: '/images/goku1.jpeg',
                    name: '吧啦吧啦 台灣大黑熊 台灣大黑熊',
                    price: 2000,
                    id: 1,
                    type: '零食 零食 零食 零食 零食'
                },
                {
                    img: '/images/animal.png',
                    name: '嘎啦嘎啦 白色大眼睛',
                    price: 1000,
                    id: 2,
                    type: '零食'
                },
                {
                    img: '/images/goku2.jpg',
                    name: '吧啦吧啦',
                    price: 2000,
                    id: 3,
                    type: '玩具'
                },
                {
                    img: '/images/goku3.jpeg',
                    name: '嘎啦嘎啦 台灣大黑熊 台灣大黑熊 白色大眼睛',
                    price: 1000,
                    id: 4,
                    type: '玩具'
                },
                {
                    img: '/images/test.png',
                    name: 'Test',
                    price: 1000,
                    id: 4,
                    type: '零食'
                },
                {
                    img: '/images/goku4.jpeg',
                    name: 'GOKU 龜派氣功',
                    price: 1300,
                    id: 5,
                    type: '玩具'
                }
            ],
            quickAddProductData: {
                name: 'Qucik Product Name',
                spec: {
                    spec_name: 'Color',
                    spec_options: [
                        {
                            spec: '桃粉色',
                            selected: false
                        },
                        {
                            spec: '淺灰色',
                            selected: false
                        },
                        {
                            spec: '淺綠色',
                            selected: false
                        },
                        {
                            spec: '黑色',
                            selected: false
                        }
                    ]
                }
            }
        }
    },
    methods: {
        toggleQuickAddModal(){
            this.showQuickAddModal = !this.showQuickAddModal
        },
    }
    
}
</script>

<style lang="sass" scoped>
.product-list
    display: flex
    flex-wrap: wrap
    // padding: 0 3rem
    justify-content: space-between
    align-content: stretch
    // padding-bottom: 10rem
    // padding: 0 2rem 10rem 2rem
    padding: 0 1rem 10rem 1rem
    background-color: #fff
    border-radius: 5px
    .product-basic-data
        margin-top: 2rem
    .quick-add-block
        background-color: white
        width: 80vw
        // height: 200px
        position: fixed
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        padding: 2rem
</style>