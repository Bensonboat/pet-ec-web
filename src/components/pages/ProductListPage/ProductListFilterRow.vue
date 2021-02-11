<template>
    <div class="product-list-filter-row default-product-list-filter-row">
        <div class="list-subject default-deep-green-color">{{ listSubject }}</div>
        <div class="basic-order-filter">
            <base-select style="width: 100px; height: 30px"/>
            <!-- <el-select v-model="orderFilter" placeholder="請選擇" size="mini" style="width: 14rem; border: none">
                <el-option
                    v-for="item in orderFilterOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select> -->
        </div>
    </div>
</template>

<script>
// import BaseSelect from '@/components/layouts/BaseSelect'

export default {
    name: "ProductListFilterRow",
    components: {
        // BaseSelect
    },
    data() {
        return {
            listSubject: "狗窩 / 吊床",
            orderFilter: '',
            orderFilterOptions: [
                {
                    label: 'test1',
                    value: 'test1'
                },
                                {
                    label: 'test2',
                    value: 'test2'
                },
                                {
                    label: 'test3',
                    value: 'test3'
                }

            ]
        };
    },
};
</script>

<style lang="sass" scoped>
.product-list-filter-row
    display: flex
    justify-content: space-between
    align-items: center
    padding: 1.6rem 1.5rem
    // margin-bottom: 2rem
    .list-subject
        font-size: 1.2rem
        font-weight: 500
</style>