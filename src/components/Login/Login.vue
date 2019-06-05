<template>
    <div class="Login">
    	<img src="../../assets/logo.png" class="Logo">
    	<form action="Login_submit">
    		<div>
    			<input type="tel" name="mobile" @keyup="_check" v-model="form.mobile" placeholder="手机号">
    			<span :class="{Blue:isBlue}" @click="_getCheck">获取验证码</span>
    		</div>
    		<div>
    			<input type="text" name="checkPw" placeholder="验证码" v-model="form.checkPw" :disabled="disableFlag">
    		</div>
    		<div v-if="flag">
      			<Verify :type="3" :barSize="{width:'100%',height:'40px'}" :showButton="false" :vOffset="5" @success="_success" @error="_error"></Verify>
      		</div>
    	</form>
    	<div class="loginAgree">
    		<p>新用户登录即自动注册，并表示已同意<router-link to="/login/agreement">《用户服务协议》</router-link></p>
    	</div>
    	<div class="loginBtn" @click="_login">登录</div>
    	<div class="connect"><a>关于我们</a></div>
		<Modal v-model="modal" class-name="vertical-center-modal">
			<div style="text-align:center">{{modalText}}</div>
			<div slot="footer" class="modal_footer">
				<Button type="primary" size="large" @click="modal=false">确定</Button>
			</div>
		</Modal>
    	<!-- <singleDial :dialText='singleDia.text' v-show="singleDia.status" @ChangeStatus="_changeStatus"></singleDial> -->
    </div>    
</template>
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
	.vertical-center-modal{
		display: flex;
		align-content: center;
		justify-content: center;
		/* width: 80%; */
	}
	.vertical-center-modal .ivu-modal{
		top: 0;
	}
</style>
<script type="text/javascript">	
    import Verify from 'vue2-verify'
	// import singleDial from '../Common/singleDial'
	import {Modal,Button} from 'iview'
	export default{
		data:function(){
			return {
				form:{
					mobile:'',//用户输入的手机号
					checkPw:''//用户输入的验证码
				},				
				isBlue:false,//获取验证码五个字是否变蓝
				flag:false,//滑块验证是否显示
				disableFlag:true,//可否输入验证码
				check:'',//后台获取到的验证码
				modal:false,//弹框是否显示
				modalText:'',//弹框提示内容
				verifyFlag:false//滑块验证是否通过
			}
		},
		methods:{
			_check(e){
				let mobile=e.target.value;
				let mobileReg=/^1[34578]\d{9}$/;
				this.form.mobile=mobile.replace(/[^\d]/g,'');
				this.isBlue=mobileReg.test(this.form.mobile);
			},
			_getCheck(){
				this.$axios.get('/api/user/check')
				.then((data)=>{
					console.log(data.data.check);
					if(data.data.resp_code=='200'){
						this.disableFlag=false;
						this.check=data.data.check;
						this.flag=true;
					}
				})
			},
			_login(){
				let mobileReg=/^1[34578]\d{9}$/;
				if(!mobileReg.test(this.form.mobile)){
					this.modal=true;
					this.modalText='手机号输入错误';
					return;
				}
				if(this.form.checkPw!=this.check){
					this.modal=true;
					this.modalText='验证码输入错误';
					return;
				}
				if(!this.verifyFlag){
					this.modal=true;
					this.modalText='滑块验证未通过';
					return;
				}
				this.$axios.get(`/api/user/login?mobile=${this.form.mobile}`)
				.then((data)=>{
					if(data.data.resp_code=='200'){
						window.localStorage.setItem("token",data.data.token);
						this.$router.push({path:'/personal'})
					}else{						
						this.singleDia.status=true;
						this.singleDia.text=data.data.msg;
					}
				})
				.catch((errorData)=>{
					console.log(errorData);
				})
			},
			_error(){
				this.modalText='滑块验证未通过';
				this.modal=true;
				this.verifyFlag=false;
			},
			_success(){
				this.verifyFlag=true;
			}
		},
		components:{
			Verify,
			Modal,
			Button
		}
	}
</script>