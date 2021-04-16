<template>
  <div class="product-list page-main-content">
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
export default {
  name: "ProductList",
  props: {
    filterSelectValue: String
  },
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
  watch: {
    filterSelectValue: {
      handler() {
        this.getProductsList();
      }
    }
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
        subType: this.$route.query.subType,
        sort: this.filterSelectValue
      };
      this.$store.dispatch("toggleLoading", true);
      this.$api.getProductsList(params).then(res => {
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
        // price: 1300,
        // origin_price: 4200,
        type: query.type,
        id: data.id,
        max_origin_price: data.max_origin_price,
        max_price: data.max_price,
        min_origin_price: data.min_origin_price,
        min_price: data.min_price
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
