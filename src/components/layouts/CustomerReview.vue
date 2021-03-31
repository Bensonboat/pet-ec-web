<template>
  <div class="default-customer-review customer-review">
    <div v-for="(item, index) in reviewData" :key="index" class="each-review">
      <div class="user-info-block">
        <img :src="item.avatar" alt="user avatar" class="default-user-avatar" />
        <div class="user-name-block">
          <div class="default-user-name default-text-color">
            {{ item.username }}
          </div>
          <div class="default-post-time default-gray-color">
            {{ item.date }}
          </div>
        </div>
      </div>
      <star-rating
        v-model="item.rating"
        class="star-rating"
        :increment="0.5"
        :star-size="15"
        :show-rating="false"
        :read-only="true"
      />
      <div class="comment-block default-text-color">{{ item.comment }}</div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "CustomerReview",
  components: {
    StarRating
  },
  data() {
    return {
      reviewData: [
        {
          username: "Mr. Chocolate",
          avatar: "/images/animal.png",
          date: "2020-01-03",
          rating: 4,
          comment: "All is well"
        },
        {
          username: "Ms. Vanila",
          avatar: "/images/test.png",
          date: "2021-11-13",
          rating: 5,
          comment: "Good Quality"
        },
        {
          username: "Shit Man",
          avatar: "/images/test2.png",
          date: "2021-11-23",
          rating: 2,
          comment: "Shit"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.customer-review
    margin: auto
    .each-review
        margin-bottom: 2.5rem
        padding: 1rem 1rem 0 1rem
        background-color: white
    .user-info-block
        display: flex
        align-items: center
    .user-name-block
        margin-left: 2rem
    .star-rating
        margin-top: 1rem
    .comment-block
        margin-top: .5rem
</style>
