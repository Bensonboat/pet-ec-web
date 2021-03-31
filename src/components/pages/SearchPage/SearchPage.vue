<template>
  <div class="search-page">
    <search-input-block
      :currentClickKeyWord="currentClickKeyWord"
      @current-focus-status="focusStatus"
    />
    <div class="search-content-block" v-show="isInputFocus">
      <search-tip-block
        :modalData="recentlySearchData"
        @pass-key-word="getKeyWord"
      />
      <search-tip-block
        :modalData="popularSearchData"
        style="margin-top: 1rem"
        @pass-key-word="getKeyWord"
      />
    </div>
    <transition>
      <product-list v-show="!isInputFocus" />
    </transition>
  </div>
</template>

<script>
import SearchInputBlock from "./SearchInputBlock";
import SearchTipBlock from "./SearchTipBlock";
import ProductList from "@/components/pages/ProductListPage/ProductList";

export default {
  name: "SearchPage",
  components: {
    SearchInputBlock,
    SearchTipBlock,
    ProductList
  },
  data() {
    return {
      recentlySearchData: {
        title: "近期搜尋",
        icon: "/images/icons/time.svg",
        keyWords: ["狗飼料", "貓砂", "Royal", "外出用品"],
        isTag: false
      },
      popularSearchData: {
        title: "熱門搜尋",
        icon: "/images/icons/fire.svg",
        keyWords: [
          "皇家",
          "希爾斯",
          "化毛",
          "處方配方",
          "最新上架",
          "新款豆腐砂"
        ],
        isTag: true
      },
      currentClickKeyWord: "",
      isInputFocus: false
    };
  },
  methods: {
    getKeyWord(key_word) {
      this.currentClickKeyWord = key_word;
      this.isInputFocus = false;
    },
    focusStatus(status) {
      this.isInputFocus = status;
    }
  }
};
</script>

<style lang="sass" scoped>
.search-page
    overflow: scroll
    .search-content-block
        padding: 1rem
</style>
