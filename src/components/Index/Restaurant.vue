<template>
	<div class="restaurants">
		<Row v-for="(value,index) in restaurants" :key="index">
			<Col span="5" class="ivu-col-img">
				<img :src="value.restaurant.image_path">
			</Col>
			<Col span="19" class="ivu-col-text">
				<p class="Rname">
					<span><b v-show="value.restaurant.is_premium">品牌</b>{{value.restaurant.name}}</span>
					<span>
						<Icon type="md-phone-portrait" />
						<b>...</b>
					</span>
				</p>
				<p>
					<span>
						<Rate disabled v-model="value.restaurant.rating"></Rate>
						<span>{{value.restaurant.rating=='0'?'':value.restaurant.rating}}</span>
						<span>月售{{value.restaurant.recent_order_num}}单</span>
					</span>
					<span class="delivery" v-show="value.restaurant.delivery_mode">{{value.restaurant.delivery_mode?value.restaurant.delivery_mode.text:''}}</span>
				</p>
				<p>
					<span>
						￥{{value.restaurant.float_minimum_order_amount}}起送
						<Divider type="vertical" />
						配送费￥{{value.restaurant.float_delivery_fee}}
					</span>
					<span>
						{{value.restaurant.distance}}m    							
						<Divider type="vertical" />
						{{value.restaurant.order_lead_time}}分钟
					</span>
				</p>
				<div class="support">
					<span v-for="(v,i) in value.restaurant.support_tags" :key="i" v-show="v.type!=20">{{v.text}}</span>
					<span class="reason" v-show="value.restaurant.recommend.reason!=''"><Icon type="md-thumbs-up" />{{value.restaurant.recommend.reason}}</span>
				</div>
				<div class="activity" :class="{activityShow:value.isShow}" v-show="value.restaurant.activities">
					<p v-for="(v,i) in value.restaurant.activities" :key="i">
						<span class="activity1" v-if="v.icon_name=='首'">{{v.icon_name}}</span>
						<span class="activity2" v-else-if="v.icon_name=='减'||v.icon_name=='折'">{{v.icon_name}}</span>
						<span class="activity3" v-else-if="v.icon_name=='换'||v.icon_name=='特'">{{v.icon_name}}</span>
						<span class="activity4" v-else-if="v.icon_name=='新'">{{v.icon_name}}</span>
						<span>{{v.description}}</span>
					</p>
					<section  v-show="value.restaurant.supports">
						<p v-for="(v,i) in value.restaurant.supports" :key="i">
							<span class="activity5">{{v.icon_name}}</span>
							<span>{{v.description}}</span>
						</p>
					</section>
					<div @click="toggleDetail(index,value.restaurant.authentic_id)" v-show="value.restaurant.activities.length+value.restaurant.supports.length>'2'">
						{{value.restaurant.activities.length+value.restaurant.supports.length}}个活动
						<Icon type="md-arrow-dropdown" :class="{dropUp:value.isShow}"/>
					</div>
				</div>
			</Col>
		</Row>
	</div>
</template>
<style>
	.restaurants{
		background: #fff;
		padding-bottom: 52px;
	}
	.restaurants .ivu-row{
		padding: 10px 0;
	    border-bottom: 1px solid #eee;
	}
	.restaurants .ivu-row:last-child{
		border:0;
	}
	.restaurants .ivu-col-img img{
		width: 64px;
		height: 64px;
		border:1px solid rgba(0,0,0,.08);
		border-radius: 3px;
	}
	.restaurants .ivu-col-text{
		text-align: left;
		padding:0 5px;
	}
	.restaurants .ivu-col-text>p{
		display: flex;
		justify-content: space-between;
		font-size: 10px;
    	line-height: 20px;
	}
	.restaurants .ivu-col-text p.Rname{
		font-size: 14px;
	}
	.restaurants .ivu-rate{
		font-size: 10px;
	}
	.restaurants .ivu-rate-star{
		margin: 0
	}
	.restaurants .delivery{
		background-image: linear-gradient(45deg,#0085ff,#0af);
		color:#fff;
		padding: 0 2px;
    	border-radius: 2px;
    	height: 14px;
	    line-height: 14px;
	    margin: 3px 0;
	}
	.restaurants .ivu-divider, .ivu-divider-vertical{
		margin: 0 1px;
	}
	.restaurants .support{
		display: flex;
	}
	.restaurants .support span{
		padding: 0px 2px;
		border:1px solid #dddddd;
		color: #666;
		font-size:10px;
	    line-height: 14px;
	    height: 16px;
	    margin: 3px 5px 3px 0;
	}
	.restaurants .support span.reason{
		border:0;
		color: #e8470b;
		margin:4px 5px 4px 0;
	}
	.restaurants .support span.reason i{
		font-size: 14px;
    	vertical-align: text-bottom;
	}
	.restaurants .activity{
		font-size: 10px;
	    line-height: 20px;
	    height: 45px;
	    overflow: hidden;
	    border-top: 1px solid #eee;
	    margin-top: 5px;
	    padding-top: 5px;
	    position: relative;
	}
	.restaurants .activityShow{
		height: auto;
	}
	.restaurants .activity div{
		position: absolute;
	    top: 0px;
	    right: 0px;
	    color: #666;
	    padding:5px;
	}
	.restaurants .activity div i{
		transition: all .3s ease-in-out;
	}
	.restaurants .activity div i.dropUp{
		transform: rotate(180deg);
	}
	.restaurants .activity p span:first-child{
		color: #fff;
		padding:1px 2px;
		border-radius: 2px;
	}
	.restaurants .activity p span:last-child{
		display: inline-block;
	    width: 80%;
	    height: 20px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    vertical-align: top;
	    white-space:nowrap;
	}
	.restaurants .activity .activity1{
		background: #70bc46;
	}
	.restaurants .activity .activity2{
		background: #f07373;
	}
	.restaurants .activity .activity3{
		background: #f1884f;
	}
	.restaurants .activity .activity4{
		background: #00b762;
	}
	.restaurants .activity .activity5{
		background: #999;
	}
</style>
<script>	
	import {Icon,Divider,Row,Col,Rate} from 'iview'
	export default{
		prop:{
			restaurant:Array
		},
		data(){
			return {
				restaurants:[]
			}
		},
		methods:{			
			toggleDetail(index,id){
				for (var i = 0; i < this.restaurants.length; i++) {
					if(this.restaurants[i].restaurant.authentic_id==id){
						this.restaurants[i].isShow=!this.restaurants[i].isShow;
					}
				};
			}
		},
		components:{
			Icon,
			Divider,
			Row,
			Col,
			Rate
		},
		watch:{
	        restaurant(val){    //message即为父组件的值，val参数为值
	          	this.restaurants = val    //将父组件的值赋给childrenMessage 子组件的值
	        }
	    }
	}	
</script>