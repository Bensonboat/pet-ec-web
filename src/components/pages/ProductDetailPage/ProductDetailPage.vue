<template>
    <div class="product-detail-page">
        <div class="product-attribute">
            <div class="img-block">
                <img src="/images/test2.png" alt="">
            </div>
            <div class="spec-block">
                <product-spec :product_data='quickAddProductData'/>
            </div>
        </div>
        <detail-nav-row/>
    </div>
</template>

<script>
import ProductSpec from '@/components/pages/ProductListPage/ProductSpec'
import DetailNavRow from '@/components/pages/ProductDetailPage/DetailNavRow'
export default {
    name: 'ProductDetailPage',
    components: {
        ProductSpec,
        DetailNavRow
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
                        },
                        {
                            spec: '灰色',
                            selected: false
                        },
                        {
                            spec: '亞痲色',
                            selected: false
                        },
                    ]
                }
            }
        }
    },
    mounted(){
        this.productAttr.id = this.$route.params.id;
        this.productAttr.type = this.$route.params.type;
        this.quickAddProductData.name = this.productAttr.type + ':' + this.productAttr.id
    }
}
</script>

<style lang="sass" scoped>
.product-detail-page
    padding: 0 2rem
    .product-attribute
        // display: flex
        // align-items: center
        // justify-content: space-between
    .img-block
        width: 70vw
        margin: 2rem auto 0 auto 
        // flex: 1
        img
            width: 100%
            height: 100%
    .spec-block
        margin-top: 2rem
</style>