<template>
  <div class="avatar">
    <img
      src="https://maoplus-dev-images.s3-ap-northeast-1.amazonaws.com/0ff73ac0-5f1f-43f9-b458-deef2095bc47"
      alt=""
      class="img"
    />
    <div class="edit-text">
      <span>編輯</span>
      <input type="file" class="file-input" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar"
};
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
    box-sizing: border-box
    .img
      width: 100%
      height: 100%
    // background-image: url('')
    // background-size: 80%
    // background-repeat: no-repeat
    // background-position: 50% 50%
    .edit-text
      font-size: 1.2rem
      color: white
      text-align: center
      width: 100%
      height: 1.6rem
      background-color: rgba(51, 51, 51, 0.8)
      position: absolute
      bottom: 0
      left: 0
    .file-input
      position: absolute
      left: 0
      background-color: transparent
      opacity: 0

    // &::before
    //     content: '編輯'
    //     font-size: 1.2rem
    //     color: white
    //     text-align: center
    //     width: 100%
    //     height: 1.6rem
    //     background-color: rgba(51, 51, 51, 0.8)
    //     position: absolute
    //     bottom: 0
</style>
