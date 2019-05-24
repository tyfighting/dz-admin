<template>
	<div>
		<div class="unlogin" v-show='userFlag'>
			<img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" />
			<p>登录后查看外卖订单</p>
			<router-link to="/login">立即登录</router-link>
		</div>
		<div v-show='!userFlag' class="order-list">
			<div class="order-item" v-for="(v,i) in orderList" :key="i">
					<p class="restaurant_name">
						<span>{{v.restaurant_name}}</span>
						<span>{{v.status_bar.title}}</span>
					</p>
					<p>{{v.formatted_created_at}}</p>
					<p class="group">
						<span>{{v.basket.group[0][0].name}}</span>
						<span>等{{v.basket.group[0].length}}件商品</span>
						<span>￥{{v.total_amount}}</span>
					</p>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<style>
	.unlogin{
		text-align: center;
		margin:70px 0 0 0;
	}
	.unlogin img{
		width: 50%;
	}
	.unlogin p{
		color: #999;
		font-size: 16px;
		margin: 20px 0 10px;
	}
	.unlogin a{
		background: #56d176;
		width: 30%;
		margin: 0px auto;
		line-height: 40px;
		color: #fff;
		font-size: 16px;
	}
	.order-item{
		background: #fff;
		margin-bottom: 10px;
		padding: 5px 20px;
	}
	.order-item p{
		display: flex;
		text-align: left;
		padding:3px 0px;
		color: #999;
		font-size: 10px;
	}
	.restaurant_name span:first-child{
		flex: 3;
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 30px;
		color: #333;
	}
	.restaurant_name span:last-child{
		flex: 2;
		line-height: 30px;
		color: #666;
		text-align: right;
	}
	.group{
		border-top: 1px solid #eee;
	}
	.group span{
		flex: 1;
		color: #666;
		line-height: 30px;
	}
	.group span:first-child{
		flex: 3;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.group span:last-child{
		flex: 1;
		color: #333;
		text-align: right;
	}
</style>
<script>
	import Footer from '../Common/Footer'
	export default{
		data(){
			return {
				userFlag:true,
				orderList:[]
			}
		},
		created(){
			if(localStorage.getItem("mobile")){
				this.userFlag=false;
			}else{
				this.userFlag=true;
			}
      		this.getOrder();
		},
		components:{
			Footer
		},
		watch:{
			$route(to,from){
				if(!localStorage.getItem("mobile")){
					this.$router.push({path:'/login'})
				}
			}
		},
		methods:{
			getOrder(){
				this.$axios.get('/user/order')
				.then(res => {
					this.orderList = res.data;
				})
				.catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>