<template>
    <div class="detail-nav-row">
        <div 
            v-for="(item, index) in navData" 
            :key='index'
            class='default-nav-route nav-route default-text-color'
            :class="[item.selected ? 'default-current-route' : '']"
            @click="toggleNavRoute(index)"
        >
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailNavRow',
    data(){
        return {
            navData: [
                {
                    name: '商品介紹',
                    selected: true,
                    value: 'description',
                },
                {
                    name: '送貨及付款',
                    selected: false,
                    value: 'fulfillment'
                },
                {
                    name: '顧客評價',
                    selected: false,
                    value: 'review'
                }
            ]
        }
    },
    methods: {
        toggleNavRoute(index){
            this.navData = this.navData.map(item => {
                item.selected = false
                return item
            });
            this.navData[index].selected = true;
            this.$emit('toggle-product-info', this.navData[index].value)
        }
    }
}
</script>

<style lang="sass" scoped>
.detail-nav-row
    display: flex
    align-items: center
    justify-content: space-around
    padding: .5rem
    margin-top: 2rem
    background-color: #fff
    .nav-route
        // flex: 1
        text-align: center
        padding: .8rem 0
        letter-spacing: 1px
        cursor: pointer
        display: flex
</style>