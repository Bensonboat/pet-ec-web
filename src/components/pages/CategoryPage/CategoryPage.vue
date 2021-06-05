<template>
  <div class="category-page">
    <div class="bg" :style="{ backgroundPosition: position }"></div>
    <div class="page-main-content">
      <div class="type-select-block">
        <div
          class="type-select-circle"
          :class="{ selected: showCat }"
          @click="toggle('cat')"
        >
          <img
            v-show="showCat"
            src="/images/icons/cat-black.png"
            alt="cat"
            class="type-icon"
          />
          <img
            v-show="!showCat"
            class="type-icon"
            src="/images/icons/cat-gold.png"
            alt="cat"
          />
          <div class="type-text" :class="{ 'selected-text': showCat }">
            喵喵
          </div>
          <div class="type-tick-block" v-show="showCat">
            <img
              src="/images/icons/tick.svg"
              alt="打勾圖案"
              class="type-tick-icon"
            />
          </div>
        </div>
        <div
          class="type-select-circle"
          :class="{ selected: !showCat }"
          @click="toggle('dog')"
        >
          <img
            v-show="!showCat"
            src="/images/icons/dog-black.png"
            alt="dog"
            class="type-icon dog"
          />
          <img
            v-show="showCat"
            class="type-icon dog"
            src="/images/icons/dog-gold.png"
            alt="dog"
          />
          <div class="type-text" :class="{ 'selected-text': !showCat }">
            汪汪
          </div>
          <div class="type-tick-block" v-show="!showCat">
            <img
              src="/images/icons/tick.svg"
              alt="打勾圖案"
              class="type-tick-icon"
            />
          </div>
        </div>
      </div>
      <div class="category-options-block" v-show="showTypeCategories">
        <div
          class="category-option"
          v-for="(item, index) in typeCategories"
          :key="index"
          :class="{
            'option-seledted': item.selected,
            'is-collecing': item.collecting_status
          }"
          @click="toggleSelectOption(index)"
        >
          {{ item.name }}
          <div v-show="item.selected" class="category-tick-block">
            <img
              src="/images/icons/tick.svg"
              alt="打勾圖案"
              class="category-tick-icon"
            />
          </div>
        </div>
      </div>
      <div
        class="confirm-btn"
        :class="[selected ? 'selected' : '']"
        @click="routerSwitch"
      >
        <div>OK</div>
        <img
          v-show="selected"
          src="/images/icons/next.svg"
          alt="下一步圖案"
          class="next-step-icon"
        />
        <img
          v-show="!selected"
          src="/images/icons/next-unselect.svg"
          alt="下一步圖案"
          class="next-step-icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryPage",
  data() {
    return {
      position: "",
      showCat: true,
      allCategories: [], // 全部類別（包含貓狗）
      typeCategories: [], // filter 出當前選擇的
      showTypeCategories: false,
      selected: false,
      selectID: "",
      selectCategory: ""
    };
  },
  mounted() {
    this.bgAnimation();

    // 預設貓咪類別
    this.$router
      .replace({ path: "CategoryPage", query: { type: "cat" } })
      .catch(() => {});

    this.getAllCategories().then(() => {
      this.getCurrentTypeCategory();
    });
  },
  methods: {
    toggleSelectOption(index) {
      this.typeCategories = this.typeCategories.map((item, key) => {
        if (index !== key) {
          item.selected = false;
        } else {
          item.selected = !item.selected;
          if (item.selected) {
            this.selected = true;
            this.selectID = item.id;
            this.selectCategory = item.name;
          } else {
            this.selected = false;
            this.selectID = "";
          }
        }
        return item;
      });
    },
    routerSwitch() {
      if (this.selectID === "" || this.selected === false) {
        return;
      }

      this.$router.push({
        path: "/product_list_page",
        query: {
          type: this.$route.query.type,
          subType: this.selectID, // 類別 id
          category: this.selectCategory // For 列表頁麵包屑中文顯示
        }
      });
    },
    getAllCategories() {
      this.$store.dispatch("toggleLoading", true);
      return this.$api.getAllCategories().then(res => {
        this.allCategories = res.data.data.rows;
        this.$store.dispatch("toggleLoading", false);
      });
    },
    getCurrentTypeCategory() {
      let type;
      this.showCat ? (type = "cat") : (type = "dog");

      let data = this.allCategories.filter(item => item.type === type);
      this.typeCategories = data.map(item => {
        return {
          name: item.title,
          selected: false,
          id: item.id
        };
      });

      this.showTypeCategories = false;
      this.getCollections().then(value => {
        // 成功 response 代表有登入！有登入就顯示收藏類別
        let collect_obj = {
          name: "收藏",
          selected: false,
          id: -1
        };
        if (value) {
          this.typeCategories.push(collect_obj);
          collect_obj["collecting_status"] = true;
        }

        this.showTypeCategories = true;
      });
    },
    bgAnimation() {
      let x = 0;
      setInterval(() => {
        x--;
        this.position = `${x}px ${x}px`;

        if (x < -2000) {
          x = 0;
        }
      }, 20);
    },
    toggle(type) {
      if (
        (type === "cat" && this.showCat) ||
        (type !== "cat" && !this.showCat)
      ) {
        return;
      }

      type === "cat" ? (this.showCat = true) : (this.showCat = false);

      this.selected = false;
      this.selectID = "";

      if (this.showCat) {
        this.$router.replace({
          path: "/category_page",
          query: { type: "cat" }
        });
      } else {
        this.$router.replace({
          path: "/category_page",
          query: { type: "dog" }
        });
      }
      this.getCurrentTypeCategory();
    },
    getCollections() {
      let has_collections = false;
      return this.$api
        .getCollections()
        .then(res => {
          res.data.data.length !== 0 ? (has_collections = true) : "";
          return has_collections;
        })
        .catch(() => {
          return false;
        });
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../../sass/system_color'

.category-page
    position: relative
    -webkit-overflow-scrolling: touch
    .bg
        background-image: url('/images/icons/tiles.svg')
        background-repeat: repeat
        background-color: $color1
        background-size: 190px 190px
        width: 100%
        height: 100%
        position: fixed
        // position: absolute // 改為 absolute for not 100vw
        top: 0
        left: 0
        // z-index: -1
    .type-icon-block
        top: 8.5rem
        left: 50%
        transform: translateX(-50%)
        position: absolute
        display: flex
    .type-tick-icon
        width: 1.4rem
        height: 1.4rem
    .type-tick-block
        position: absolute
        width: 2.3rem
        height: 2.3rem
        background-color: $color2
        right: 0
        display: flex
        align-items: center
        justify-content: center
        border-radius: 50%
        right: 1rem
    .category-options-block
      // margin-top: 16rem
      padding: 0 4rem
      display: grid
      grid-template-columns: 1fr 1fr 1fr
      gap: 3rem
    .category-option
        width: 6rem
        height: 6rem
        // margin: 0 auto
        border-radius: 50%
        box-shadow: 0 0 .6rem 0 rgba(0, 0, 0, 0.12)
        border: solid .2rem #ccaa76
        background-color: $color3
        font-size: 1.8rem
        font-weight: 900
        // font-stretch: normal
        // font-style: normal
        // line-height: normal
        // letter-spacing: normal
        color: $color2
        display: flex
        align-items: center
        justify-content: center
        position: relative
        box-sizing: border-box
    .category-tick-block
        width: 2rem
        height: 2rem
        position: absolute
        background-color: $color2
        display: flex
        align-items: center
        justify-content: center
        border-radius: 50%
        right: 0
        top: -.5rem
    .category-tick-icon
        width: 1.2rem
        height: 1.2rem
    .option-seledted
        border-color: $color2
    .confirm-btn
        width: 25rem
        height: 3.8rem
        border-radius: 5rem
        border: solid .2rem #c99246
        background-color: $color4
        margin: 3rem auto 5rem auto
        position: relative
        font-size: 1.8rem
        font-weight: bold
        display: flex
        justify-content: center
        align-items: center
        color: #c99246
        font-family: 'roboto'
    .next-step-icon
        width: 1.4rem
        height: 1.4rem
        position: absolute
        right: 1.6rem
    .selected
        color: $color2
        border-color: $color2
    .type-select-block
      position: relative
      z-index: 1
      display: flex
      padding: 4rem 3rem
      justify-content: space-between
    .type-select-circle
      width: 11rem
      height: 11rem
      background-color: $color5
      border-radius: 50%
      border: solid .2rem $color6
      position: relative
      box-sizing: border-box
    .type-select-circle.selected
      border-color: $color2
    .type-icon
      position: absolute
      bottom: 4rem
      width: 8rem
      height: 8rem
      left: 50%
      transform: translateX(-50%)
    .type-icon.dog
      width: 9rem
      height: 7rem
    .type-text
      position: absolute
      bottom: 1rem
      left: 50%
      transform: translateX(-50%)
      font-size: 2rem
      font-weight: 500
      letter-spacing: .2rem
      color: $color6
    .type-text.selected-text
      color: $color2
    .is-collecing
      border-color: red
</style>
