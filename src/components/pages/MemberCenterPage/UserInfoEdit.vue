<template>
  <div class="user-info-edit">
    <div v-for="(item, index) in innerUserData" :key="index">
      <div v-if="isEditMode" class="form-title">{{ item.label }}</div>
      <div class="form-input-block">
        <input
          type="text"
          class="input"
          v-model="item.value"
          :placeholder="item.label"
          :class="{ 'form-disabled': !isEditMode }"
        />
      </div>
    </div>
    <div class="flex-center operate-btn-block">
      <div
        class="edit-confirm-btn flex-center click-animation-small"
        @click="toggleEditMode"
      >
        {{ isEditMode ? "儲存" : "編輯" }}
      </div>
      <div
        class="revise-password-btn flex-center click-animation-small"
        @click="toggleResetPasswordPage"
      >
        {{ isEditMode ? "取消" : "修改密碼" }}
      </div>
    </div>
    <transition name="left-in">
      <reset-password
        v-if="showResetPasswordPage"
        @close="toggleResetPasswordPage"
      />
    </transition>
  </div>
</template>

<script>
import ResetPassword from "./ResetPassword";
export default {
  name: "UserInfoEdit",
  props: ["userData"],
  components: {
    ResetPassword
  },
  data() {
    return {
      isEditMode: false,
      showResetPasswordPage: false,
      innerUserData: [
        {
          label: "姓名",
          value: ""
        },
        {
          label: "電話",
          value: ""
        },
        {
          label: "寄送地址",
          value: ""
        }
        // {
        //   label: "信箱",
        //   value: ""
        // }
      ]
    };
  },
  methods: {
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    toggleResetPasswordPage() {
      if (this.isEditMode) {
        this.toggleEditMode();
        return;
      }
      this.showResetPasswordPage = !this.showResetPasswordPage;
    },
    updateUserConfirm() {
      let data = {
        firstname: "",
        mobile: ""
      };
      this.$api.updateUserData(data).then(res => {
        console.log(res, "####");
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.user-info-edit
    background-color: #fff
    padding: 1rem
    .form-title
        font-size: 1.2rem
        font-weight: 500
        color: #333333
    .form-input-block
        border-radius: 5px
        border: solid .1rem #ede8e1
        background-color: #f7f0e6
        height: 3.6rem
        margin: .6rem 0 1.2rem 0
        overflow: hidden
        padding-left: 1.5rem
    .input
        width: 100%
        height: 100%
        outline: none
        border: none
        background-color: transparent
        font-family: NotoSansTC
        font-size: 1.2rem
        font-weight: 500
    .form-disabled
        pointer-events: none
    .operate-btn-block
        justify-content: space-between
    .revise-password-btn
        width: 10rem
        height: 3.6rem
        border-radius: .5rem
        border: solid .1rem #333333
        background-color: #ffffff
        box-sizing: border-box
        color: #333333
    .edit-confirm-btn
        width: 18rem
        height: 3.6rem
        border-radius: .5rem
        background-color: #333333
        color: #e5ceae
    .left-in-leave
        left: 0
        opacity: 1
    .left-in-leave-active
        transition: .3s linear
    .left-in-leave-to
        left: -30rem
        opacity: 0
    .left-in-enter
        left: -30rem
        opacity: 0
    .left-in-enter-active
        transition: .3s linear
    .left-in-enter-to
        left: 0
        opacity: 1
</style>
