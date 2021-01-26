<template>
    <div class="my-app">
        <router-view class="outer-router-view"/>
        <div v-show="showLoadingMask">
            <div class="modal-mask"></div>
            <loading-mask/>
        </div>
    </div>
</template>

<script>
import LoadingMask from '@/components/layouts/LoadingMask'
export default {
    name: 'MyApp',
    components: {
        LoadingMask
    },
    data(){
        return {
            showLoadingMask: false
        }
    }
}

</script>
<style lang="sass">
@import '@/sass/default.sass'
@import '@/sass/system_color.sass'

.my-app
    width: 100vw
    height: calc(100 * var(--vh))
    .outer-router-view
        height: 100%
</style>
