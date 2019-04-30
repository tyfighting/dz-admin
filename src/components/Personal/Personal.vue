<template>
	<div class="personal">
		<div>
			<router-link to="/login">
				<div class="personal-top">
					<div class="personal-left">
						<img src="../../assets/loginLogo.png" alt="">
					</div>
					<div class="personal-center" v-show="!user.userFlag">
						<h3>登录/注册</h3>
						<p><Icon type="md-phone-portrait" />登录后享受更多特权</p>
					</div>
					<div class="personal-center" v-show="user.userFlag">
						<h3>{{user.name}}</h3>
						<p><Icon type="md-phone-portrait" />{{user.mobile}}</p>
					</div>
					<div class="personal-right">
						<span><Icon type="ios-arrow-forward" /></span>
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

		<!-- <Switch loading :value="true" /> -->
		<ul class="personal-list">
			<li>
				<router-link to="">
					<span><Icon type="md-pin" />我的地址</span>
					<span><Icon type="ios-arrow-forward" /></span>
				</router-link>
			</li>
		</ul>
		<ul class="personal-list">
			<li>
				<router-link to="">
					<span><Icon type="md-basket" />金币商城</span>
					<span><Icon type="ios-arrow-forward" /></span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span><Icon type="logo-usd" />分享拿10元现金</span>
					<span><Icon type="ios-arrow-forward" /></span>
				</router-link>
			</li>
		</ul>
		<ul class="personal-list">
			<li>
				<router-link to="">
					<span><Icon type="md-headset" />我的客服</span>
					<span><Icon type="ios-arrow-forward" /></span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span><Icon type="md-download" />下载饿了么APP</span>
					<span><Icon type="ios-arrow-forward" /></span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span><Icon type="md-document" />规则中心</span>
					<span><Icon type="ios-arrow-forward" /></span>
				</router-link>
			</li>
		</ul>
		<div class="private">
			<router-link to="">隐私政策</router-link>
		</div>
		<Footer></Footer>
	</div>
</template>
<style scoped>
.personal i{
	vertical-align: baseline;
}
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
	padding: 15px 10px 15px 10px;
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
.personal-list li i{
	color:#2395ff;
	font-size: 18px;
	padding:0 5px;
	vertical-align: top;
}
.personal-list li i.ivu-icon-ios-arrow-forward{
	color: #999
}
.private a{
	margin: 20px 0;
	color: #2395ff;
}
</style>
<script type="text/javascript">
	import Footer from '../Common/Footer'
	import { Icon} from 'iview';
	export default{
		data:function(){
			return {
				user:{
					userFlag:window.localStorage.getItem("userFlag"),
					name:window.localStorage.getItem("name"),
					mobile:window.localStorage.getItem("mobile")
				}
				
			}
		},
		components:{
			Footer,
			Icon
		}
	}
</script>