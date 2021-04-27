<template>
  <div class="home-page">
    <div class="bg" :style="{ backgroundPosition: position }"></div>
    <div
      class="breed-type-circle cat-circle"
      :class="[circle.cat ? 'circle-selected' : '']"
      @click="circleSelect('cat')"
    >
      <!-- <div class="default-black-color cat-type txt" @click="routerSwitch('/product_list_page')">喵喵</div> -->
      <div class="default-black-color cat-type txt">喵喵</div>
      <img
        v-show="!circle.cat"
        src="images/icons/cat-gold.png"
        alt="貓咪圖案"
        class="cat-icon"
      />
      <img
        v-show="circle.cat"
        src="images/icons/cat-black.png"
        alt="貓咪圖案"
        class="cat-icon"
      />
      <div v-show="circle.cat" class="tick-block">
        <img src="images/icons/tick.svg" alt="打勾圖案" class="tick-icon" />
      </div>
    </div>

    <div
      class="breed-type-circle dog-circle"
      :class="[circle.dog ? 'circle-selected' : '']"
      @click="circleSelect('dog')"
    >
      <div class="default-black-color dog-type txt">汪汪</div>
      <img
        v-show="circle.dog"
        src="images/icons/dog-black.png"
        alt="狗狗圖案"
        class="dog-icon"
      />
      <img
        v-show="!circle.dog"
        src="images/icons/dog-gold.png"
        alt="狗狗圖案"
        class="dog-icon"
      />
      <div v-show="circle.dog" class="tick-block">
        <img src="images/icons/tick.svg" alt="打勾圖案" class="tick-icon" />
      </div>
    </div>
    <div
      class="breed-type-circle mix-circle"
      :class="[circle.mix ? 'circle-selected' : '']"
      @click="circleSelect('mix')"
    >
      <div class="default-black-color mix-type txt">汪喵</div>
      <img
        v-show="circle.mix"
        src="images/icons/mix-black.png"
        alt="貓狗圖案"
        class="mix-icon"
      />
      <img
        v-show="!circle.mix"
        src="images/icons/mix-gold.png"
        alt="貓狗圖案"
        class="mix-icon"
      />
      <div v-show="circle.mix" class="tick-block">
        <img src="images/icons/tick.svg" alt="打勾圖案" class="tick-icon" />
      </div>
    </div>
    <div
      class="confirm-btn"
      :class="[selected ? 'selected' : '']"
      @click="routerSwitch('/category_page')"
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
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      position: "",
      circle: {
        cat: false,
        dog: false,
        mix: false
      },
      selectType: "",
      selected: false
    };
  },
  mounted() {
    // let that = this;
    let x = 0;
    setInterval(() => {
      x--;
      this.position = `${x}px ${x}px`;

      if (x < -2000) {
        x = 0;
      }
    }, 20);
  },
  methods: {
    routerSwitch(value) {
      if (this.selectType === "") {
        return;
      }

      let path = value + "/" + this.selectType;
      this.$router.push(path);
    },
    circleSelect(type) {
      this.circle = {
        cat: false,
        dog: false,
        mix: false
      };

      this.selectType = type;
      this.circle[type] = true;
      this.selected = true;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../../sass/system_color'
.home-page
    position: relative
    .bg
        background-image: url('/images/icons/tiles.svg')
        background-repeat: repeat
        background-color: $color1
        background-size: 190px 190px
        width: 100%
        height: 100%
        position: fixed
        top: 0
        left: 0
        // z-index: -1
    // .breed-type-circle
    //     border-radius: 50%
    //     border: solid 4px #333333
    //     background-color: #f2c47e
    //     position: absolute
    //     display: flex
    //     align-items: center
    //     justify-content: center
    //     font-size: 3.5rem
    //     font-weight: bold
    //     letter-spacing: 3.5px
    //     box-sizing: border-box
    .breed-type-circle
        border-radius: 50%
        border: solid 4px
        border-color: #ccaa76
        background-color: #f2c47e
        position: absolute
        box-sizing: border-box
        width: 12rem
        height: 12rem
        .txt
            position: absolute
            font-size: 3rem
            font-weight: bold
            letter-spacing: 3px
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            text-align: center
            width: 100%
    .dog-circle
        right: 5.4rem
        top: 21.5rem
    .cat-circle
        left: 5rem
        top: 9rem
    .mix-circle
        top: 34rem
        left: 7.5rem
    // .cat-type
    //     width: 14rem
    //     height: 14rem
    //     left: 4rem
    //     top: 8.5rem
    .cat-icon
        width: 10.6rem
        height: 10.6rem
        position: absolute
        bottom: -.5rem
        left: -3.8rem
        // top: 12.1rem
        // left: 1.8rem
    // .dog-type
    //     width: 12rem
    //     height: 12rem
    //     right: 5.5rem
    //     top: 21.5rem
    .dog-icon
        bottom: -2.5rem
        right: -4rem
        position: absolute
        width: 6.8rem
        height: 6.8rem
    // .mix-type
    //     width: 12rem
    //     height: 12rem
    //     top: 34rem
    //     left: 7.5rem
    .mix-icon
        bottom: -1.5rem
        left: -5.7rem
        // top: 39rem
        // left: 2rem
        position: absolute
        width: 8.2rem
        height: 8.5rem
    .circle-selected
        transform: scale(1.1)
        // width: 14rem
        // height: 14rem
        border-color: #333333
    .confirm-btn
        width: 25rem
        height: 3.8rem
        border-radius: 5rem
        border: solid 2px #c99246
        background-color: #e3a652
        position: absolute
        bottom: 2rem
        left: 50%
        transform: translateX(-50%)
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
        color: #333333
        border-color: #333333
    .tick-icon
        width: 2rem
        height: 2rem
    .tick-block
        position: absolute
        width: 3.5rem
        height: 3.5rem
        background-color: #333333
        right: -1rem
        display: flex
        align-items: center
        justify-content: center
        border-radius: 50%
</style>
