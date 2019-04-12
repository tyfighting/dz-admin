<template>
	<div class="footer">
		<ul>
			<li><router-link to="/Index">首页</router-link></li>
			<li><router-link to="/">发现</router-link></li>
			<li><router-link to="/">订单</router-link></li>
			<li><router-link to="/Personal/Personal">我的</router-link></li>
		</ul>
	</div>
</template>
<style type="text/css">
	.footer{
		background: #fff;
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		border-top: 1px solid #ddd;
	}
	.footer ul{
		display: flex;
	}
	.footer ul li{
		flex: 1;
		text-align: center;
	}
	.footer ul li a{
		display: block;
		color:#999;
		padding: 20px 0;
	}
	.footer ul li a.router-link-exact-active{
		color: #2395ff;
	}
</style>
<script type="text/javascript">
	export default{
		data:function(){
			return {

			}
		}
	}
</script>