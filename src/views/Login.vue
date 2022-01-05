<template>
	<div class="main">
		<vue-particles color="#76aed3" :particleOpacity="0.7" :particlesNumber="50" shapeType="triangle"
			:particleSize="3.5" linesColor="#a0d7f9" :linesWidth="1.5" :lineLinked="true" :lineOpacity="0.7"
			:linesDistance="100" :moveSpeed="3" :hoverEffect="false" hoverMode="grab" :clickEffect="false"
			clickMode="push" class="lizi">
		</vue-particles>
		<span class="title">LULU云办公</span>
		<span class="title2">您的智能办公助手</span>
		<el-form :rules="rules" ref="form" :model="loginForm" class="loginbox">
			<el-form-item prop="username">
				<el-input type="text" v-model="loginForm.username" placeholder="请输入用户名">					
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item  prop="code">
				<el-input type="text" style="width:60%" auto-complete="false" v-model="loginForm.code" placeholder="点击图片切换验证码"></el-input>
				<img :src="capUrl">
			</el-form-item>
			<el-checkbox v-model="checked">记住我</el-checkbox>
			<el-button type="primary" style="width:100%;margin-top:15px" @click="doSubmit">登录</el-button>
		</el-form>
	</div>
</template>

<script>
	export default {
		 name:"login",
		 data(){
			 return{
				 loginForm:{
					 username:'',
					 password:'',
					 code:''
				 },
				 capUrl:'',
				 checked:true,
				 rules:{
					 username: [{required:true,message:'请输入用户名',trigger:'blur'},
					 { min: 6, max: 16, message: '请确保长度在6到 16 ', trigger: 'blur' }],
					 
					 password: [{required:true,message:'请输入密码',trigger:'blur'},
					 { min: 6, max: 16, message: '请确保长度在 6 到 16 ', trigger: 'blur' }],
					 
					 code: [{required:true,message:'请输入验证码',trigger:'blur'}]
				 }
			 }
		 },
		 methods: {
		 	sleep: function(d) {
		 		for (var t = Date.now(); Date.now() - t <= d;);
		 	},
			doSubmit:function(){
				this.$refs.loginForm.validate((valid)=>{
					if(valid){
						
					}else{
						this.$message.error('输入格式错误，请检查！')
					}
				})
			},
		 	
		 },
		 
	}
</script>
<style scoped>
	@import url(../assets/css/login.css);
</style>