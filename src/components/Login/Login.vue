<template>
    <div class="Login">
    	<img src="../../assets/logo.png" class="Logo">
    	<form action="Login_submit">
    		<div>
    			<input type="tel" name="mobile" @keyup="_check" v-model="form.mobile" placeholder="手机号">
    			<span :class="{Blue:isBlue}">获取验证码</span>
    		</div>
    		<div>
    			<input type="text" name="checkPw" placeholder="验证码" v-model="form.checkPw">
    		</div>
    		<div>
      			<Verify :type="3" :barSize="{width:'100%',height:'40px'}" :showButton="false" :vOffset="5" @success="_success"></Verify>
      		</div>
    	</form>
    	<div class="loginAgree">
    		<p>新用户登录即自动注册，并表示已同意<router-link to="/login/agreement">《用户服务协议》</router-link></p>
    	</div>
    	<div class="loginBtn" @click="_login">登录</div>
    	<div class="connect"><a>关于我们</a></div>
    	<singleDial :dialText='singleDia.text' v-show="singleDia.status" @ChangeStatus="_changeStatus"></singleDial>
    </div>    
</template>
<style type="text/css" scoped>
html,body{
	background: #fff;
}
</style>
<style type="text/css" scoped>
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
	.Login form div .icon-right:before{
		z-index: 1;
	}
	.loginAgree{
		text-align: left;
		font-size:14px;
		color:#999;
	}
	.loginAgree a{
		display: inline;
		color: #2395ff;
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
    import singleDial from '../Common/singleDial'
	export default{
		data:function(){
			return {
				form:{
					mobile:'',
					checkPw:''
				},				
				isBlue:false,
				singleDia:{
					text:'',
					status:''
				},
				flag:false
			}
		},
		methods:{
			_check(e){
				let mobile=e.target.value;
				let mobileReg=/^1[34578]\d{9}$/;
				this.form.mobile=mobile.replace(/[^\d]/g,'');
				this.isBlue=mobileReg.test(this.form.mobile);
			},
			_login(){
				let mobileReg=/^1[34578]\d{9}$/;
				if(!mobileReg.test(this.form.mobile)){
					this.singleDia.status=true;
					this.singleDia.text='手机号输入错误';
					return;
				}
				if(this.form.checkPw.length!=6){
					this.singleDia.status=true;
					this.singleDia.text='验证码输入错误';
					return;
				}
				if(!this.flag){
					this.singleDia.status=true;
					this.singleDia.text='验证未通过';
					return;
				}
				//http://47.94.21.122:8080/main
				let url=this.baseUrl+'/user/login.do';
				// 获取随机数
				let timestamp=(new Date().getTime()).toString()
			    let randomnum=''+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+timestamp.slice(4)

			  	let params=new URLSearchParams();
			  	params.append('userName',this.form.mobile);
			  	params.append('passWord',this.form.checkPw);
			  	params.append('token',randomnum);
				this.$axios.post(url,params).then((data)=>{
					console.log(data);
					if(data.status=='200'){
						window.localStorage.setItem("userFlag",true);
						window.localStorage.setItem("name","zhangyaqi");
						window.localStorage.setItem("mobile","132****8702");
						this.$router.push({path:'/personal'})
					}else{						
						this.singleDia.status=true;
						this.singleDia.text=data.data.msg;
					}
				}).catch((errorData)=>{
					this.singleDia.status=true;
					this.singleDia.text=errorData;
					console.log(errorData);
				})
			},
			_changeStatus(obj){
				this.singleDia.status=obj.status;
			},
			_success(){
				this.flag=true
			}
		},
		components:{
			Verify,
			singleDial
		}
	}
</script>