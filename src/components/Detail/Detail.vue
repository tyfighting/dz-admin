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
                <div class="index-3" v-if="restaurant.activity[0]" type="primary" @click="modal = true">
                    <span class="activity1" v-if="restaurant.activity[0].icon_name=='首单'">{{restaurant.activity[0].icon_name}}</span>
                    <span class="activity2" v-else-if="restaurant.activity[0].icon_name=='满减'||restaurant.activity[0].icon_name=='折扣'">{{restaurant.activity[0].icon_name}}</span>
                    <span class="activity3" v-else-if="restaurant.activity[0].icon_name=='特价'">{{restaurant.activity[0].icon_name}}</span>
                    <span class="activity4" v-else-if="restaurant.activity[0].icon_name=='新客'">{{restaurant.activity[0].icon_name}}</span>
                    <span>{{restaurant.activity[0].description}}</span>
                    <b v-show="restaurant.activity.length>'2'">{{restaurant.activity.length}}个优惠<Icon type="md-arrow-dropdown" /></b>
                </div>
            </div>
        </div>
        <div class="wrap">
            <div class="menuWrapper" ref="menuWrapper">
                <ul class="content">
                    <li v-for="(v,i) in food" :key="v.type">{{v.type_name}}</li>
                </ul>
            </div>
            <div class="foodsWrapper" ref="foodsWrapper">
                <ul class="content" v-for="(value,index) in food" :key="value.type">
                    <li v-for="(v,i) in value.foods" :key="v.food_id">{{v.name}}</li>
                </ul>
            </div>
        </div>
        <Modal v-model="modal">
            <p slot="header">
                <span>优惠活动</span>
            </p>
            <div class="center">
                <p v-for="(v,i) in restaurant.activity" :key="i">
                    <span class="activity1" v-if="v.icon_name=='首单'">{{v.icon_name}}</span>
                    <span class="activity2" v-else-if="v.icon_name=='满减'||v.icon_name=='折扣'">{{v.icon_name}}</span>
                    <span class="activity3" v-else-if="v.icon_name=='特价'">{{v.icon_name}}</span>
                    <span class="activity4" v-else-if="v.icon_name=='新客'">{{v.icon_name}}</span>
                    <span>{{v.description}}</span>
                </p>
            </div>
            <div slot="footer"></div>
        </Modal>
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
                font-size: 20px;
                font-weight: bold;
                color: #333;
                margin-bottom: 5px;
            }
        }
        .index-3{
            width: 80%;
            margin: 0 auto;
            text-align: left;
            position: relative;
            padding: 10px 0;
            span:first-child{
                color: #fff;
                padding: 2px;
                font-size: 10px;
            }
            .activity1{
		        background: #70bc46;
            }
            .activity2{
                background: #f07373;
            }
            .activity3{
                background: #f1884f;
            }
            .activity4{
                background: #00b762;
            }
            .activity5{
                background: #999;
            }
            b{
                position: absolute;
                right: 0;
            }
        }
    }
}
.wrap{
    display: flex;
    justify-content: space-between;
}
.ivu-modal{
    width: 100%!important;
    margin: 0;
    bottom: 0;
    position: fixed;
    top: auto;
    .ivu-modal-content{
        box-shadow: none;
        border-radius: 0;
        padding-top:20px;
        .ivu-modal-header p{
            text-align: center;
            font-size: 18px; 
        }
        .center{
            line-height: 26px;
            padding-bottom:30px; 
            span:first-child{
                color: #fff;
                padding: 2px;
                font-size: 10px;
            }
            .activity1{
                background: #70bc46;
            }
            .activity2{
                background: #f07373;
            }
            .activity3{
                background: #f1884f;
            }
            .activity4{
                background: #00b762;
            }
            .activity5{
                background: #999;
            }
        }
        .ivu-modal-footer,.ivu-modal-header{
            border: 0;
        }
    }
}
</style>
<script>
    import {Modal,Icon} from 'iview'
    import BScroll from 'better-scroll'
    export default {
        data(){
            return {
                restaurant:{activity:[]},
                food:[],
                modal: false,
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$axios(`/api/detail/index?restaurant_id=${to.query.restaurant_id}`)
                .then(res=>{
                    [vm.restaurant,vm.food]=[res.data.restaurant[0],res.data.food]
                    let arr=vm.restaurant.activity1.split(";")
                    vm.restaurant.activity=[]
                    let arrChange=[];
                    arr.forEach(element => {
                        arrChange.push('满'+element.split(',')[0]+'减'+element.split(',')[1])                            
                    });
                    vm.changeInfo(vm.restaurant.activity1,vm.restaurant.activity,'满减',arrChange.join(";"));					
                    vm.changeInfo(vm.restaurant.activity2,vm.restaurant.activity,'特价','特价商品'+vm.restaurant.activity2+'元起');
					vm.changeInfo(vm.restaurant.activity3,vm.restaurant.activity,'首单','新用户下单立减'+vm.restaurant.activity3+'元');
					vm.changeInfo(vm.restaurant.activity4,vm.restaurant.activity,'新客','本店新用户立减'+vm.restaurant.activity4+'元');
					vm.changeInfo(vm.restaurant.activity5,vm.restaurant.activity,'折扣','折扣商品'+vm.restaurant.activity5+'折起');
                    vm.food=vm.mapArr(vm.food)
                })
                .catch(err=>console.log)
            })
        },
        mounted(){
            this.$nextTick(()=>{
                this.initScroll();
            })
        },
        methods:{
			changeInfo(str,arr,name,desc){
				if(str){
					arr.push({
						icon_name:name,
						description:desc
					});
				}
            },
            initScroll(){
                this.menuScroll=new BScroll(this.$refs.menuWrapper,{
                    click: true
                })
                this.foodsScroll=new BScroll(this.$refs.foodsScroll,{
                    click: true
                })
            },
            mapArr(arr) {
                let newArr =[];
                let newArr1 =[];
                arr.forEach((v, i) => {
                    let index = -1;
                    let alreadyExists = newArr.some((newV, j) => {
                        if (v.type === newV.type) {
                            index = j;
                            return true;
                        }
                    });
                    if (!alreadyExists) {
                        newArr.push({
                            type: v.type,
                            type_name:v.type_name,
                            foods:[{
                                benefit: v.benefit,
                                description: v.description,
                                discount: v.discount,
                                food_id: v.food_id,
                                id: v.id,
                                lowest: v.lowest,
                                month_sales: v.month_sales,
                                name: v.name,
                                price: v.price,
                                restaurant_id: v.restaurant_id,
                                satisfy_rate: v.satisfy_rate,
                                text: v.text
                            }]
                        });
                    } else {
                        newArr[index].foods.push({
                            benefit: v.benefit,
                            description: v.description,
                            discount: v.discount,
                            food_id: v.food_id,
                            id: v.id,
                            lowest: v.lowest,
                            month_sales: v.month_sales,
                            name: v.name,
                            price: v.price,
                            restaurant_id: v.restaurant_id,
                            satisfy_rate: v.satisfy_rate,
                            text: v.text
                        })
                    }
                });
                return newArr;
            }
        },
        components:{
            Modal,
            Icon
        }
    }
</script>
