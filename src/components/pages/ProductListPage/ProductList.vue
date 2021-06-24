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
      class="product-basic-data"
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
      productListData: []
    };
  },
  watch: {
    filterSelectValue: {
      handler() {
        this.getProductsList();
      }
    }
  },
  computed: {
    getCollectionsID() {
      return this.$store.getters.getCollectionsID;
    },
    getLoginStatus() {
      return this.$store.getters.getLoginStatus;
    }
  },
  mounted() {
    // this.$store.dispatch("getCollections");
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

      // 收藏 subType === -1
      if (params.subType === "-1") {
        this.getCollections();
      } else {
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
          console.log(this.productListData, "xx");
        });
      }
    },
    productDataParser(data) {
      let arr = this.getCollectionsID;

      // 看該項商品 id 是否存在我的最愛中
      let is_favorite;
      if (arr.length !== 0) {
        is_favorite = arr.some(item => item === data.id);
      }
      return {
        images: data.images,
        name: data.title,
        id: data.id,
        max_origin_price: data.max_origin_price,
        max_price: data.max_price,
        min_origin_price: data.min_origin_price,
        min_price: data.min_price,
        is_favorite
      };
    },
    getCollections() {
      if (!this.getLoginStatus) {
        return;
      }

      this.$api.getCollections().then(res => {
        let product_data = res.data.data;
        this.productListData = product_data.map(item => {
          item = this.productDataParser(item);
          return item;
        });
        this.$store.dispatch("toggleLoading", false);
      });
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
