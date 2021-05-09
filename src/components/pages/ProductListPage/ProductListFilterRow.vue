<template>
  <div class="product-list-filter-row default-product-list-filter-row">
    <div class="list-subject">
      <span v-if="this.$route.query.subType === '-1'">
        我的收藏
      </span>
      <span v-else>
        {{ this.$route.query.type | transTxt }} /
        {{ this.$route.query.category }}
      </span>
    </div>
    <div class="basic-order-filter">
      <base-select
        style="width: 11rem; height: 2.8rem"
        v-model="select"
        :selectData="selectData"
      />
    </div>
  </div>
</template>

<script>
import BaseSelect from "@/components/layouts/BaseSelect";

export default {
  name: "ProductListFilterRow",
  components: {
    BaseSelect
  },
  filters: {
    transTxt(txt) {
      let result;
      txt === "cat" ? (result = "喵喵") : (result = "狗狗");

      return result;
    }
  },
  data() {
    return {
      select: "",
      selectData: {
        currentSelectText: "",
        options: [
          {
            name: "最新上架商品",
            value: "new"
          },
          {
            name: "熱門銷量商品",
            value: "信用卡"
          },
          {
            name: "價格由低到高",
            value: "min"
          },
          {
            name: "價格由高到低",
            value: "max"
          }
        ]
      }
    };
  },
  watch: {
    select(value) {
      this.$emit("filter-select", value);
    }
  },
  mounted() {
    // 預設搜尋最新上架商品
    this.selectData.currentSelectText = "最新上架商品";
    this.select = "new";
  }
};
</script>

<style lang="sass" scoped>
.product-list-filter-row
    display: flex
    justify-content: space-between
    align-items: center
    padding: 1.3rem 1rem 1.3rem 1.5rem
    height: 4.4rem
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
    background-color: #efe1ce
    box-sizing: border-box
    position: relative
    z-index: 1
    .list-subject
        font-size: 1.2rem
        font-weight: 500
        color: #333333
</style>
