<template>
	<div class="singleDial">
		<div class="content">
			<div class="center">
				<p>{{dialText}}</p>
			</div>
			<div class="bottom" @click="_close">
				<p>确定</p>
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	.singleDial{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		background: rgba(0,0,0,0.3);
	}
	.singleDial .content{
		position: absolute;
		width: 80%;
		padding: 10px;
		top: 50%;
		left: 10%;
		transform: translateY(-50%);
		background: #fff;
	}
	.singleDial .content p{
		padding: 20px 0;
	}
	.singleDial .content .center{
		border-bottom: 1px solid #ddd;
		color: #2395ff;
	}
</style>
<script type="text/javascript">
	export default{
		props:['dialText'],
		methods:{
			_close(){
				this.$emit("ChangeStatus",{'status':false});
			}
		}
	}
</script>