<template>
  <div class="pet-info-edit">
    <div class="pet-card" v-for="(item, index) in petData" :key="index">
      <div class="info-edit-block flex-center">
        <avatar />
        <div class="pet-attribute-edit-block">
          <div class="flex-center row">
            <!-- <div class="attr-item-block big"> -->
            <div v-if="!item.editing" class="input big pet-attribute">
              {{ item.name === "" ? "寵物名稱" : item.name }}
            </div>
            <input
              v-else
              type="text"
              class="input big"
              placeholder="寵物名稱"
              v-model="item.name"
              @click="resetGenderSelectMode(index)"
            />
            <!-- </div> -->
            <!-- <div class="attr-item-block small"> -->

            <div v-if="!item.editing" class="input small pet-attribute">
              {{ item.gender === "" ? "性別" : item.gender | textTransformer }}
            </div>
            <div
              v-else
              class="input small pet-attribute gender-select"
              :class="{ selecting: item.show_gender_select }"
              @click="toggleGenderSelect(index)"
            >
              {{ item.gender === "" ? "性別" : item.gender | textTransformer }}
              <div class="gender-select-block" v-show="item.show_gender_select">
                <div class="option" @click="selectGender(index, 'male')">
                  男
                </div>
                <div class="option" @click="selectGender(index, 'female')">
                  女
                </div>
              </div>
            </div>
            <!-- <input
              v-else
              type="text"
              class="input small"
              placeholder="性別"
              v-model="item.gender"
            /> -->
            <!-- <select>
              <option></option>
              <option>Dog</option>
              <option>Cat</option>
            </select> -->
            <!-- <base-select
              v-else
              class="small"
              :selectData="selectData"
              style="height: 3rem"
            /> -->
            <!-- </div> -->
          </div>
          <div class="flex-center row">
            <!-- <div class="attr-item-block big"> -->
            <div v-if="!item.editing" class="input big pet-attribute">
              {{ item.breed === "" ? "品種" : item.breed }}
            </div>
            <input
              v-else
              type="text"
              class="input big"
              placeholder="品種"
              v-model="item.breed"
              @click="resetGenderSelectMode(index)"
            />
            <!-- </div> -->
            <!-- <div class="attr-item-block small"> -->
            <div v-if="!item.editing" class="input small pet-attribute">
              {{ item.age === "" ? "年齡" : item.age }}
            </div>
            <input
              v-else
              type="text"
              class="input small"
              placeholder="年齡"
              v-model="item.age"
              @click="resetGenderSelectMode(index)"
            />
            <!-- </div> -->
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
          :class="{ editing: item.editing }"
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
// import BaseSelect from "@/components/layouts/BaseSelect.vue";
import Avatar from "./Avatar";
export default {
  name: "PetInfoEdit",
  components: {
    Avatar
    // BaseSelect
  },
  filters: {
    textTransformer(value) {
      if (value === "male") {
        return "男";
      } else if (value === "female") {
        return "女";
      } else {
        return value;
      }
    }
  },
  data() {
    return {
      petData: []
      // selectData: {
      //   currentSelectText: "",
      //   options: [
      //     {
      //       name: "男生",
      //       value: "male"
      //     },
      //     {
      //       name: "女生",
      //       value: "female"
      //     }
      //   ]
      // }
    };
  },
  mounted() {
    this.getPetData();
    // this.selectData.currentSelectText = "男生";
    // this.select = "male";
  },
  methods: {
    addEmptyCard() {
      let is_creating = this.petData.find(item => item.is_new);
      if (is_creating) {
        // 新增時不可在新增第二張空白卡片
        return;
      } else {
        this.getPetData().then(() => {
          this.petData.push({
            name: "",
            gender: "",
            breed: "",
            age: "",
            editing: true,
            is_new: true // 新增時才會有
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
        this.petData = res.data.data.map(item => {
          item["show_gender_select"] = false;
          return item;
        });
        this.$store.dispatch("toggleLoading", false);
      });
    },
    updatePetData(index) {
      let pet = this.petData[index];
      let data = {
        name: pet.name,
        gender: pet.gender,
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
    },
    toggleGenderSelect(index) {
      this.petData[index].show_gender_select = !this.petData[index]
        .show_gender_select;
    },
    resetGenderSelectMode(index) {
      this.petData[index].show_gender_select = false;
    },
    selectGender(index, value) {
      this.petData[index].gender = value;
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
        margin-bottom: 1rem
    .operate-btn-block
        display: flex
        justify-content: flex-end
    .save-btn
        width: calc(100% - 7.2rem) // 左側 pet avatar 7 rem , 按鈕 border 左右兩邊共 .2 rem
        height: 3rem
        border-radius: .3rem
        border: solid .1rem #e8bb7d
        background-color: #f2c47e
        color: #84673b
    .save-btn.editing
      color: #333333
    .info-edit-block
        justify-content: space-between
        align-items: flex-start
    .pet-attribute-edit-block
        flex-grow: 1
        color: #9b9b9b
        font-weight: 500
    // .attr-item-block
    //     height: 3rem
    //     border-radius: .3rem
    //     border: solid .1rem #efe1ce
    //     background-color: #f7f0e6
    //     box-sizing: border-box
    //     padding-left: 1rem
    //     overflow: hidden
    //     display: flex
    //     align-items: center
    .input
      height: 3rem
      border-radius: .3rem
      border: solid .1rem #e8d8c1
      background-color: #f7f0e6
      box-sizing: border-box
      padding-left: 1rem
      overflow: hidden
      display: flex
      align-items: center
      width: 100%
      // height: 100%
      outline: none
      // background-color: transparent
      // border: none
      font-size: 1.2rem
      &:focus
        border: solid .1rem #e8bb7d

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
    .gender-select
      position: relative
      overflow: visible
      color: #333333
    .gender-select.selecting
      border-color: #e8bb7d
    .gender-select-block
      position: absolute
      border: solid .1rem #e8bb7d
      top: calc( 100% + .8rem )
      z-index: 100
      width: 100%
      left: 0
      background-color: #f7f0e6
      padding: 0 1.8rem .6rem 1.8rem
      box-sizing: border-box
      border-radius: .4rem
      .option
        margin-top: .6rem
        text-align: center
</style>
