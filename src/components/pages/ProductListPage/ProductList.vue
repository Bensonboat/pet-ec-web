<template>
    <div class="product-list">
        <product-basic-data
            v-for="(item, index) in productListData"
            :key="index"
            :product_data="item"
            :showQuickAddIcon="true"
            :showMultiplePics='true'
            class="product-basic-data click-animation-small"
            @show-quick-add-modal="toggleQuickAddModal"
        />
        <div v-if="showQuickAddModal">
            <div class="modal-mask"></div>
            <!-- <product-spec
                class="quick-add-block"
                :product_data="quickAddProductData"
                @close-modal="toggleQuickAddModal"
            /> -->
        </div>
    </div>
</template>

<script>
import ProductBasicData from '../../layouts/ProductBasicData';
// import ProductSpec from "./ProductSpec";

export default {
    name: "ProductList",
    components: {
        ProductBasicData,
        // ProductSpec,
    },
    data() {
        return {
            showQuickAddModal: false,
            productListData: [
                {
                    img: ['/images/p1.jpg', '/images/test2.png'],
                    // img: "/images/p1.jpg",
                    name: "EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg",
                    price: 2000,
                    special_price: 1200,
                    id: 1,
                    type: "零食 零食 零食 零食 零食",
                },
                {
                    // img: "/images/p1.jpg",
                    img: ['/images/test2.png', '/images/p2.jpg'],
                    name: "理想體態成貓F32 10KG EQUILÍBRIO",
                    price: 1000,
                    id: 2,
                    type: "飼料",
                },
                {
                    // img: "/images/size_test.png",
                    img: ['/images/p4.jpg', '/images/p3.jpeg'],
                    name: "商品從下列價格起網路價$XX詳 ★SEEDS惜時★健康機能特級金貓罐80g*",
                    price: 2000,
                    special_price: 600,
                    id: 3,
                    type: "玩具",
                },
                {
                    // img: "/images/p1.jpg",
                    img: ['/images/p3.jpeg', '/images/p4.jpg'],
                    name: "機能天然糧-化毛貓15kg",
                    price: 1000,
                    special_price: 300,
                    id: 4,
                    type: "玩具",
                },
                {
                    // img: "/images/test_size.png",
                    img: ['/images/p5.jpg', '/images/test2.png'],
                    name: "【IQ Cat】聰明乾貓糧 - 海鮮口味成貓配方",
                    price: 1000,
                    id: 4,
                    type: "零食",
                },
                {
                    // img: "/images/p1.jpg",
                    img: ['/images/p1.jpg', '/images/test2.png'],
                    name: "EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg",
                    price: 1300,
                    id: 5,
                    type: "玩具",
                },
                {
                    img: ['/images/p1.jpg', '/images/test2.png'],
                    // img: "/images/p1.jpg",
                    name: "EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg",
                    price: 2000,
                    special_price: 1200,
                    id: 1,
                    type: "零食 零食 零食 零食 零食",
                },
                {
                    // img: "/images/p1.jpg",
                    img: ['/images/test2.png', '/images/p2.jpg'],
                    name: "【摩多比】GENNIS吉妮斯 特級幼/母貓配方 貓飼料1.2KG(雞肉口味)",
                    price: 1000,
                    id: 2,
                    type: "飼料",
                },
                {
                    // img: "/images/size_test.png",
                    img: ['/images/p4.jpg', '/images/p3.jpeg'],
                    name: "【IQ Dog】聰明乾狗糧 - 雞肉口味",
                    price: 2000,
                    special_price: 600,
                    id: 3,
                    type: "玩具",
                },
                {
                    // img: "/images/p1.jpg",
                    img: ['/images/p3.jpeg', '/images/p4.jpg'],
                    name: "機能天然糧-化毛貓15kg",
                    price: 1000,
                    special_price: 300,
                    id: 4,
                    type: "玩具",
                },
                {
                    // img: "/images/test_size.png",
                    img: ['/images/p5.jpg', '/images/test2.png'],
                    name: "【摩多比】GENNIS吉妮斯 特級幼/母貓配方 貓飼料1.2KG(雞肉口味)",
                    price: 1000,
                    id: 4,
                    type: "零食",
                },
                {
                    // img: "/images/p1.jpg",
                    img: ['/images/p1.jpg', '/images/test2.png'],
                    name:
                        "EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg",
                    price: 1300,
                    id: 5,
                    type: "玩具",
                },
            ],
            quickAddProductData: {
                name: "Qucik Product Name",
                spec: {
                    spec_name: "Color",
                    spec_options: [
                        {
                            spec: "桃粉色",
                            selected: false,
                        },
                        {
                            spec: "淺灰色",
                            selected: false,
                        },
                        {
                            spec: "淺綠色",
                            selected: false,
                        },
                        {
                            spec: "黑色",
                            selected: false,
                        },
                    ],
                },
            },
        };
    },
    methods: {
        toggleQuickAddModal() {
            this.showQuickAddModal = !this.showQuickAddModal;
        },
    },
};
</script>

<style lang="sass" scoped>
.product-list
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    align-content: stretch
    // padding: 0 .5rem
    background-color: #fff
    // border-radius: 5px
    padding-bottom: 5rem
    background-color: #e5ceae
    // display: grid
    // grid-template-columns: 1fr 1fr
    // gap: .5rem
    // margin-top: -0.6rem
    .product-basic-data
        align-self: center
        justify-self: center
        // margin-top: 2rem
    // .quick-add-block
    //     background-color: white
    //     width: 80vw
    //     // height: 200px
    //     position: fixed
    //     top: 50%
    //     left: 50%
    //     transform: translate(-50%, -50%)
    //     padding: 2rem
</style>
