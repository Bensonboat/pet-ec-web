<template>
    <div class="product-list-page">
        <product-list-filter-row/>
        <product-list/>
    </div>
</template>

<script>
import ProductListFilterRow from './ProductListFilterRow';
import ProductList from './ProductList.vue';

export default {
    name: 'ProductListPage',
    components: { 
        ProductList, 
        ProductListFilterRow 
    },
    
}
</script>

<style lang="sass" scoped>
.product-list-page
    
</style>
