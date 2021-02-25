<template>
    <div class="default-product-detail-page product-detail-page">
        <div class="product-attribute">
            <div class="img-block" v-touch:swipe.left="changeCurrentImage(1)" v-touch:swipe.right="changeCurrentImage(-1)">
                <!-- <div class="change-image-icon left" @click="changeCurrentImage(-1)">
                    <img src="/images/left-arrow.png" alt="" class="left-arrow-icon">
                </div> -->
                <!-- <transition-group name="fade" tag="div" style="width: 100%; height: 100%; display: flex;justify-content: center; overflow: hidden"> -->

                    <!-- <div > -->
                        <img v-show='imageIndex === currentShowsImgIndex ' v-for='(image, imageIndex) in productImgs' :key="imageIndex" :src="image" alt="photos">
                    <!-- </div> -->
                <!-- </transition-group> -->
                <!-- <img :src="productImgs[currentShowsImgIndex]" alt="product image"> -->
                <!-- <div class="change-image-icon right" @click="changeCurrentImage(1)">
                    <img src="/images/left-arrow.png" alt="" class="left-arrow-icon">
                </div> -->
                <div class='img-dots-block'>
                    <div 
                        v-for="(item, index) in productImgs" 
                        :key="index" 
                        class='dots'
                        :class="{'selected-img-dot': index === currentShowsImgIndex }"
                        @click="toggleCurrentShowsImg(index)"
                    ></div>
                </div>
            </div>
            <div class="product-attribute-block">
                <div class="name">EQUILÍBRIO 尊爵 機能天然糧</div>
                <div class="price-block">
                    <div class="normal-price">NT$4500</div>
                    <div class="special-price">NT$2380</div>
                </div>
                <!-- <product-spec :product_data='productData'/> -->
            </div>
        </div>
        <div class="detail-info-block">
            <detail-nav-row @toggle-product-info='toggleProductInfo'/>
            <div class="default-more-content-block more-content-block">
                <product-description v-show="showProductInfo === 'description'"/>
                <product-fulfillment v-show="showProductInfo === 'fulfillment'"/>
                <product-review v-show="showProductInfo === 'review'"/>
            </div>
        </div>
        <product-recommand-block/>
    </div>
</template>

<script>
// import ProductSpec from '@/components/pages/ProductListPage/ProductSpec'
import DetailNavRow from './DetailNavRow'
import ProductDescription from './ProductDescription'
import ProductFulfillment from './ProductFulfillment'
import ProductReview from './ProductReview'
import ProductRecommandBlock from './ProductRecommandBlock'

export default {
    name: 'ProductDetailPage',
    components: {
        // ProductSpec,
        DetailNavRow,
        ProductDescription,
        ProductFulfillment,
        ProductReview,
        ProductRecommandBlock,
    },
    data(){
        return {
            productAttr: {
                id: '',
                type: ''
            },
            productImgs: ['/images/p1.jpg', '/images/test_size.png'],
            currentShowsImgIndex: 0,
            // productData: {
            //     name: 'Qucik Product Name',
            //     spec: {
            //         spec_name: 'Color',
            //         spec_options: [
            //             {
            //                 spec: '桃粉色',
            //                 selected: false,
            //                 price: 100
            //             },
            //             {
            //                 spec: '淺灰色',
            //                 selected: false,
            //                 price: 1002
            //             },
            //             {
            //                 spec: '淺綠色',
            //                 selected: false,
            //                 price: 1004
            //             },
            //             {
            //                 spec: '黑色',
            //                 selected: false,
            //                 price: 1008
            //             },
            //             {
            //                 spec: '灰色',
            //                 selected: false,
            //                 price: 500
            //             },
            //             {
            //                 spec: '亞痲色',
            //                 selected: false,
            //                 price: 9900
            //             },
            //         ]
            //     }
            // },
            showProductInfo: 'description'
        }
    },
    mounted(){
        this.productAttr.id = this.$route.params.id;
        this.productAttr.type = this.$route.params.type;
        // this.productData.name = this.productAttr.type + ':' + this.productAttr.id;
        this.showProductInfo = 'description'
    },
    methods: {
        toggleProductInfo(value){
            this.showProductInfo = value
        },
        toggleCurrentShowsImg(index){
            this.currentShowsImgIndex = index
        },
        changeCurrentImage(value){
            return () => {
                this.currentShowsImgIndex = this.currentShowsImgIndex + value;
                if(this.currentShowsImgIndex < 0){
                    this.currentShowsImgIndex = this.productImgs.length - 1
                    return
                }
                if(this.currentShowsImgIndex >= this.productImgs.length ){
                    this.currentShowsImgIndex = 0
                }
            }
        },
        test(){
            alert("x")
        }
    }
}
</script>

<style lang="sass" scoped>
.product-detail-page
    padding: .5rem
    background-color: #e5ceae
    .product-attribute
        background-color: #fff
        // padding: 1.5rem
        // border-radius: 5px
        margin-top: .5rem
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
    .img-block
        // width: 95%
        width: 31rem
        height: 25rem
        overflow: hidden
        margin: .5rem auto 0 auto 
        position: relative
        display: flex
        justify-content: center
        img
            // width: 100%
            height: 100%
    .change-image-icon
        position: absolute
        width: 3rem
        height: 100%
        background-color: #fff
        opacity: .5
        top: 0
        img
            width: 3rem
            height: 3rem
            top: 50%
            position: absolute
            transform: translateY(-50%)
            opacity: .5
    .change-image-icon.left
        left: 0
    .change-image-icon.right
        right: 0
        transform: rotate(180deg)
    .product-attribute-block
        padding: 1rem 1.5rem
    .name
        font-size: 1.4rem
        font-weight: 500
        color: #333333
        font-family: 'roboto'
    // .spec-block
    //     // margin-top: 1rem
    //     padding: 1rem
    .more-content-block
        // background-color: #fff
        padding: 2rem
        // border-radius: 0 0 5px 5px
    .img-dots-block
        position: absolute
        bottom: .5rem
        left: 50%
        transform: translateX(-50%)
        display: grid
        grid-template-columns: .5rem .5rem .5rem
        gap: .4rem
    .dots
        width: .5rem
        height: .5rem
        border-radius: .25rem
        background-color: #454545
    .selected-img-dot
        opacity: 0.4
        // display: flex
        // align-items: center
        // justify-content: center
        // margin-top: 1rem
    // .dots
    //     width: .5rem
    //     height: .5rem
    //     // background-color: rgba(0,0,0, .1)
    //     border-radius: 50%
    //     margin: 0 .5rem
    // .origin-dot-color
    //     background-color: rgba(0,0,0,.1)
    .price-block
        font-family: 'roboto'
        font-size: 1.4rem
    .normal-price
        text-decoration: line-through
        color: #333333
        margin-top: 1rem
    .special-price
        font-size: 1.6rem
        color: #f94956
        margin-top: .4rem
    .detail-info-block
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
        margin-top: .5rem
        background-color: #fff
// .fade-leave 
//   opacity: 1

// .fade-leave-active 
//   transition: opacity .5s

// .fade-leave-to 
// //   opacity: 0

// .fade-enter 
//   opacity: 0

// .fade-enter-active 
//   transition: opacity .5s

// .fade-enter-to 
//   opacity: 1
</style>