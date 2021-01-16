<template>
    <div class="list-filter-row">
        <div class="list-subject default-text-color">{{ listSubject }}</div>
        <div class="basic-order-filter">
            <el-select v-model="orderFilter" placeholder="請選擇" size="mini" style="width: 14rem; border: none">
                <el-option
                    v-for="item in orderFilterOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductListFilterRow",
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
.list-filter-row
    display: flex
    justify-content: space-between
    align-items: center
    padding: 2rem
    .list-subject
        font-size: 1.5rem

</style>