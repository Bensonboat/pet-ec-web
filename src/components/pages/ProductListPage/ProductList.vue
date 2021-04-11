<template>
  <div class="product-list">
    <div v-if="productListData.length === 0" class="no-data">查無商品</div>
    <product-basic-data
      v-else
      v-for="(item, index) in productListData"
      :key="index"
      :product_data="item"
      :showQuickAddIcon="true"
      :showMultiplePics="true"
      class="product-basic-data click-animation-small"
      @show-quick-add-modal="toggleQuickAddModal"
    />
  </div>
</template>

<script>
import ProductBasicData from "../../layouts/ProductBasicData";
import API from "@/axios/api";
export default {
  name: "ProductList",
  components: {
    ProductBasicData
  },
  data() {
    return {
      productListData: [
        {
          img: ["/images/p1.jpg", "/images/test2.png"],
          // img: "/images/p1.jpg",
          name: "EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg",
          price: 2000,
          special_price: 1200,
          id: 1,
          type: "零食 零食 零食 零食 零食"
        },
        {
          // img: "/images/p1.jpg",
          img: ["/images/test2.png", "/images/p2.jpg"],
          name: "理想體態成貓F32 10KG EQUILÍBRIO",
          price: 1000,
          id: 2,
          type: "飼料"
        },
        {
          // img: "/images/size_test.png",
          img: ["/images/p4.jpg", "/images/p3.jpeg"],
          name: "商品從下列價格起網路價$XX詳 ★SEEDS惜時★健康機能特級金貓罐80g*",
          price: 2000,
          special_price: 600,
          id: 3,
          type: "玩具"
        },
        {
          // img: "/images/p1.jpg",
          img: ["/images/p3.jpeg", "/images/p4.jpg"],
          name: "機能天然糧-化毛貓15kg",
          price: 1000,
          special_price: 300,
          id: 4,
          type: "玩具"
        },
        {
          // img: "/images/test_size.png",
          img: ["/images/p5.jpg", "/images/test2.png"],
          name: "【IQ Cat】聰明乾貓糧 - 海鮮口味成貓配方",
          price: 1000,
          id: 4,
          type: "零食"
        },
        {
          // img: "/images/p1.jpg",
          img: ["/images/p1.jpg", "/images/test2.png"],
          name:
            "EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg",
          price: 1300,
          id: 5,
          type: "玩具"
        },
        {
          img: ["/images/p1.jpg", "/images/test2.png"],
          // img: "/images/p1.jpg",
          name: "EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg",
          price: 2000,
          special_price: 1200,
          id: 1,
          type: "零食 零食 零食 零食 零食"
        },
        {
          // img: "/images/p1.jpg",
          img: ["/images/test2.png", "/images/p2.jpg"],
          name: "【摩多比】GENNIS吉妮斯 特級幼/母貓配方 貓飼料1.2KG(雞肉口味)",
          price: 1000,
          id: 2,
          type: "飼料"
        },
        {
          // img: "/images/size_test.png",
          img: ["/images/p4.jpg", "/images/p3.jpeg"],
          name: "【IQ Dog】聰明乾狗糧 - 雞肉口味",
          price: 2000,
          special_price: 600,
          id: 3,
          type: "玩具"
        },
        {
          // img: "/images/p1.jpg",
          img: ["/images/p3.jpeg", "/images/p4.jpg"],
          name: "機能天然糧-化毛貓15kg",
          price: 1000,
          special_price: 300,
          id: 4,
          type: "玩具"
        },
        {
          // img: "/images/test_size.png",
          img: ["/images/p5.jpg", "/images/test2.png"],
          name: "【摩多比】GENNIS吉妮斯 特級幼/母貓配方 貓飼料1.2KG(雞肉口味)",
          price: 1000,
          id: 4,
          type: "零食"
        },
        {
          // img: "/images/p1.jpg",
          img: ["/images/p1.jpg", "/images/test2.png"],
          name:
            "EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg EQUILÍBRIO 尊爵 機能天然糧-化毛貓15kg",
          price: 1300,
          id: 5,
          type: "玩具"
        }
      ]
    };
  },
  mounted() {
    this.getProductsList();
  },
  methods: {
    toggleQuickAddModal() {
      this.showQuickAddModal = !this.showQuickAddModal;
    },
    getProductsList() {
      let params = {
        type: this.$route.query.type,
        subType: this.$route.query.subType
      };
      this.$store.dispatch("toggleLoading", true);
      API.getProductsList(params).then(res => {
        this.$store.dispatch("toggleLoading", false);
        let product_data = res.data.data.rows;
        if (product_data.length === 0) {
          this.productListData = [];
          return;
        }

        this.productListData = product_data.map(item => {
          item = this.productDataParser(item);
          return item;
        });
      });
    },
    productDataParser(data) {
      let query = this.$route.query;
      return {
        images: data.images,
        name: data.title,
        price: 1300,
        origin_price: 4200,
        type: query.type,
        id: data.id
      };
    }
  }
};
</script>

<style lang="sass" scoped>
.product-list
  display: flex
  flex-wrap: wrap
  justify-content: space-evenly
  align-content: stretch
  background-color: #fff
  padding-bottom: 5rem
  background-color: #e5ceae
  .product-basic-data
    align-self: center
    justify-self: center
  .no-data
    font-size: 1.4rem
    color: #333333
    margin-top: 5rem
</style>
