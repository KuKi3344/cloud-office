<template>
	<div class="main">
		<vue-particles color="#76aed3" :particleOpacity="0.7" :particlesNumber="50" shapeType="triangle"
			:particleSize="3.5" linesColor="#a0d7f9" :linesWidth="1.5" :lineLinked="true" :lineOpacity="0.7"
			:linesDistance="100" :moveSpeed="3" :hoverEffect="false" hoverMode="grab" :clickEffect="false"
			clickMode="push" class="lizi">
		</vue-particles>
		<span class="title">LULU云办公</span>
		<span class="title2">您的智能办公助手</span>
		<el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginbox">
			<el-form-item prop="username">
				<el-input type="text" v-model="loginForm.username" placeholder="请输入用户名">					
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-checkbox v-model="checked">记住我</el-checkbox>
			<el-button type="primary" style="width:100%;margin-top:15px" @click="doSubmit">登录</el-button>
		</el-form>
		<div class="verify" v-if="toverify">
			<slide-verify ref="slideblock" @again="onAgain" @success="onSuccess" @fail="onFail" :accuracy="accuracy"
				:slider-text="text"></slide-verify>
		</div>
	</div>
</template>

<script>
	import{
		postRequest
	}from '../utils/api.js'
	export default {
		 name:"login",
		 data(){
			 return{
				 loginForm:{
					 username:'',
					 password:'',
				 },
				 checked:true,
				 verify: "",
				 text: '向右滑',
				 accuracy: 4,
				 toverify: false,
				 succeed:false,
				 rules:{
					 username: [{required:true,message:'请输入用户名',trigger:'blur'},
					 { min: 5, max: 16, message: '账号必须为5-16个字符', trigger: 'blur' }],
					 
					 password: [{required:true,message:'请输入密码',trigger:'blur'},
					 { min: 6, max: 15, message: '密码必须为6-15个字符', trigger: 'blur' }]		 
				 }
			 }
		 },
		 methods: {
			 onSuccess: function() {
			 	this.$message({
			 		type: 'success',
			 		message: '验证通过',
			 	});
			 	this.succeed = true;
			 	this.toverify = false;
			 },
			 onFail: function() {
			 	this.$message.error('验证失败');
			 	this.succeed = false;
			 },
			 onAgain: function() {
			 	this.$message({
			 		message: '请求错误，请重试',
			 		type: 'warning'
			 	});
			 	// 刷新
			 	this.succeed = false;
			 	this.$refs.slideblock.reset();
			 },
			doSubmit:function(){
				if(!this.succeed){
					this.$message.error('请先验证')
					this.toverify=true;	
				}
				if(this.succeed){
				this.$refs.loginForm.validate((valid)=>{
					if(valid){
						postRequest('user/login',this.loginForm).then(resp=>{
							alert(resp);
						})
					}else{
						this.$message.error('输入格式错误，请检查！')
						return false;
					}
				})
				}
			},
		 	
		 },
		 
	}
</script>
<style scoped>
	@import url(../assets/css/login.css);
</style>