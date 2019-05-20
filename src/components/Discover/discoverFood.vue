<template>
    <div class="discover-food">
        <div class="food-item" v-for="(v,i) in foodLists" :key="v.food.id">
            <div class="img">
                <img :src="v.food.image_path">
            </div>
            <div class="food-content">
                <p class="title">{{v.food.name}}</p>
                <p class="month_sales">
                    <span>月售{{v.food.month_sales}}份</span>
                    <span>好评率{{v.food.satisfy_rate}}%</span>
                </p>
                <p>
                    <span class="price"><i>￥</i>{{v.food.price}}</span>
                    <span class="description">{{v.food.activities[0].description}}</span>
                </p>
                <p class="restaurant_name">{{v.food.restaurant_name}}</p>
            </div>
        </div>
        <div class="more">查看更多></div>
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
    margin: 15px 0 52px 0;
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
    text-align: left;
    color: #666;
}
.food-content .title{
    font-size: 18px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    font-weight: bold;
}
.food-content .month_sales{
    font-size: 10px;
}
.food-content .month_sales span{
    margin-right: 10px;
}
.food-content .price{
    font-size: 18px;
    color: #ff6000;
    font-weight: bold;
    vertical-align: middle;
}
.food-content .price i{
    font-size: 12px;
    font-style: normal;
}
.food-content .description{
    color: #ff6000;
    font-size: 10px;
    padding: 2px;
    border-radius: 3px;
    border: 1px solid #ff6000;
    margin-left: 3px;
}
.food-content .restaurant_name{
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-top: 1px dashed #dedede;
    padding: 8px 0 3px 0;
    color: #999;
}
.more{
    padding: 10px 0;
    font-size: 14px;
    color: #999;
}
</style>