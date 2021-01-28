<template>
    <div class="product-detail-page">
        <div class="product-attribute default-shadow">
            <div class="img-block">
                <img :src="productImgs[currentShowsImgIndex]" alt="product image">
            </div>
            <div class='img-dots-block'>
                <div 
                    v-for="(item, index) in productImgs" 
                    :key="index" 
                    class='dots'
                    :class="[currentShowsImgIndex === index ? 'default-deep-green-bgc' : 'origin-dot-color']"
                    @click="toggleCurrentShowsImg(index)"
                ></div>
            </div>
            <div class="spec-block">
                <product-spec :product_data='productData'/>
            </div>
        </div>
        <detail-nav-row @toggle-product-info='toggleProductInfo'/>
        <div class="default-more-content-block more-content-block default-shadow">
            <product-description v-show="showProductInfo === 'description'"/>
            <product-fulfillment v-show="showProductInfo === 'fulfillment'"/>
            <product-review v-show="showProductInfo === 'review'"/>
        </div>
    </div>
</template>

<script>
import ProductSpec from '@/components/pages/ProductListPage/ProductSpec'
import DetailNavRow from '@/components/pages/ProductDetailPage/DetailNavRow'
import ProductDescription from './ProductDescription.vue'
import ProductFulfillment from './ProductFulfillment.vue'
import ProductReview from './ProductReview.vue'

export default {
    name: 'ProductDetailPage',
    components: {
        ProductSpec,
        DetailNavRow,
        ProductDescription,
        ProductFulfillment,
        ProductReview
    },
    data(){
        return {
            productAttr: {
                id: '',
                type: ''
            },
            productImgs: ['/images/goku2.jpg', '/images/goku4.jpeg', '/images/goku3.jpeg'],
            currentShowsImgIndex: 0,
            productData: {
                name: 'Qucik Product Name',
                spec: {
                    spec_name: 'Color',
                    spec_options: [
                        {
                            spec: '桃粉色',
                            selected: false,
                            price: 100
                        },
                        {
                            spec: '淺灰色',
                            selected: false,
                            price: 1002
                        },
                        {
                            spec: '淺綠色',
                            selected: false,
                            price: 1004
                        },
                        {
                            spec: '黑色',
                            selected: false,
                            price: 1008
                        },
                        {
                            spec: '灰色',
                            selected: false,
                            price: 500
                        },
                        {
                            spec: '亞痲色',
                            selected: false,
                            price: 9900
                        },
                    ]
                }
            },
            showProductInfo: ''
        }
    },
    mounted(){
        this.productAttr.id = this.$route.params.id;
        this.productAttr.type = this.$route.params.type;
        this.productData.name = this.productAttr.type + ':' + this.productAttr.id;
        this.showProductInfo = 'description'
    },
    methods: {
        toggleProductInfo(value){
            this.showProductInfo = value
        },
        toggleCurrentShowsImg(index){
            this.currentShowsImgIndex = index
        }
    }
}
</script>

<style lang="sass" scoped>
.product-detail-page
    padding: 0 2rem
    .product-attribute
        background-color: #fff
        padding: 1.5rem
        border-radius: 5px
    .img-block
        width: 95%
        height: 20rem
        overflow: hidden
        margin: 1rem auto 0 auto 
        img
            width: 100%
            height: 100%
    .spec-block
        margin-top: 1rem
    .more-content-block
        background-color: #fff
        padding: 2rem 1rem 10rem 1rem
        border-radius: 0 0 5px 5px
    .img-dots-block
        display: flex
        align-items: center
        justify-content: center
        margin-top: 1rem
    .dots
        width: .7rem
        height: .7rem
        // background-color: rgba(0,0,0, .1)
        border-radius: 50%
        margin: 0 .5rem
    .origin-dot-color
        background-color: rgba(0,0,0,.1)   
</style>