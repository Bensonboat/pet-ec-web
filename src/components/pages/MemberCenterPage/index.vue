<template>
  <div class="member-center-index">
    <page-header :title="'會員中心'" @previous-page="previousPage">
      <template #pageHeaderButton>
        <div class="detail-btn" @click="checkOrdersDetail">訂單明細</div>
      </template>
    </page-header>
    <div class="content-block">
      <user-account-data :userData="userData" />
      <div class="edit-block">
        <user-info-edit :userData="userData" @getUser="getUserData" />
        <pet-info-edit style="margin-top: .6rem; margin-bottom: 1rem" />
      </div>
    </div>
    <div v-if="$store.state.globalModalContent !== ''">
      <div class="modal-mask"></div>
      <base-modal />
    </div>
  </div>
</template>

<script>
import UserAccountData from "./UserAccountData";
import UserInfoEdit from "./UserInfoEdit";
import PetInfoEdit from "./PetInfoEdit";
import PageHeader from "@/components/layouts/PageHeader";
import BaseModal from "@/components/layouts/BaseModal";

export default {
  name: "MemberCenterIndex",
  components: {
    UserAccountData,
    UserInfoEdit,
    PetInfoEdit,
    PageHeader,
    BaseModal
  },
  data() {
    return {
      userData: ""
    };
  },
  mounted() {
    this.setGlobalModalContent();
    let token = localStorage.getItem("paw-front-token");
    if (!token) {
      this.$router.push("/login");
    } else {
      this.getUserData();
    }
  },
  methods: {
    previousPage() {
      this.$router.go(-1);
    },
    checkOrdersDetail() {
      this.$router.push({
        path: "/order_detail_page"
      });
    },
    getUserData() {
      this.$api
        .getUsers()
        .then(res => {
          this.userData = res.data.data;
        })
        .catch(err => {
          if (err.data.code === 3002) {
            alert("請重新登入");
            this.$router.push("/login");
            this.$store.dispatch("toggleLoading", true);
          }
        });
    },
    setGlobalModalContent() {
      let default_data_structure = {
        title: "註冊成功",
        detail: "請至註冊信箱收取驗證信",
        btn1: "1",
        btn2: "2",
        src: "/images/icons/white-tick.svg",
        blockClass: "success-block",
        iconClass: "success-icon"
      };

      this.$store.dispatch("setGlobalModalContent", default_data_structure);
    }
  }
};
</script>

<style lang="sass" scoped>
.member-center-index
    background-color: #e5ceae
    height: 100%
    overflow: scroll
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
    .content-block
        height: calc(100% - 5rem)
        overflow: scroll
    .detail-btn
        width: 6.8rem
        height: 3rem
        font-size: 1.2rem
        border-radius: .5rem
        border: solid .1rem #efe1ce
        background-color: #333333
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        right: 1.5rem
    .pre-icon
        position: absolute
        left: 1.8rem
    .icon
        width: 1.8rem
        height: 1.8rem
    .edit-block
        padding: .5rem
        // overflow: scroll
        // height: calc(100% - 13rem)
</style>
