<template>
    <div class="product-basic-spec">
        <div class="all-spec-block">
            <img src="/images/icons/del.png" alt="關閉按鈕" class="close-icon" @click="closeAllSpecModal">
            <div class="product-attribute-block">
                <img src="/images/p1.jpg" alt="商品圖片" class="product-image">
                <div>
                    <div class="product-name">EQUILÍBRIO 尊爵 機能天然糧EQUILÍBRIO 尊爵 機能天然糧 EQUILÍBRIO 尊爵 機能天然糧EQUILÍBRIO 尊爵 機能天然糧</div>
                    <div class="price origin-price" :class="{'origin-price-remove' : productData.special_price === ''}">NT$4,500</div>
                    <div class="price special-price">NT$2380</div>
                </div>
            </div>
            <div class="product-spec-block">
                <div class="spec-text">規格</div>
                <div class="spec-options-block">
                    <div class="spec-option">2kg</div>
                    <div class="spec-option">4kg</div>
                    <div class="spec-option">6kg</div>
                    <div class="spec-option">2kg</div>
                    <div class="spec-option">4kg</div>
                    <div class="spec-option">6kg</div>
                    <div class="spec-option">2kg</div>
                    <div class="spec-option">4kg</div>
                    <div class="spec-option">6kg</div>
                </div>
            </div>
            <div class="number-block">
                <div>數量</div>
                <div class="select-number-block"></div>
            </div>
            <div class="confirm-btn">確認</div>
        </div>
    </div>
</template>

<script>
    import * as types from '../../store/mutation-types'
    import store from '../../store'
    export default {
        name: 'ProductBasicSpec',
        data(){
            return {
                productData: {
                    special_price: ''
                }
            }
        },
        computed: {
            getShowProductAllSpecModalStatus(){
                return store.state.SHOW_PRODUCT_ALL_SPEC_MODAL
            }
        },
        methods: {
            closeAllSpecModal(){
                store.commit(types.SHOW_PRODUCT_ALL_SPEC_MODAL, false)
            }
        }
    }
</script>

<style lang="sass" scoped>
.product-basic-spec
    position: fixed
    width: 100vw
    height: 100vh
    background-color: rgba(0, 0, 0, .8)
    z-index: 30
    top: 0
    left: 0
    .all-spec-block
        color: #333333
        width: 32rem
        // height: 30.5rem
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4)
        background-color: #ffffff
        position: fixed
        bottom: 0
        z-index: 10
        padding: 1.5rem
        box-sizing: border-box
    .close-icon
        width: 2rem
        height: 2rem
        position: absolute
        right: 1.5rem
    .product-attribute-block
        display: flex;
        align-items: flex-start
        justify-content: space-between
    .product-image
        width: 8rem
        height: 8rem
    .product-name
        font-size: 1.4rem
        font-weight: 500
    .price
        font-family: MicrosoftSansSerif
    .origin-price
        font-size: 1.3rem
        margin-top: .7rem
    .origin-price-remove
        text-decoration: line-through
    .special-price
        font-size: 1.6rem
        color: #f94956
        margin-top: .4rem
    .product-spec-block
        margin-top: 3rem
    .spec-text
        font-size: 1.2rem
        font-weight: 500
    .spec-options-block
        display: flex
        flex-wrap: wrap
    .spec-option
        padding: .3rem 1rem
        border-radius: .4rem
        background-color: #f7f0e6
        margin: .8rem .8rem 0 0
    .number-block
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: 2.7rem
    .select-number-block
        width: 12rem
        height: 2.4rem
        border-radius: .4rem
        background-color: #f7f0e6
    .confirm-btn
        border-radius: .5rem
        background-color: #333333
        margin-top: 2.5rem
        font-size: 15px;
        font-weight: 500
        text-align: center
        color: #5c5c5c
        padding: 1rem 0
</style>