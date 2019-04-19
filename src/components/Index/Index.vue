<template>
	<div class="index">
		<div class="nav">
			<Affix>
		        <div class="demo-affix">
		        	<router-link to="">
		        		<Icon type="md-search" />
		        		<span>搜索饿了么商家、商品名称</span>
		        	</router-link>
		        </div>
		    </Affix>				
		</div>
	    <div>
	    	<swiper :options="swiperOption">
			    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
			    	<ul>
			    		<li v-for="(v,i) in slide" >
			    			<img :src=v.imgUrl>
				    		<p>{{v.name}}</p>
				    	</li>
			    	</ul>
			    </swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>
			</swiper>
	    </div>
	    <div class="banner">
	    	<div class="quality">
	    		<div>
	    			<h3>品质套餐</h3>
	    			<p>搭配齐全吃的好</p>
	    			<p><router-link to="">立即抢购<Icon type="ios-arrow-forward" /></router-link></p>
	    		</div>
	    		<div>
	    			<img src="../../assets/food.png">
	    		</div>
	    	</div>
	    	<swiper :options="swiperOption2">
	    		<swiper-slide v-for="(value,index) in banner" :key="index">
	    			<img :src="value">
	    		</swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>
	    	</swiper>
	    </div>
	    <div class="seller">
	    	<div class="divider">
	    		<Divider>推荐商家</Divider>
	    	</div>
	    	<div class="order">
	    		<Row>
	    			<Col span="6">综合排序<Icon type="md-arrow-dropdown" /></Col>
			        <Col span="6">距离最近</Col>
			        <Col span="6">品质联盟</Col>
			        <Col span="6">筛选<Icon type="ios-funnel" /></Col>
	    		</Row>
	    	</div>
	    </div>
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
					<div class="activity" v-show="value.restaurant.activities" :class="{activityShow:index==toggleNum}">
						<p v-for="(v,i) in value.restaurant.activities" :key="i">
							<span class="activity1" v-if="v.icon_name=='首'">{{v.icon_name}}</span>
							<span class="activity2" v-else-if="v.icon_name=='减'||v.icon_name=='折'">{{v.icon_name}}</span>
							<span class="activity3" v-else-if="v.icon_name=='换'||v.icon_name=='特'">{{v.icon_name}}</span>
							<span class="activity4" v-else-if="v.icon_name=='新'">{{v.icon_name}}</span>
							<span>{{v.description}}</span>
						</p>
						<div @click="toggleDetail(index)">
							{{value.restaurant.activities.length}}个活动
							<Icon type="md-arrow-dropdown" :class="{dropUp:index==toggleNum}"/>
						</div>
					</div>
				</Col>
			</Row>
		</div>
		<Footer></Footer>
	</div>
</template>
<style type="text/css">
	.nav .demo-affix{
		display: block;
		background-image: linear-gradient(90deg,#0af,#0085ff);
		padding:8px 0;
	}
	.nav .demo-affix a{
		width:94%;
		margin: 0 auto;
		background: #fff;
		line-height: 36px;
		border-radius: 5px;
		font-size:14px;
		color:#999;
	}
	.nav .demo-affix a i{
		font-size:20px;
	}
	.swiper-slide ul{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding:10px 0 20px 0;
		background: #fff
	}
	.swiper-slide ul li{
		width: 20%;
		text-align: center;
	}
	.swiper-slide ul li img{
		width:60%;
	}
	.swiper-slide ul li p{
		color: #666;
		font-size: 14px;
	}
	.swiper-pagination-bullet-active{			
		background: #00a6ff;
		opacity: 0.2;
	}
	.swiper-pagination-bullet{
		width: 10px;
		height: 2px;	
	}
	.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
		bottom: 5px;
	}
	.banner{
		padding:10px 2%;
		background:#fff;
	}
	.quality{
		display: flex;
		background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
		align-items: center;
		margin-bottom: 5px;
	}
	.quality div{
		flex:1;
	}
	.quality div:first-child{
		text-align: left;
		padding-left: 20px;
	}
	.quality div h3{
		font-size: 18px;
	}
	.quality div span{
		color:#777;
		font-size: 14px;
	}
	.quality div a{
		color:#af8260;
		font-size: 12px;
		font-weight: bold;
	}
	.banner .quality img{
		width: 80%
	}
	.banner .swiper-container{
		height: 24.5vw;
	}
	.banner img{
		width:100%;
	}
	.seller{
		background: #fff;
		padding:10px 2%;		
	}
	.seller .divider{
		width:50%;
		margin: 0 auto;
	}
	.seller .divider .ivu-divider{
		margin: 0;
	}
	.seller .ivu-divider-inner-text{
		font-size: 14px;	
		line-height: 28px;
		padding: 0 10px;	
	}
	.ivu-divider-horizontal.ivu-divider-with-text-center:after, .ivu-divider-horizontal.ivu-divider-with-text-center:before{
		border-color: #999;
	}
	.order .ivu-row{
		margin: 20px 0 0 0;
	}
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
</style>
<script type="text/javascript">
	import {Affix,Icon,Divider,Row,Col,Rate} from 'iview'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import Footer from '../Common/Footer'
	import banner1 from '../../../static/image/banner/banner1.jpeg'
	import banner2 from '../../../static/image/banner/banner2.jpeg'
	import banner3 from '../../../static/image/banner/banner3.jpeg'
	import banner4 from '../../../static/image/banner/banner4.jpeg'
	export default{
		data:function(){
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
					loop:true,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper 
　　					observeParents:true,//修改swiper的父元素时，自动初始化swiper 
		        },
		        swiperOption2:{
		        	loop:true,
		        	autoplay:true,		        	
					pagination: {
						el: '.swiper-pagination'
					},
		        },
		        swiperSlides: [],
		        banner:[banner1,banner2,banner3,banner4],
		        restaurants:[],
		        toggleFlag:true,
		        toggleNum:-1
			}
		},
		components:{
			Footer,
			Affix,
			Icon,
			swiper,
    		swiperSlide,
    		Divider,
    		Row,
    		Col,
    		Rate
		},
		mounted(){
			this.getFoodList();
			this.getRestaurants();
		},
		methods:{
			getFoodList(){
				this.$axios.get("../../../static/json/foodNav.json")
				.then((res)=>{
					let swiperSlides=res.data[0].entries;	
					for (var i = 0; i < swiperSlides.length; i+=10) {
						this.swiperSlides.push(swiperSlides.slice(i,i+10));
					}
				})
			},
			getRestaurants(){
				this.$axios.get("../../../static/json/restaurants.json")
				.then((res)=>{
					this.restaurants=res.data.items
					console.log(this.restaurants[0].restaurant)
				})
			},
			toggleDetail(index){
				if(this.toggleFlag){
					this.toggleNum=index;
				}else{
					this.toggleNum=-1;
				}
				this.toggleFlag=!this.toggleFlag
				console.log(this.toggleNum,this.toggleFlag)
			}
		}
	}

</script>