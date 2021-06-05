<template>
  <div class="user-account-data">
    <avatar />
    <div class="name-account-points-block">
      <div class="name-points-row">
        <div class="name">{{ userData.firstname }}</div>
        <div class="points">
          點數: {{ getLoginStatus ? userData.points : "折扣" }}
        </div>
      </div>
      <div class="account">{{ userData.email }}</div>
    </div>
    <div class="log-out-btn click-animation-small" @click="logOut">登出</div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "UserAccountData",
  props: ["userData"],
  components: {
    Avatar
  },
  computed: {
    getLoginStatus() {
      return this.$store.getters.getLoginStatus;
    }
  },
  methods: {
    logOut() {
      this.$api.logOut().then(res => {
        if (res.data.code === 200) {
          sessionStorage.removeItem("paw-front-token");
          this.$router.push({
            path: "/login"
          });
        }
      });
      // .catch(err => {
      //   if (err.data.code === 3002) {
      //     alert("尚未登入");
      //     this.$router.push({
      //       path: "/login"
      //     });
      //   }
      // });
    }
  }
};
</script>

<style lang="sass" scoped>
.user-account-data
    height: 7rem
    box-shadow: .1rem .1rem .1rem 0 rgba(0, 0, 0, 0.1)
    background-color: #efe1ce
    padding: 1rem 1.5rem
    box-sizing: border-box
    display: flex
    align-items: center
    .name-account-points-block
        flex: 1
        font-size: 1.3rem
        font-weight: 500
        color: #333333
    .name-points-row
        display: flex
        align-items: center
        margin-bottom: .5rem
    .points
        padding: 0 1rem
        // width: 5rem
        height: 2rem
        border-radius: 1rem
        border: solid .1rem #ccaa76
        display: flex
        align-items: center
        justify-content: center
        margin-left: 1rem
        font-size: 1.2rem
    .log-out-btn
        width: 5rem
        height: 2.5rem
        border-radius: .5rem
        border: solid .1rem #ccaa76
        background-color: #f2c47e
        display: flex
        align-items: center
        justify-content: center
        font-size: 1.2rem
        font-weight: 500
        color: #654e2d
</style>
