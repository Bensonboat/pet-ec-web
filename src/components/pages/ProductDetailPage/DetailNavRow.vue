<!-- 商品介紹導覽列-->
<template>
  <div class="default-detail-nav-row detail-nav-row default-shadow">
    <div
      v-for="(item, index) in navData"
      :key="index"
      class="default-nav-route nav-route default-text-color"
      :class="[item.selected ? 'selected-route' : '']"
      @click="toggleNavRoute(index)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailNavRow",
  data() {
    return {
      navData: [
        {
          name: "商品介紹",
          selected: true,
          value: "description"
        },
        {
          name: "送貨及付款",
          selected: false,
          value: "fulfillment"
        }
        // {
        //   name: "顧客評價",
        //   selected: false,
        //   value: "review"
        // }
      ]
    };
  },
  methods: {
    toggleNavRoute(index) {
      this.navData = this.navData.map(item => {
        item.selected = false;
        return item;
      });
      this.navData[index].selected = true;
      this.$emit("toggle-product-info", this.navData[index].value);
    }
  }
};
</script>

<style lang="sass" scoped>
.detail-nav-row
    display: flex
    align-items: center
    justify-content: space-around
    padding: 1rem 1rem 0 1rem
    .nav-route
        width: 9rem
        height: 2.8rem
        border-radius: 1.4rem
        border: solid .1rem #333333
        background-color: #e5ceae
        font-size: 1.2rem
        font-weight: 500
        color: #333333
        display: flex
        align-items: center
        justify-content: center
    .selected-route
        background-color: #e3a652
</style>
