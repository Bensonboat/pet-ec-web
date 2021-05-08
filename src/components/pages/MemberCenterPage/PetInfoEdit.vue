<template>
  <div class="pet-info-edit">
    <div class="pet-card" v-for="(item, index) in petData" :key="index">
      <div class="info-edit-block flex-center">
        <avatar />
        <div class="pet-attribute-edit-block">
          <div class="flex-center row">
            <div class="attr-item-block big">
              <div v-if="!item.editing" class="pet-attribute">
                {{ item.name === "" ? "寵物名稱" : item.name }}
              </div>
              <input
                v-else
                type="text"
                class="input"
                placeholder="寵物名稱"
                v-model="item.name"
              />
            </div>
            <div class="attr-item-block small">
              <div v-if="!item.editing" class="pet-attribute">
                {{ item.gender === "" ? "性別" : item.gender }}
              </div>
              <input
                v-else
                type="text"
                class="input"
                placeholder="性別"
                v-model="item.gender"
              />
            </div>
          </div>
          <div class="flex-center row">
            <div class="attr-item-block big">
              <div v-if="!item.editing" class="pet-attribute">
                {{ item.breed === "" ? "品種" : item.breed }}
              </div>
              <input
                v-else
                type="text"
                class="input"
                placeholder="品種"
                v-model="item.breed"
              />
            </div>
            <div class="attr-item-block small">
              <div v-if="!item.editing" class="pet-attribute">
                {{ item.age === "" ? "年齡" : item.age }}
              </div>
              <input
                v-else
                type="text"
                class="input"
                placeholder="年齡"
                v-model="item.age"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="operate-btn-block">
        <div
          v-if="item.is_new"
          class="save-btn click-animation-small flex-center"
          @click="createPetData(index)"
        >
          新增
        </div>
        <div
          v-else
          class="save-btn click-animation-small flex-center"
          @click="confirm(index)"
        >
          {{ !item.editing ? "編輯" : "儲存" }}
        </div>
      </div>
    </div>
    <div class="create-new-card" @click="addEmptyCard">
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
      petData: []
    };
  },
  mounted() {
    this.getPetData();
  },
  methods: {
    addEmptyCard() {
      let is_creating = this.petData.find(item => item.is_new);
      if (is_creating) {
        return;
      } else {
        this.getPetData().then(() => {
          this.petData.push({
            name: "",
            gender: "",
            breed: "",
            age: "",
            editing: true,
            is_new: true
          });
        });
      }
    },
    confirm(index) {
      if (this.petData[index].editing) {
        this.updatePetData(index);
      } else {
        this.getPetData().then(() => {
          this.petData[index].editing = true;
          this.$forceUpdate();
        });
      }
    },
    getPetData() {
      this.$store.dispatch("toggleLoading", true);
      return this.$api.getPetData().then(res => {
        this.petData = res.data.data;
        this.$store.dispatch("toggleLoading", false);
      });
    },
    updatePetData(index) {
      let pet = this.petData[index];
      let data = {
        name: pet.name,
        gender: "male",
        image: "",
        age: parseInt(pet.age),
        id: pet.id
      };
      this.$store.dispatch("toggleLoading", true);
      this.$api.updatePetData(data).then(() => {
        this.getPetData();
      });
    },
    createPetData(index) {
      let pet = this.petData[index];
      let data = {
        name: pet.name,
        gender: "male",
        image: "",
        age: parseInt(pet.age)
      };
      this.$store.dispatch("toggleLoading", true);
      this.$api.createPetData(data).then(() => {
        this.getPetData();
      });
    }
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
        display: flex
        align-items: center
    .input
        width: 100%
        height: 100%
        outline: none
        background-color: transparent
        border: none
        font-size: 1.2rem
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
    .pet-attribute
      color: #9b9b9b
      display: flex
      align-items: center
      font-size: 1.2rem
</style>
