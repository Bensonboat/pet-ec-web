<template>
  <div class="login-page">
    <div class="page-header">
      <div @click="previousPage" class="click-animation pre-icon">
        <img src="/images/icons/back.svg" alt="上一步按鈕" class="icon" />
      </div>
      <div class="toggle-mode-btn" @click="toggleLogInMode">
        {{ isLoginMode ? "註冊" : "登入" }}
      </div>
      <div>LOGO</div>
    </div>
    <div class="content-block">
      <div class="bg" :style="{ backgroundPosition: position }"></div>
      <div class="title flex-center">{{ !isLoginMode ? "註冊" : "登入" }}</div>
      <div class="form-block">
        <div class="btn-shape form-input-block">
          <img src="/images/icons/id.svg" alt="" class="icon" />
          <div class="form-input-text" v-if="!showEmailInput && email === ''">
            帳號
          </div>
          <input
            type="email"
            class="input"
            v-model="email"
            @focus="toggleInput('email')"
            @blur="toggleInput('email') + validateEmail()"
          />
        </div>
        <div class="btn-shape form-input-block">
          <img src="/images/icons/password.svg" alt="" class="icon" />
          <div
            class="form-input-text"
            v-if="!showPasswordInput && password === ''"
          >
            密碼
          </div>
          <input
            :type="type"
            class="input"
            v-model="password"
            @focus="toggleInput('password')"
            @blur="toggleInput('password') + validatePassword()"
          />
          <div @click="toggleShowPassword">
            <img
              src="/images/icons/eye-off.svg"
              alt=""
              class="icon check-password"
              v-if="type === 'password'"
            />
            <img
              src="/images/icons/eye.svg"
              alt=""
              class="icon check-password"
              v-else
            />
          </div>
        </div>
        <div class="alert-msg flex-center" v-show="errorMessage !== ''">
          <img
            src="/images/icons/error.svg"
            alt="提示圖案"
            class="error-icon"
          />
          <span>{{ errorMessage }}</span>
        </div>
        <div class="btn-shape login-btn" @click="confirm">
          {{ isLoginMode ? "登入" : "註冊" }}
        </div>
        <div class="forget-password-block">
          <div class="text">忘記密碼?</div>
        </div>
        <div class="gap-line">
          <div class="text flex-center">或</div>
        </div>
        <div class="others-login-block">
          <div class="btn-shape other-login-btn flex-center">
            <img
              src="/images/icons/google.svg"
              alt="google 圖案"
              class="sms-icon"
            />
            使用Google帳號登入
          </div>
          <div class="btn-shape other-login-btn flex-center">
            <img
              src="/images/icons/facebook.svg"
              alt="facebook 圖案"
              class="sms-icon"
            />
            使用Facebook帳號登入
          </div>
        </div>
      </div>
    </div>
    <div v-if="$store.state.globalModalContent !== ''">
      <div class="modal-mask"></div>
      <base-modal />
    </div>
  </div>
</template>

<script>
import BaseModal from "@/components/layouts/BaseModal";
import API from "@/axios/api";
export default {
  name: "LoginPage",
  components: {
    BaseModal
  },
  data() {
    return {
      position: "",
      email: "",
      password: "",
      showEmailInput: false,
      showPasswordInput: false,
      type: "password",
      isLoginMode: true,
      errorMessage: ""
    };
  },
  mounted() {
    this.bgAnimation();
  },
  methods: {
    toggleInput(type) {
      if (type === "email") {
        this.showEmailInput = !this.showEmailInput;
      } else if (type === "password") {
        this.showPasswordInput = !this.showPasswordInput;
      }
    },
    previousPage() {
      this.$router.go(-1);
    },
    toggleShowPassword() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    toggleLogInMode() {
      this.isLoginMode = !this.isLoginMode;
    },
    confirm() {
      let data = {
        email: this.email,
        password: this.password
      };

      if (this.isLoginMode) {
        this.logIn(data);
      } else {
        this.signUp(data);
      }
    },
    signUp(data) {
      // API 有限制密碼 6-32 字數
      API.signUp(data)
        .then(() => {
          this.setGlobalModalContent("sign-up-success");
        })
        .catch(() => {
          this.setGlobalModalContent("sign-up-fail");
        });
    },
    logIn(data) {
      API.logIn(data)
        .then(res => {
          console.log(res.data.code, "###");
          if (res.data.code === 3001) {
            this.setGlobalModalContent("not-registered");
          }
        })
        .catch(() => {
          this.switchErrorMessage("invalid-login");
        });
    },
    validatePassword() {
      this.resetErrorMessage();
      let password = this.password;
      if (password.length < 6 || password.length > 32) {
        this.switchErrorMessage("invalid-password-format");
      }
    },
    validateEmail() {
      this.resetErrorMessage();
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.email
        )
      ) {
        return;
      }
      this.switchErrorMessage("invalid-email-format");
    },
    switchErrorMessage(type) {
      switch (type) {
        case "invalid-email-format":
          this.errorMessage = "輸入的 email 格式有誤，請重新確認";
          break;
        case "invalid-password-format":
          this.errorMessage = "密碼長度須介於 6 - 32 個字之間";
          break;
        case "invalid-login":
          this.errorMessage = "帳號或密碼輸入有誤，請重新輸入";
          break;
        default:
          break;
      }
    },
    resetErrorMessage() {
      this.errorMessage = "";
    },
    setGlobalModalContent(type) {
      let default_data_structure = {
        title: "",
        detail: "",
        btn1: "",
        btn2: ""
      };
      switch (type) {
        case "sign-up-success":
          default_data_structure = {
            title: "註冊成功",
            detail: "請至註冊信箱收取驗證信",
            btn1: "1",
            btn2: "2",
            src: "/images/icons/white-tick.svg",
            blockClass: "success-block",
            iconClass: "success-icon"
          };
          break;
        case "sign-up-fail":
          default_data_structure = {
            title: "註冊失敗",
            detail: "請重新再試一次或洽客服人員",
            btn1: "",
            btn2: "",
            src: "/images/icons/white-alert.svg",
            blockClass: "fail-block",
            iconClass: "fail-icon"
          };
          break;
        case "not-registered":
          default_data_structure = {
            title: "登入失敗",
            detail: "此帳號尚未註冊",
            btn1: "",
            btn2: "",
            src: "/images/icons/white-alert.svg",
            blockClass: "fail-block",
            iconClass: "fail-icon"
          };
          break;
        default:
          break;
      }

      this.$store.dispatch("setGlobalModalContent", default_data_structure);
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
    }
  }
};
</script>

<style lang="sass" scoped>
.login-page
    .page-header
      height: 5rem
      box-shadow: 0 .2rem .4rem 0 rgba(0, 0, 0, 0.15)
      background-color: #333333
      font-size: 1.4rem
      font-weight: 500
      color: #efe1ce
      display: flex
      justify-content: center
      align-items: center
      z-index: 1
      position: relative
    .toggle-mode-btn
      font-size: 1.2rem
      width: 4.4rem
      height: 3rem
      border-radius: .5rem
      border: solid .1rem #efe1ce
      background-color: #333333
      display: flex
      align-items: center
      justify-content: center
      position: absolute
      right: 1.5rem
    .content-block
      position: relative
      .bg
          background-image: url('/images/icons/tiles.svg')
          background-repeat: repeat
          background-color: #E5CEAE
          background-size: 190px 190px
          width: 100%
          height: 100%
          // position: fixed
          position: absolute // 改為 absolute for not 100vw
          top: 0
          left: 0
    .title
      font-size: 2rem
      font-weight: 500
      color: #333333
      position: relative
      z-index: 1
      margin: 3rem 0
    .form-block
      position: relative
      z-index: 1
    .form-input-block
      display: flex
      align-items: center
      padding-left: 2.5rem
      overflow: hidden
      position: relative
    .form-input-text
      position: absolute
      color: #e5ceae
      left: 50%
      transform: translateX(-50%)
      font-size: 1.4rem
    .btn-shape
      width: 25rem
      height: 3.8rem
      border-radius: 1.85rem
      border: solid .1rem #ceb28b
      background-color: #ffffff
      margin: auto
      margin-bottom: 1.5rem
      box-sizing: border-box
    .forget-password-block
      width: 25rem
      margin: auto
      font-size: 1.2rem
      font-weight: 500
      color: #333333
      display: flex
      justify-content: flex-end
      .text
          border-bottom: solid 1px
    .icon
      width: 1.8rem
      height: 1.8rem
      margin-right: 1rem
    .check-password
      margin: 0 1.5rem 0 1.5rem
    .input
      width: calc(100% - 3rem)
      height: 100%
      border: none
      outline: none
      font-size: 1.4rem
      font-weight: 500
      color: #333333
      font-weight: 600
      z-index: 2
      background-color: transparent
    .login-btn
      background-color: #333333
      color: #e5ceae
      display: flex
      align-items: center
      justify-content: center
      font-size: 1.2rem
    .others-login-block
      margin-top: 4rem
    .other-login-btn
      border-radius: 1.85rem
      border: solid .2rem #333333
      background-color: #e3a652
      font-size: 1.4rem
      color: #333333
      position: relative
    .pre-icon
      position: absolute
      left: 1.5rem
    .gap-line
      height: .1rem
      width: 25rem
      background: #333333
      margin: auto
      position: relative
      margin-top: 7.5rem
      .text
        width: 3rem
        position: absolute
        background-color: #e5ceae
        font-size: 1.2rem
        font-weight: 500
        color: #333333
        top: 0
        left: 50%
        transform: translate(-50%, -50%)
    .alert-msg
      font-size: 1.2rem
      color: #ea1a29
      margin-top: -1rem
      margin-bottom: 1.5rem
    .error-icon
      width: 1.3rem
      height: 1.3rem
      margin-right: .5rem
    .sms-icon
      width: 1.6rem
      height: 1.6rem
      position: absolute
      left: 2.5rem
</style>
