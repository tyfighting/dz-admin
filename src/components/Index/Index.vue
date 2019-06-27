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
			    		<li v-for="(v,i) in slide" :key="v.id">
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
	    </div>
		<div class="order">
			<div :class="{active:activeFlag[0]}" @click="order(1)">综合排序<Icon type="md-arrow-dropdown" /></div>
			<div :class="{active:activeFlag[1]}" @click="order(2)">距离最近</div>
			<div :class="{active:activeFlag[2]}" @click="order(3)">品质联盟</div>
			<div :class="{active:activeFlag[3]}" @click="order(4)">筛选<Icon type="ios-funnel" /></div>
		</div>
	    <Restaurant :restaurants='restaurants'></Restaurant>
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
	.order{
		position: sticky;
		top: 52px;
		background: #fff;
		padding:0px 2%;
		z-index: 10;
		display: flex;
	}
	.order div{
		line-height: 38px;
		color: #666;
		flex: 1;
		text-align: center;
	}
	.order div.active{
		color: #333;    
		font-weight: bold;
	}
</style>
<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import {Icon,Affix,Divider} from 'iview'
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
				restaurants:[],
				activeFlag:[true,false,false,false]
			}
		},
		components:{
			Footer,
			swiper,
    		swiperSlide,
			Restaurant,
			Icon,
			Affix,
			Divider
		},
		created(){
			this.$axios.all([this.getEntries(),this.getRestaurant()])
			.then(this.$axios.spread( (acct, perms)=> {
				[this.swiperSlide,this.restaurants]=[acct.data.entries, perms.data.restaurant];
				for (let i = 0; i < this.restaurants.length; i++) {
					this.restaurants[i].activity=[];
					this.restaurants[i].supports=[];
					// Object.defineProperty(this.restaurants[i],'isShow',{
					// 	value:false
					// })
					this.restaurants[i].isShow=false;
					if(this.restaurants[i]['activety1']){
						let arr=this.restaurants[i]['activety1'].split(";")
						let arrChange=[];
						arr.forEach(element => {
							arrChange.push('满'+element.split(',')[0]+'减'+element.split(',')[1]);                           
						});
						this.restaurants[i].activity.push({
							icon_name:'减',
							description:arrChange.join(";")
						});
					}
					this.changeInfo(this.restaurants[i].activety2,this.restaurants[i].activity,'特','特价商品'+this.restaurants[i].activety2+'元起');
					this.changeInfo(this.restaurants[i].activety3,this.restaurants[i].activity,'首','新用户下单立减'+this.restaurants[i].activety3+'元');
					this.changeInfo(this.restaurants[i].activety4,this.restaurants[i].activity,'新','本店新用户立减'+this.restaurants[i].activety4+'元');
					this.changeInfo(this.restaurants[i].activety5,this.restaurants[i].activity,'折','折扣商品'+this.restaurants[i].activety5+'折起');
					this.changeInfo(this.restaurants[i].supports1,this.restaurants[i].supports,'赔','商家原因导致订单取消，赔付代金券');
					this.changeInfo(this.restaurants[i].supports2,this.restaurants[i].supports,'保','该商户食品安全已由国泰产险承担，食品安全有保障');
					this.changeInfo(this.restaurants[i].supports3,this.restaurants[i].supports,'票','该商家支持开发票，请在下单时填写好发票抬头');
					this.changeInfo(this.restaurants[i].supports4,this.restaurants[i].supports,'准','超时10分钟立享赔付');
				};
				for (var j = 0; j < this.swiperSlide.length; j+=10) {
					this.swiperSlides.push(this.swiperSlide.slice(j,j+10));
				}
			}))
			.catch(err=>console.log(err));
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
			getEntries(){
				return this.$axios.get('/api/index/entries')
			},
			getRestaurant(){
				return this.$axios.get('/api/index/restaurant?order=1')
			},
			change(){
				this.restaurants=_shuffle(this.restaurants)
			},
			order(num){
				this.activeFlag=[false,false,false,false];
				this.activeFlag[num-1]=true;
				if(num!='4'){
					this.$axios.get(`/api/index/restaurant?order=${num}`)
					.then((res)=>{
						this.restaurants=res.data.restaurant
						for (var i = 0; i < this.restaurants.length; i++) {
							this.$set(this.restaurants[i],'isShow',false)
						};
					})
				}
			}
		}
	}

</script>