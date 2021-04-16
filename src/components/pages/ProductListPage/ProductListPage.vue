<template>
  <div class="product-list-page">
    <product-list-filter-row @filter-select="filterSelect" />
    <product-list :filterSelectValue="filterSelectValue" />
  </div>
</template>

<script>
import ProductListFilterRow from "./ProductListFilterRow";
import ProductList from "./ProductList.vue";

export default {
  name: "ProductListPage",
  components: {
    ProductList,
    ProductListFilterRow
  },
  data() {
    return {
      filterSelectValue: ""
    };
  },
  methods: {
    filterSelect(value) {
      this.filterSelectValue = value;
    }
  }
};
</script>

<style lang="sass" scoped>
.product-list-page
</style>
