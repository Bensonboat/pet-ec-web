<template>
  <div class="reset-password">
    <div class="page-header flex-center">
      <img
        src="/images/icons/tick.svg"
        alt="上一步按鈕"
        class="prev-icon"
        @click="close"
      />
      修改密碼
    </div>
    <div class="content-block">
      <div v-for="(item, index) in passwordData" :key="index">
        <div class="form-title">{{ item.label }}</div>
        <div class="form-input-block">
          <input
            type="text"
            class="input"
            v-model="item.value"
            :placeholder="'請輸入' + item.label"
          />
        </div>
      </div>
    </div>
    <div class="confirm-btn flex-center">OK</div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      passwordData: [
        {
          label: "舊密碼",
          value: ""
        },
        {
          label: "新密碼",
          value: ""
        },
        {
          label: "確認新密碼",
          value: ""
        }
      ]
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="sass" scoped>
.reset-password
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100vh
    z-index: 1
    background-color: #fff
    font-weight: 500
    color: #333333
    .page-header
        height: 5rem
        background-color: #e5ceae
        font-size: 1.4rem
        position: relative
    .content-block
        padding: 1.5rem
    .form-title
        font-size: 1.2rem
    .form-input-block
        border-radius: .5rem
        border: solid .1rem #ede8e1
        background-color: #f7f0e6
        margin: .6rem 0 1.2rem 0
        height: 3.5rem
        padding-left: 1.5rem
        overflow: hidden
        .input
            width: 100%
            height: 100%
            background-color: transparent
            outline: none
            border: none
    .prev-icon
        width: 2.4rem
        height: 2.4rem
        position: absolute
        left: 1rem
    .confirm-btn
        width: calc(100% - 3rem)
        height: 4.4rem
        position: fixed
        bottom: 1.5rem
        left: 50%
        transform: translateX(-50%)
        border-radius: .5rem
        background-color: #333333
        font-size: 1.5rem
        color: #e5ceae
</style>
