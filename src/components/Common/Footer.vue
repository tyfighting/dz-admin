<template>
	<div class="footer">
		<ul>
			<li><router-link to="/"><Icon type="md-home" /><p>首页</p></router-link></li>
			<li><router-link to="/calendar"><Icon type="md-compass" /><p>日历</p></router-link></li>
			<li><router-link to="/login"><Icon type="md-list-box" /><p>订单</p></router-link></li>
			<li><router-link to="/personal"><Icon type="md-person"/><p>我的</p></router-link></li>
		</ul>
	</div>
</template>
<style type="text/css" scoped>
	.footer{
		background: #fff;
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		border-top: 1px solid #ddd;
		z-index: 10;
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
		padding: 7px 0;
	}
	.footer i{
		font-size:18px;
	}
	.footer ul li a.router-link-exact-active{
		color: #2395ff;
	}
</style>
<script type="text/javascript">
	import {Icon} from 'iview'
	export default{
		data:function(){
			return {

			}
		},
		components:{
			Icon
		}
	}
</script>