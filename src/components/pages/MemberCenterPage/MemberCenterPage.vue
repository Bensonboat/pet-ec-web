<template>
    <div class="user-account-page">
        <div class="page-header">
            <div @click="previousPage" class="click-animation pre-icon">
                <img
                    src="/images/icons/back.svg"
                    alt="上一步按鈕"
                    class="icon"
                />
            </div>
            <div class="detail-btn">訂單明細</div>
            <div>會員中心</div>
        </div>
        <div class="content-block">
            <user-account-data/>
            <div class="edit-block">
                <user-info-edit/>
                <pet-info-edit style="margin-top: .6rem; margin-botto: 1rem"/>
            </div>
        </div>
    </div>
</template>

<script>
import UserAccountData from './UserAccountData'
import UserInfoEdit from './UserInfoEdit'
import PetInfoEdit from './PetInfoEdit'

export default {
    name: "MemberCenterPage",
    components: {
        UserAccountData,
        UserInfoEdit,
        PetInfoEdit
    },
    methods: {
        previousPage() {
            this.$router.go(-1);
        },
    },
};
</script>

<style lang="sass" scoped>
.user-account-page
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