<!-- 商品介紹 -->
<template>
  <div class="default-product-description product-description">
    <div v-if="product.intros && product.intros.length === 0">
      No Introduction yet
    </div>
    <div
      v-else
      v-for="(item, index) in product.intros"
      :key="index"
      class="description-set"
    >
      <img :src="item.src" alt="" class="description-img" />
      <div class="description-text">{{ item.alt }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDescription",
  props: ["product"],
  data() {
    return {
      // intros: null
      // descriptionData: [
      //   {
      //     img: "/images/p2.jpg",
      //     description: ""
      //   },
      //   {
      //     img: "/images/p1.jpg",
      //     description:
      //       "不添加人工防腐劑人工色素人工香料，含七種活性益生菌飼料提供給寵物毛孩家人消化的支持和均衡的營養"
      //   },
      //   {
      //     img: "/images/p5.jpg",
      //     description:
      //       "鴨肉粉，鷹嘴豆，豌豆，扁豆，雞脂肪（添加綜合維生素E保存），乾燥的甜菜根糖漿，亞麻籽，南瓜，蔓越莓，蘋果，乾燥啤酒酵母，木瓜，藍莓，石榴，菊糖，乾海藻，維生素(A、B1、B2、B3、B5、B6、B7、B12、C、D3、E)，葡萄糖胺，葉酸，肉桂粉，茴香粉，薄荷粉，絲蘭萃取物，迷迭香萃取物，綠茶萃取物，綠薄荷萃取物"
      //   },
      //   {
      //     img: "/images/test_size.png",
      //     description:
      //       "經濟聰明的好選擇：1. 嚴格安全的生產流程2. 符合安全標準所製成的高品質原料3. 提供均衡的維生素和礦物質4. 絕佳的美味口感"
      //   },
      //   {
      //     img: "/images/p3.jpeg",
      //     description: ""
      //   },
      //   {
      //     img: "/images/p4.jpg",
      //     description: ""
      //   }
      // ]
    };
  }
  // computed: {
  //   productData() {
  //     return this.$store.getters.getDetailProductData;
  //   }
  // },
  // watch: {
  //   productData(data) {
  //     this.intros = data;
  //   }
  // }
};
</script>

<style lang="sass" scoped>
.product-description
    .description-set
        margin-top: 1rem
    .description-img
        width: 100%
        height: 100%
    .description-text
        letter-spacing: 1px
        line-height: 2rem
        font-size: 1.4rem
        color: #333333
</style>
