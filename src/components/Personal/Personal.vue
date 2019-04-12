<template>
	<div class="personal">
		<div>
			<router-link to="/Login/Login">
				<div class="personal-top">
					<div class="personal-left">
						<img src="../../assets/loginLogo.png" alt="">
					</div>
					<div class="personal-center">
						<h3>登录/注册</h3>
						<p>登录后享受更多特权</p>
					</div>
					<div class="personal-right">
						<span>></span>
					</div>
				</div>
			</router-link>
			<div class="personal-bottom">
				<div>
					<p>红包</p>
				</div>
				<div>
					<p>金币</p>
				</div>
			</div>
		</div>
		<ul class="personal-list">
			<li>
				<router-link to="">
					<span>我的地址</span>
					<span>></span>
				</router-link>
			</li>
		</ul>
		<ul class="personal-list">
			<li>
				<router-link to="">
					<span>金币商城</span>
					<span>></span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span>分享拿10元现金</span>
					<span>></span>
				</router-link>
			</li>
		</ul>
		<ul class="personal-list">
			<li>
				<router-link to="">
					<span>我的客服</span>
					<span>></span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span>下载饿了么APP</span>
					<span>></span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span>规则中心</span>
					<span>></span>
				</router-link>
			</li>
		</ul>
		<div class="private">
			<router-link to="">隐私政策</router-link>
		</div>
		<Footer></Footer>
	</div>
</template>
<style type="text/css">
.personal-top{
	background-image: linear-gradient(90deg,#0af,#0085ff);	
	display: flex;
	align-items: center;
	padding:20px 10px;
	color: #fff;
}
.personal-left{
	flex: 1;
}
.personal-left img{
	width: 75%;
	border-radius: 50%;
}
.personal-center{
	flex: 3;
	text-align: left;
	padding-left: 10px;
}
.personal-center p{
	font-size:14px;
	margin-top:5px;
}
.personal-right{
	width: 30px;
}
.personal-bottom{
	display: flex;	
	background: #fff;
	border-bottom: 1px solid #ddd;
}
.personal-bottom div{
	flex: 1;
	font-size:12px;
	padding: 20px 0;
}
.personal-bottom div:first-child{
	border-right: 1px solid #ddd;
}
.personal-list{
	background: #fff;
	margin-top:15px;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
}
.personal-list li{
	margin-left: 30px; 
	padding: 15px 10px 15px 0;
	border-bottom: 1px solid #eee;	
}
.personal-list li a{
	display: flex;
	justify-content: space-between;
	color: #333;
}
.personal-list li:last-child{
	border:0;
}
.personal-list li a span{
	display: block;
}
.private a{
	margin: 20px 0;
	color: #2395ff;
}
</style>
<script type="text/javascript">
	import Footer from '../Common/Footer'
	export default{
		data:function(){
			return {

			}
		},
		components:{
			Footer
		}
	}
</script>