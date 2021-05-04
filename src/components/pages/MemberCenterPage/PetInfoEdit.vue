<template>
  <div class="pet-info-edit">
    <div class="pet-card">
      <div class="info-edit-block flex-center">
        <avatar />
        <div class="pet-attribute-edit-block">
          <div class="flex-center row">
            <div class="attr-item-block big">
              <input
                type="text"
                class="input"
                placeholder="寵物名稱"
                v-model="petData.name"
              />
            </div>
            <div class="attr-item-block small">
              <input
                type="text"
                class="input"
                placeholder="性別"
                v-model="petData.gender"
              />
            </div>
          </div>
          <div class="flex-center row">
            <div class="attr-item-block big">
              <input
                type="text"
                class="input"
                placeholder="品種"
                v-model="petData.breed"
              />
            </div>
            <div class="attr-item-block small">
              <input
                type="text"
                class="input"
                placeholder="年齡"
                v-model="petData.age"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="operate-btn-block">
        <div class="save-btn click-animation-small flex-center">儲存</div>
      </div>
    </div>
    <div class="create-new-card">
      毛小孩
      <img src="/images/icons/plus.svg" alt="加號圖案" class="icon" />
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "PetInfoEdit",
  components: {
    Avatar
  },
  data() {
    return {
      petData: {
        name: "",
        gender: "",
        breed: "",
        age: ""
      }
    };
  }
};
</script>

<style lang="sass" scoped>
.pet-info-edit
    padding: 1rem
    background-color: white
    font-size: 1.2rem
    .pet-card
        padding: 1rem
        border-radius: .5rem
        border: solid .1rem #ede8e1
        background-color: #f7f0e6
    .operate-btn-block
        display: flex
        justify-content: flex-end
    .save-btn
        width: 20rem
        height: 3rem
        border-radius: .3rem
        border: solid .1rem #ccaa76
        background-color: #f2c47e
        color: #a67a3d
    .info-edit-block
        justify-content: space-between
        align-items: flex-start
    .pet-attribute-edit-block
        flex-grow: 1
    .attr-item-block
        height: 3rem
        border-radius: .3rem
        border: solid .1rem #efe1ce
        background-color: #f7f0e6
        box-sizing: border-box
        padding-left: 1rem
        overflow: hidden
    .input
        width: 100%
        height: 100%
        outline: none
        background-color: transparent
        border: none
    .row
        justify-content: space-between
        margin-bottom: .8rem
    .big
        width: 13rem
    .small
        width: 6rem
    .create-new-card
        padding: 1rem 1.5rem
        border-radius: .5rem
        border: solid .1rem #ede8e1
        background-color: #f7f0e6
        margin-top: 1rem
        color: #333333
        position: relative
        display: flex
        align-items: center
        justify-content: space-between
        .icon
          width: 1.2rem
          height: 1.2rem
</style>
