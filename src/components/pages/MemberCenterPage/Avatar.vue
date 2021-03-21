<template>
    <div class="avatar"></div>
</template>

<script>
    export default {
        name: 'Avatar'
    }
</script>

<style lang="sass" scoped>
.avatar
    width: 6rem
    height: 6rem
    box-shadow: 0 .2rem .3rem 0 rgba(0, 0, 0, 0.2)
    border-radius: 50%
    background-color: white
    margin-right: 1rem
    position: relative
    overflow: hidden
    background-image: url('/images/animal.png')
    background-size: 80%
    background-repeat: no-repeat
    background-position: 50% 50%
    &::before
        content: '編輯'
        font-size: 1.2rem
        color: white
        text-align: center
        width: 100%
        height: 1.6rem
        background-color: rgba(51, 51, 51, 0.8)
        position: absolute
        bottom: 0
</style>