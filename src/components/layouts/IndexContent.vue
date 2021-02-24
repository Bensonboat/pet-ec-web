<template>
    <div class="index-content">
        <!-- <transition name="fade"> -->
            <the-heading  scrollOnToppest='scrollOnToppest' :class="[!scrollOnToppest ? 'transparent-heading' : '']"/>
        <!-- </transition> -->
        <router-view class="index-content-router-view" ref='index_content_router' @scroll.native="handleScroll"/>
        <div class="default-top-icon-block top-icon-block" v-show="this.$route.path !== '/home_page'">
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
        },
        data(){
            return {
                scrollOnToppest: true,
                currentHeight: ''
            }
        },
        // created () {
        //     window.addEventListener('scroll', this.handleScroll);
        // },
        // destroyed () {
        //     window.removeEventListener('scroll', this.handleScroll);
        // },
        methods: {
            handleScroll(){
                let current_height = this.$refs.index_content_router.$el.scrollTop;
                if(current_height > 100){
                    this.scrollOnToppest = false;

                    if(this.currentHeight > current_height){
                        this.scrollOnToppest = true
                    }
                    this.currentHeight = current_height;
                } else {
                    this.scrollOnToppest = true
                }
                // console.log(this.$refs.index_content_router.$el.scrollTop, 'j')
            }
        }
    }
</script>

<style lang="sass" scoped>
.index-content
    position: relative
    .index-content-router-view
        height: calc(100% - 4.4rem)
        padding-top: 4.4rem
        // padding: .5rem
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
    .transparent-heading
        background-color: transparent
        opacity: 0
        transition: .5s
.fade-leave 
  opacity: 1

.fade-leave-active 
  transition: opacity .5s

.fade-leave-to 
  opacity: 0

.fade-enter 
  opacity: 0

.fade-enter-active 
  transition: opacity .5s

.fade-enter-to 
  opacity: 1


        
</style>