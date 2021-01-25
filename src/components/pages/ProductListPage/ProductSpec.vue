<template>
    <div class="default-product-spec product-spec">
        <img src="/images/modal-close-icon.png" alt="" class="modal-close-icon" @click="closeModal">
        <div class="default-product-name-block default-text-color">{{innerProductData.name}}</div>
        <div class="default-product-spec-name-block default-gray-color product-spec-name-block">{{innerProductData.spec.spec_name}}</div>
        <div class="spec-option-block">
            <div 
                v-for="(item, index) in innerProductData.spec.spec_options" 
                :key='index'
                class='spec-option default-spec-option default-text-color default-shadow'
                :class="[item.selected ? 'spec-selected default-deep-green-color' : '']"
                @click="toggleSelectStatus(index)"
            >
                {{item.spec}}
            </div>
        </div>
        <div v-if="selectItemPrice !== ''" class="default-text-color default-price-block">價格:  ${{selectItemPrice}}</div>
        <div class="add-to-cart-block">
            <div class="default-gray-color default-product-number-text">數量</div>
            <div class="operate-block">
                <div class="default-number-block number-block default-shadow">
                    <div class="edit-number-icon-block" @click="editNumber(-1)">
                        <img src="/images/minus.png" alt="add icon" class="default-operate-icon">
                    </div>
                    <div class="default-text-color default-number">{{number}}</div>
                    <div class="edit-number-icon-block" @click="editNumber(1)">
                        <img src="/images/add.png" alt="minus icon" class="default-operate-icon">
                    </div>
                </div>
                <div class="confirm-block default-deep-green-bgc default-confirm-block default-shadow" @click="addToCart">加入</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductSpec',
        props: {
            product_data: Object
        },
        data(){
            return {
                innerProductData: this.product_data,
                number: 0,
                selectItemPrice: ''
            }
        },  
        methods: {
            toggleSelectStatus(index){
                this.innerProductData.spec.spec_options = this.innerProductData.spec.spec_options.map(item => {
                    item.selected = false;
                    return item
                })
                this.innerProductData.spec.spec_options[index].selected = !this.innerProductData.spec.spec_options[index].selected

                if(this.innerProductData.spec.spec_options[index].selected){
                    this.selectItemPrice = this.innerProductData.spec.spec_options[index].price
                }
            },
            closeModal(){
                this.$emit('close-modal')
            },
            editNumber(val){
                this.number = this.number + val
                this.number < 0 ? this.number = 0 : ''
            },
            addToCart(){
                alert('已加入購物車')
            }
        }
    }
</script>

<style lang="sass" scoped>
.product-spec
    width: 100%
    // heigh: 100%
    z-index: 5
    // padding: 2rem
    box-sizing: border-box
    border-radius: 10px
    .modal-close-icon
        width: 2.5rem
        height: 2.5rem
        position: absolute
        top: -4rem
        right: 0
    .product-spec-name-block
        margin-top: 1.2rem
    .spec-option-block
        display: flex
        margin-top: 1rem
        flex-wrap: wrap
    .spec-option
        height: 3.5rem
        margin-right: 15px
        letter-spacing: 1px
        margin-bottom: 1rem
        display: flex
        align-items: center
        justify-content: center
        box-sizing: border-box
        transition: .2s
        cursor: pointer
    .spec-selected
        border-color: #7A918D
        border-bottom: solid 5px 
    .add-to-cart-block
        margin-top: 1rem
    .operate-block
        display: flex
        align-items: center
        margin-top: 1rem
    .number-block
        display: flex
        justify-content: space-between
        flex: 3
        align-items: center
        user-select: none
        border-radius: 5px
    .edit-number-icon-block
        display: flex
        align-items: center
        cursor: pointer
    .confirm-block
        flex: 1
        text-align: center
        border-radius: 5px
        display: flex
        align-items: center
        justify-content: center
        box-sizing: border-box
        margin-left: 1.5rem
        user-select: none
        letter-spacing: 2px
        cursor: pointer
</style>