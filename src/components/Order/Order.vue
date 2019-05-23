<template>
	<div>
		<div class="unlogin" v-show='userFlag'>
			<img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" />
			<p>登录后查看外卖订单</p>
			<router-link to="/login">立即登录</router-link>
		</div>
		<div>
			<div>
				<router-link to="/helloVue">helloVue</router-link>
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
</style>
<script>
	import Footer from '../Common/Footer'
	export default{
		data(){
			return {
				userFlag:true
			}
		},
		created(){
			if(localStorage.getItem("mobile")){
				this.userFlag=false;
			}else{
				this.userFlag=true;
			}
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
		}
	}
</script>