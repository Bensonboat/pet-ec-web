<template>
  <div class="order-complete">
    <div style="text-align: center; height: 6rem">
      <transition name="roll">
        <img
          src="/images/shop.png"
          alt="shop icon"
          class="order-finish-icon"
          v-show="showFinishIcon"
        />
      </transition>
    </div>
    <div style="text-align: center" class="default-text-color">
      訂單完成！ 將盡快為您安排出貨！
    </div>
    <!-- <static-order-data/> -->
  </div>
</template>

<script>
// import StaticOrderData from '@/components/layouts/StaitcOrderData'

export default {
  name: "OrderFinalConfirm",
  data() {
    return {
      showFinishIcon: false
    };
  },
  mounted() {
    this.toggleShowFinishIcon();
    setInterval(() => {
      this.toggleShowFinishIcon();
    }, 3000);
  },
  methods: {
    toggleShowFinishIcon() {
      this.showFinishIcon = !this.showFinishIcon;
    }
  }
  // components: {
  //     StaticOrderData
  // }
};
</script>

<style lang="sass" scoped>
.order-complete
    padding: 0 3rem
    margin-top: 2rem
    .order-finish-icon
        width: 5rem
        height: 5rem

.roll-enter
    transform: translateY(-100px)
.roll-enter-active
    transition: 2s
// .roll-enter-to
    // transform: translateY(0)
.roll-leave
    // transform: rotate(360deg)
    // transform: translate(0, 0)
.roll-leave-active
    transform: rotate(360deg)
    transition: 2s
.roll-leave-to
    margin-left: 120%
    // transform: translateX(500px) rotate(360deg)


// .roll-leave-to
//   opacity: 0
</style>
