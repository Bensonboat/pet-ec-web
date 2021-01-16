<template>
    <div class="login-page">
        This is login page.
        <loading-mask/>
    </div>
</template>

<script>
    import LoadingMask from '@/components/layouts/LoadingMask'
    export default {
        name: 'LoginPage',
        components: {
            LoadingMask
        }
    }
</script>

<style lang="sass" scoped>

</style>