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
	    <Restaurant :restaurant='restaurants'></Restaurant>
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
	
</style>
<script type="text/javascript">
	import {Affix,Icon,Divider,Row,Col} from 'iview'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import Restaurant from './Restaurant'
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
		        toggleFlag:true,
		        toggleNum:-1,
		        restaurants:[]
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
    		Restaurant
		},
		created(){
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
					console.log(res)			
					for (var i = 0; i < res.data.items.length; i++) {
						res.data.items[i].isShow=false;
					};
					this.restaurants=res.data.items
				})
			},
		}
	}

</script>