<template>
    <div class="default-order-list order-list default-white-bgc default-border-radius">
        <div class="order-header">
            <div class="default-text-color default-header-name">訂單</div>
            <div class="default-light-green-color" @click="toCategoryPage">再去逛逛</div>
        </div>
        <div class="default-list-content-block">
            <div class="list-item" v-for='(item, index) in orderListData' :key="index">
                <div class="fx list-no-note-block">
                    <div class="default-name-block name-block">
                        <div class="default-text-color">{{item.name}}</div>
                    </div>
                    <div class="default-number-edit-block number-edit-block">
                        <div @click="editNumber(index, -1)">
                            <img src="/images/minus.png" alt="add icon" class="default-operate-icon">
                        </div>
                        <div class="default-order-number default-deep-green-color">{{item.order_number}}</div>
                        <div @click="editNumber(index, 1)">
                            <img src="/images/add.png" alt="add icon" class="default-operate-icon">
                        </div>
                    </div>
                    <div class="default-text-color price-block default-price-block">${{item.price}}</div>
                </div>
                <div class="default-gray-color item-note-block">{{item.note}}</div>
            </div>
            <div class="add-order-note-block">
                <div class="note-text default-note-text default-text-color">訂單備註</div>
                <div class="default-order-note-input-block">
                    <input type="text" placeholder="請輸入訂單備註" class="default-order-note-input order-note-input default-text-color">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrderList',
        data(){
            return {
                orderListData: [
                    {
                        name: '蛋塔',
                        order_number: 2,
                        price: 200,
                        note: 'nothing'
                    },
                    {
                        name: '葡萄',
                        order_number: 1,
                        price: 500,
                        note: 'ajfdlakdfj'
                    },
                    {
                        name: '果醬',
                        order_number: 3,
                        price: 1200,
                        note: 'jammmmmm蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔'
                    },
                    {
                        name: '蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔蛋塔',
                        order_number: 2,
                        price: 200,
                        note: 'nothingnothingnothing'
                    },
                ]
            }
        },
        methods: {
            editNumber(index, value){
                this.orderListData[index].order_number = this.orderListData[index].order_number + value
                this.orderListData[index].order_number < 0 ? this.orderListData[index].order_number = 0 : ''
            },
            toCategoryPage(){
                this.$router.push('./home_page')
            }
        }
    }
</script>

<style lang="sass" scoped>
.order-list
    padding: 1rem
    background-color: #fff
    // padding: 0 3rem
    // margin-top: 2rem
    .fx
        display: flex
    .between
        justify-content: space-between
    .list-item
        margin-top: 1.5rem
        align-items: baseline
    .list-no-note-block
        width: 100%
    .item-note-block
        margin-top: .2rem
    .order-header
        font-weight: 800
        display: flex
        justify-content: space-between
        align-items: center
    .number-edit-block
        display: flex
        align-items: center
        justify-content: space-between
        border-radius: 5px
        margin-left: 1rem
        padding: .2rem .5rem
        img
            &:active   
              background-color: lightcoral

    .name-block, .number-edit-block
        flex: 1
    .price-block
        width: 3rem
        text-align: right
        margin-left: 2rem
    .total-price-block
        display: flex
        align-items: center
        justify-content: space-between
    .add-order-note-block
        margin-top: 1rem
        padding-top: 1rem
        // border-top: solid 1px pink
    .note-text
        margin-bottom: .5rem
    .order-note-input
        border: none
        padding: 1rem 
        outline: none
        letter-spacing: 1px
    // .item-basic-data
    //     display: flex
    //     align-items: baseline
    // .shop-btn
    //     padding: .5rem 1.2rem
    //     border-radius: 5px
    //     display: flex
    //     align-items: center
</style>