<template>
    <div class="search-page">
        <search-input-block/>
        <div class="search-content-block">
            <search-tip-block :modalData='recentlySearchData'/>
            <search-tip-block :modalData='popularSearchData' style="margin-top: 1rem"/>
        </div>
    </div>
</template>

<script>
import SearchInputBlock from './SearchInputBlock'
import SearchTipBlock from './SearchTipBlock'
    export default {
        name: 'SearchPage',
        components: {
            SearchInputBlock,
            SearchTipBlock
        },
        data(){
            return {
                recentlySearchData: {
                    title: '近期搜尋',
                    icon: '',
                    keyWords: ['狗飼料', '貓砂', 'Royal', '外出用品'],
                    isTag: false
                },
                popularSearchData: {
                    title: '熱門搜尋',
                    icon: '',
                    keyWords: ['皇家', '希爾斯', '化毛', '處方配方', '最新上架', '新款豆腐砂'],
                    isTag: true
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
.search-page
    .search-content-block
        padding: 1rem
</style>