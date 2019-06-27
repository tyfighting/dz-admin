<template>
    <div>
        <div class="header">
            <nav :style="{backgroundImage:'url('+restaurant.background+')'}" >
                <img :src="restaurant.image_path">
            </nav>
            <div class="index">
                <div class="index-1">
                    <p class="name">{{restaurant.name}}</p>
                    <p>
                        <span>评价{{restaurant.rating}}</span>
                        <span>月售{{restaurant.recent_order_num}}单</span>
                        <span>蜂鸟专送约{{restaurant.order_lead_time}}分钟</span>
                    </p>
                </div>
                <div class="index-2"></div>
                <div class="index-3">{{arrChange}}</div>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss">
.header{
    background: #fff;
    nav{
        height: 26.67vw;
        background-size: cover;
        position: relative;
        background-position: 50%;
        &:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-image: linear-gradient(0deg,hsla(0,0,0,0),rgba(0,0,0,.5));
        }
        img{
            width: 20vw;
            position: absolute;
            bottom: -4vw;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);
            border-radius: 5px;
        }
    }
    .index{
        padding-top: 8vw;
        .index-1{
            font-size: 12px;            
            p span{
                color: #999;
                margin: 0 5px;
            }
            .name{
                display: block;
                font-size: 18px;
                font-weight: bold;
                color: #333;
                margin-bottom: 5px;
            }
        }
    }
}
</style>
<script>
    export default {
        data(){
            return {
                restaurant:[],
                food:[],
                arrChange:''
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$axios(`/api/detail/index?restaurant_id=${to.query.restaurant_id}`)
                .then(res=>{
                    [vm.restaurant,vm.food]=[res.data.restaurant[0],res.data.food]
                    let arr=vm.restaurant.activety1.split(";")
                    let arrChange=[];
                    arr.forEach(element => {
                        arrChange.push('满'+element.split(',')[0]+'减'+element.split(',')[1])                            
                    });
                    vm.arrChange=arrChange.join(";")
                })
                .catch(err=>console.log)
            })
        },
        methods:{
            getInfo(){
                
            }
        }
    }
</script>
