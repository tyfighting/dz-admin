<template>
    <div class="discover-food">
        <div class="food-item" v-for="(v,i) in foodLists" :key="v.food.id">
            <div class="img">
                <img :src="v.food.image_path">
            </div>
            <div class="food-content">
                <p class="title">{{v.food.name}}</p>
                <p>
                    <span>月售{{v.food.month_sales}}份</span>
                    <span>好评率{{v.food.satisfy_rate}}%</span>
                </p>
                <p>
                    <span><i>￥</i>{{v.food.price}}</span>
                    <span>{{v.food.activities[0].description}}</span>
                </p>
                <p>{{v.food.restaurant_name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        foodList:{
            default:null
        }
    },
    data () {
        return {
            foodLists:null
        }
    },
    watch:{
        foodList:{
            deep:true,
            handler(val){
                this.foodLists=val
            }
        }
    }
}
</script>
<style lang='css' scoped>
.discover-food{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    background: #fff;
    margin-top: 15px;
    padding: 5px;
}
.food-item{
    width: 48%;
    box-sizing: border-box;
    margin: 10px 1%;
    border:1px solid #eee;
}
.food-item .img{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.food-item .img img{
    width: 100%;
}
.food-content{
    padding: 5px 10px;
}
.food-content .title{
    font-size: 18px;
    line-height: 30px;
}
</style>