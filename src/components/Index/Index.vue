<template>
	<div class="index">
		<Affix>
	        <span class="demo-affix">
	        	<router-link to="">
	        		<Icon type="md-search" />
	        		<span>搜索饿了么商家、商品名称</span>
	        	</router-link>
	        </span>
	    </Affix>
	    <div>
	    	<swiper :options="swiperOption">
			    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
			    	<ul>
			    		<li v-for="(v,i) in slide">
			    			<img :src=v.imgUrl>
				    		<p>{{v.name}}</p>
				    	</li>
			    	</ul>
			    </swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>
			</swiper>
	    </div>
		<Footer></Footer>
	</div>
</template>
<style type="text/css">
	.demo-affix{
		display: block;
		background-image: linear-gradient(90deg,#0af,#0085ff);
		padding:8px 0;
	}
	.demo-affix a{
		width:94%;
		margin: 0 auto;
		background: #fff;
		line-height: 36px;
		border-radius: 5px;
		font-size:14px;
		color:#999;
	}
	.demo-affix a i{
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
		width:50%;
	}
	.swiper-pagination-bullet{
		width: 10px;
		height: 2px;
	}
	.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
		bottom: 5px;
	}
</style>
<script type="text/javascript">
	import {Affix,Icon} from 'iview'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import Footer from '../Common/Footer'
	
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
		        swiperSlides: []
			}
		},
		components:{
			Footer,
			Affix,
			Icon,
			swiper,
    		swiperSlide
		},
		mounted(){
			this.getFoodList();
		},
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper
			}
		},
		methods:{
			getFoodList(){
				this.$axios.get("../../../static/json/foodNav.json")
				 .then((res)=>{
				 	console.log(res)
					let swiperSlides=res.data[0].entries;	
					for (var i = 0; i < swiperSlides.length; i+=10) {
						this.swiperSlides.push(swiperSlides.slice(i,i+10));
					}
				})
			}
		}
	}

</script>