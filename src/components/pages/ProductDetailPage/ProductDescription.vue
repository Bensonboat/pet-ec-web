<template>
    <div class="product-description">
        <div v-for='(item, index) in descriptionData' :key="index" class="description-set">
            <img :src="item.img" alt="" class="description-img">
            <div class="default-description-text description-text default-text-color">{{item.description}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductDescription',
        data(){
            return {
                descriptionData: [
                    {
                        img: '/images/animal.png',
                        description: 'This is product description, this item is awesome.'
                    },
                    {
                        img: '/images/test.png',
                        description: 'Have you ever tried Cesar ?? 好吃好吃 好好吃.'
                    },
                    {
                        img: '/images/test2.png',
                        description: '中國的支付市場是全世界成長最暴力的地方之一，但是中國市場目前是由充滿黨色彩的支付寶和微信佔去.'
                    },
                    {
                        img: '/images/goku4.jpeg',
                        description: ''
                    },
                    {
                        img: '/images/goku2.jpg',
                        description: ''
                    },
                    {
                        img: '/images/goku3.jpeg',
                        description: ''
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
.product-description
    .description-set
        padding: 1rem 2rem
        margin-top: 1rem
    .description-img
        width: 100%
        height: 100%
        margin-bottom: 1.8rem
    .description-text
        letter-spacing: 1px
        line-height: 30px
</style>