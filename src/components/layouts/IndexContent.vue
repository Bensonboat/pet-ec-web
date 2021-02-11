<template>
    <div class="index-content">
        <the-heading/>
        <router-view class="index-content-router-view"/>
        <div class="default-top-icon-block top-icon-block">
            <img src="/images/top.png" alt="to top icon" class="default-top-icon top-icon">
        </div>
    </div>
</template>

<script>
    import TheHeading from './TheHeading.vue'
    export default {
        name: 'IndexContent',
        components: {
            TheHeading
        }
    }
</script>

<style lang="sass" scoped>
.index-content
    position: relative
    .index-content-router-view
        height: calc(100% - 5rem)
        padding: .5rem
        overflow-y: scroll
        // width: 90%
        margin: auto
        // background-color: #fff
    .index-content-router-view::-webkit-scrollbar 
        display: none
    .top-icon-block
        position: absolute
        right: 3rem
        bottom: 3rem
        // background-color: #D8E2DC
        // background-color: #DFE0E2
        background-color: rgba(0,0,0,.4)
        border-radius: 100%
        padding: 1rem
    .top-icon
        // margin-top: 3px
        
</style>