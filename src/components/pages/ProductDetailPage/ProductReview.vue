<template>
  <div class="product-review">
    <customer-review />
  </div>
</template>

<script>
import CustomerReview from "@/components/layouts/CustomerReview";

export default {
  name: "ProductReview",
  components: {
    CustomerReview
  }
};
</script>

<style lang="sass" scoped>
.product-review
    // background-color: rgba(0,0,0,.05)
    // padding: 1.5rem 2rem
</style>
