<template>
    <div class="Login">
    	<img src="../../assets/logo.png" class="Logo">
    	<form action="Login_submit">
    		<div>
    			<input type="tel" name="mobile" @keyup="check" v-model="mobile" placeholder="手机号">
    			<span :class={Blue:isBlue}>获取验证码</span>
    		</div>
    		<div>
    			<input type="text" name="checkPw" placeholder="验证码">
    		</div>
    		<div>
      			<Verify @success="alert('success')" @error="alert('error')" :type="3" :barSize="{width:'100%',height:'40px'}" :showButton=false :vOffset="5"></Verify>
      		</div>
    	</form>
    	<div class="loginAgree">
    		<p>新用户登录即自动注册，并表示已同意<a>《用户服务协议》</a></p>
    	</div>
    	<div class="loginBtn">登录</div>
    	<div class="connect"><a>关于我们</a></div>
    </div>    
</template>
<style type="text/css">
.Login{
	padding: 0 35px;
}
.Logo{
  width: 45%;
  margin: 40px 0 20px;
}
.Login form div{
	margin-bottom: 10px;
	height: 48px;
	position: relative;
	border-radius: 4px;
}
.Login form input{
	-webkit-tap-highlight-color:transparent;/*解决移动端input默认高亮边框*/
	outline: none;
	-webkit-appearance: none;
	width: 100%;
	height: 100%;
	border:1px solid #ddd;
	padding-left:10px;
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	border-radius: 4px;
	box-sizing: border-box;
	color: #999;
}
.Login form input:focus{
	border-color: #0089dc;;
}
.Login form div span{
	-webkit-tap-highlight-color: transparent;/*去掉点击高亮效果*/
	position: absolute;
    right: 10px;
    font-size: 12px;
    line-height: 48px;
	color:#ccc;
	cursor: pointer;
}
.Login form div span.Blue{
	color: #2395ff;
}
.Login form div .verify-bar-area{
	box-sizing: border-box;
}
.Login form div .verify-msg{
	line-height: 40px;	
}
.loginAgree{
	text-align: left;
	font-size:14px;
	color:#999;
}
.loginAgree a{
	color: #2395ff;;
}
.loginBtn{
	width: 100%;
	background: #4cd96f;
	line-height: 42px;
	color: #fff;
	font-size: 16px;
	border-radius: 5px;
	margin: 30px 0 20px 0;
}
.connect a{
	color: #999;
	font-size:12px;
}
</style>
<script type="text/javascript">	
    import Verify from 'vue2-verify'
	export default{
		data:function(){
			return {
				mobile:'',
				isBlue:false
			}
		},
		methods:{
			check(e){
				let mobile=e.target.value;
				let mobileReg=/^1[34578]\d{9}$/
				this.mobile=mobile.replace(/[^\d]/g,'');
				if(mobileReg.test(this.mobile)){
					this.isBlue=true;
				}else{
					this.isBlue=false;
				}
				console.log(this.mobile,this.isBlue)
			}
		},
		components:{
			Verify
		}
	}
</script>