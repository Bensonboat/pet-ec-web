<template>
    <div class="product-detail-page">
        <div class="product-attribute default-shadow">
            <div class="img-block">
                <img src="/images/test2.png" alt="">
            </div>
            <div class="spec-block">
                <product-spec :product_data='quickAddProductData'/>
            </div>
        </div>
        <detail-nav-row @toggle-product-info='toggleProductInfo'/>
        <div class="default-more-content-block more-content-block">
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
            quickAddProductData: {
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
        this.quickAddProductData.name = this.productAttr.type + ':' + this.productAttr.id;
        this.showProductInfo = 'description'
    },
    methods: {
        toggleProductInfo(value){
            this.showProductInfo = value
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
        width: 75vw
        margin: 1rem auto 0 auto 
        img
            width: 100%
            height: 100%
    .spec-block
        margin-top: 2rem
    .more-content-block
        background-color: #fff
        padding: 2rem 1rem 10rem 1rem
        border-radius: 0 0 5px 5px
</style>