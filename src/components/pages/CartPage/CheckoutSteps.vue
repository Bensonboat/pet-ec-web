<template>
  <div class="checkout-steps">
    <div class="process-title">訂單確認</div>
    <div class="process-line-block">
      <div class="circle full-circle"></div>
      <!-- <img src="/images/icons/tiles-1.svg" alt="" class="icon tile-1" />
      <img src="/images/icons/tiles-1.svg" alt="" class="icon tile-2" /> -->
      <!-- <img
        v-show="tiles.tile1"
        src="/images/icons/tiles-1.svg"
        alt=""
        class="icon"
        style="left: 20%"
      />
      <img
        v-show="tiles.tile2"
        src="/images/icons/tiles-1.svg"
        alt=""
        class="icon"
        style="left: 30%; bottom: .8rem; transform: rotate(120deg)"
      />
      <img
        v-show="tiles.tile3"
        src="/images/icons/tiles-1.svg"
        alt=""
        class="icon"
        style="left: 42%"
      />
      <img
        v-show="tiles.tile4"
        src="/images/icons/tiles-1.svg"
        alt=""
        class="icon"
        style="left: 55%; bottom: .8rem; transform: rotate(120deg) scale(1.2)"
      />
      <img
        v-show="tiles.tile5"
        src="/images/icons/tiles-1.svg"
        alt=""
        class="icon"
        style="left: 68%"
      /> -->
      <svg :width="svgWidth" height="1px">
        <line
          x1="0"
          y1="0"
          x2="300"
          y2="0"
          style="stroke: #333333;stroke-width: .3rem"
        />
      </svg>
      <div class="circle" :class="{ 'full-circle': step === 2 }"></div>
      <svg :width="svgWidth" height="1px">
        <line
          x1="0"
          y1="0"
          x2="300"
          y2="0"
          style="stroke: #333333;stroke-width: .3rem"
        />
      </svg>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutProcess",
  props: {
    step: Number
  },
  data() {
    return {
      svgWidth: "9rem"
      // tiles: {
      //   tile1: false,
      //   tile2: false,
      //   tile3: false,
      //   tile4: false,
      //   tile5: false
      // }
    };
  }
  // mounted() {
  //   let t = 1;
  //   setInterval(() => {
  //     if (t === 6) {
  //       Object.keys(this.tiles).map(item => {
  //         this.tiles[item] = false;
  //       });
  //       t = 0;
  //     }
  //     this.tiles[`tile${t}`] = true;
  //     t++;
  //   }, 400);
  // }
};
</script>

<style lang="sass" scoped>
.checkout-steps
    height: 4.4rem
    background-color: #efe1ce
    // padding: 1.3rem 2rem
    padding: 0 2rem
    align-items: center
    box-sizing: border-box
    color: #333333
    display: flex
    justify-content: space-between
    .process-title
        font-size: 1.2rem
        font-weight: 500
        // flex: 1
    .process-line-block
      display: flex
      align-items: center
      // flex: 2
      justify-content: space-between
      position: relative
      height: 100%
    .icon
      width: 1rem
      height: 1rem
      position: absolute
      transform: translateY(-50%) rotate(110deg)
    // .tile-1
    //   transform: rotate(120deg)
    //   animation: processing 3s infinite linear
    //   top: 1rem
    // .tile-2
    //   animation: processing-1 3s infinite linear
    //   transform: rotate(60deg) scaleX(-1)
    //   bottom: 1rem
    // @keyframes processing
    //   0%
    //     left: 10%
    //     opacity: 0
    //   10%
    //     left: 15%
    //     opacity: 1
    //   20%
    //     left: 20%
    //     opacity: 0
    //   30%
    //     left: 25%
    //     opacity: 0
    //     transform: rotate(120deg) scale(1.5)
    //   40%
    //     left: 30%
    //     opacity: 0
    //   50%
    //     left: 35%
    //     opacity: 1
    //   60%
    //     left: 40%
    //     opacity: 0
    //   70%
    //     left: 45%
    //     opacity: 0
    //   80%
    //     left: 50%
    //     opacity: 0
    //   90%
    //     left: 55%
    //     opacity: 1
    //   100%
    //     left: 60%
    //     opacity: 0
    // @keyframes processing-1
    //   0%
    //     left: 5%
    //     opacity: 0
    //   10%
    //     left: 5%
    //     opacity: 0
    //   20%
    //     left: 10%
    //     opacity: 1
    //   30%
    //     left: 15%
    //     opacity: 0
    //   40%
    //     left: 20%
    //     opacity: 0
    //   50%
    //     left: 25%
    //     opacity: 0
    //   60%
    //     left: 30%
    //     opacity: 0
    //   70%
    //     left: 35%
    //     opacity: 1
    //   80%
    //     left: 40%
    //     opacity: 0
    //   90%
    //     left: 45%
    //     opacity: 0
    //   100%
    //     left: 50%
    //     opacity: 0
    .circle
      width: 1rem
      height: 1rem
      border-radius: 50%
      border: solid .1rem #333333
      // opacity: .5
    .full-circle
      opacity: 1
      background-color: #333333
    .cart-item-attr-block
        background-color: #fff
</style>
