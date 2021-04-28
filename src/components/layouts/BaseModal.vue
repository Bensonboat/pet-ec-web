<template>
  <div class="base-modal">
    <img
      src="/images/icons/close.svg"
      alt="icon"
      class="close-icon"
      @click="close"
    />
    <div class="modal-icon-block" :class="[getGlobalModalContent.blockClass]">
      <img
        :src="getGlobalModalContent.src"
        alt="icon"
        class="icon"
        :class="[getGlobalModalContent.iconClass]"
      />
    </div>
    <div class="title">{{ getGlobalModalContent.title }}</div>
    <div class="content">
      <div class="content-detail flex-center">
        {{ getGlobalModalContent.detail }}
      </div>
      <div class="btn-block">
        <div
          class="btn btn-1"
          v-if="getGlobalModalContent.btn1 !== ''"
          @click="btn('btn1')"
        >
          {{ getGlobalModalContent.btn1 }}
        </div>
        <div
          class="btn btn-2"
          v-if="getGlobalModalContent.btn2 !== ''"
          @click="btn('btn2')"
        >
          {{ getGlobalModalContent.btn2 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// #### 傳入 state 的資料結構，需要什麼傳什麼
// default_data_structure = {
//   title: "",
//   detail: "", => 內文
//   btn1: "", => 上方按鈕文案
//   btn2: "", => 下方按鈕文案
//   src: "",  => icon 路徑
//   blockClass: "fail-block", => icon 區塊class
//   iconClass: "fail-icon" => icon class,
//   closeTriggerFunction: '' => 關閉按鈕觸發的function
// };

export default {
  name: "BaseModal",
  computed: {
    getGlobalModalContent() {
      return this.$store.getters.getGlobalModalContent;
    }
  },
  methods: {
    close() {
      if (this.getGlobalModalContent.closeTriggerFunction) {
        this.$emit(this.getGlobalModalContent.closeTriggerFunction);
      }

      // 清空自動關閉 modal
      this.$store.dispatch("setGlobalModalContent", "");
    },
    btn(type) {
      this.$emit(type);
    }
  }
};
</script>

<style lang="sass" scoped>
.base-modal
  width: 22rem
  min-height: 10rem
  padding: 2rem
  border-radius: .5rem
  background-color: #f2c47e
  position: fixed
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  z-index: 9999
  .modal-icon-block
    position: absolute
    top: 0
    left: 50%
    transform: translate(-50%, -50%)
    border: solid .4rem rgba(0,0,0,.8)
    width: 5rem
    height: 5rem
    border-top: none
    border-radius: 50%
    background-color: #fff
  .icon
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  .close-icon
    width: 1.2rem
    height: 1.2rem
    position: absolute
    right: .8rem
    top: .8rem
  .title
    margin: 2rem 0
    text-align: center
    font-size: 1.6rem
    font-weight: 500
    color: #333333
  .content
    font-weight: 500
    font-size: 1.2rem
    color: #333333
  .content-detail
    padding: 0 2rem
    margin-bottom: 2rem
  .btn
    width: 18rem
    height: 3.5rem
    border-radius: .5rem
    border: solid .1rem #333333
    display: flex
    justify-content: center
    align-items: center
    margin: 0 auto 1rem auto
  .btn-1
    background-color: #efe1ce
  .btn-2
    background-color: #333333
    color: #e5ceae
  .success-block
    background-color: rgb(150, 172, 73)
  .success-icon
    width: 2.6rem
    height: 2.1rem
  .fail-block
    background-color: rgb(199, 78, 73)
  .fail-icon
    width: 2.6rem
    // height: 2.6rem
</style>
