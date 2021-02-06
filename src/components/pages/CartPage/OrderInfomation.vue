<template>
    <div class="default-order-infomation order-infomation">
        <div class="infomation-header">
            <div class="default-text-color">訂單資料</div>
            <!-- <div class="default-light-green-color">再去逛逛</div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderInfomation",
};
</script>

<style lang="sass" scoped>
.order-infomation
    padding: 0 3rem
    margin-top: 2rem
    .infomation-header
        font-weight: 800
        display: flex
        justify-content: space-between
        align-items: center
</style>