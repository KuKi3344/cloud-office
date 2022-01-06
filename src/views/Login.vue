<template>
	<div class="main">
		<vue-particles color="#76aed3" :particleOpacity="0.7" :particlesNumber="50" shapeType="triangle"
			:particleSize="3.5" linesColor="#a0d7f9" :linesWidth="1.5" :lineLinked="true" :lineOpacity="0.7"
			:linesDistance="100" :moveSpeed="3" :hoverEffect="false" hoverMode="grab" :clickEffect="false"
			clickMode="push" class="lizi">
		</vue-particles>
		<span class="title">LULU云办公</span>
		<span class="title2">您的智能办公助手</span>
		<el-form 
		:rules="rules"
		v-loading="loading"
		element-loading-text="努力登录中..."
		element-loading-spinne="el-icon-loading"
		element-loading-background="rgba(0, 0, 0, 0.6)"
		ref="userLoginParam"
		:model="userLoginParam" 
		class="loginbox">
			<el-form-item prop="username">
				<el-input type="text" v-model="userLoginParam.username" placeholder="请输入用户名">					
				</el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" auto-complete="false" v-model="userLoginParam.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item prop="code">
				<el-input type="text" auto-complete="false" v-model="userLoginParam.code" style="width:60%;" placeholder="点击图片更换验证码"></el-input>
				<img :src="capUrl" @click="updateCap" style="margin-left:20px;">
			</el-form-item>
			<el-checkbox v-model="checked">记住我</el-checkbox>
			<el-button type="primary" style="width:100%;margin-top:15px" @click="doSubmit">登录</el-button>
		</el-form>
		
		<!-- <div class="verify" v-if="toverify">
			<slide-verify ref="slideblock" @again="onAgain" @success="onSuccess" @fail="onFail" :accuracy="accuracy"
				:slider-text="text"></slide-verify>
		</div> -->
	</div>
</template>

<script>
	export default {
		 name:"login",
		 data(){
			 return{
				 capUrl:'/captcha?time='+new Date(),
				 userLoginParam:{
					 username:'admin',
					 password:'123',
					 code:''
				 },
				 checked:true,
				 // text: '向右滑',
				 // accuracy: 4,
				 // toverify: false,
				 // succeed:false,
				 loading:false,
				 rules:{
					 username: [{required:true,message:'请输入用户名',trigger:'blur'},
					 { min: 5, max: 16, message: '账号必须为5-16个字符', trigger: 'blur' }],
					 
					 password: [{required:true,message:'请输入密码',trigger:'blur'},
					 { min: 3, max: 15, message: '密码必须为3-15个字符', trigger: 'blur' }],
					  code:[{required:true,message:'请输入验证码',trigger:'blur'}]
				 }
			 }
		 },
		 methods: {
			 updateCap(){
				 this.capUrl ='/captcha?time='+new Date();
			 },

			doSubmit:function(){

				this.$refs.userLoginParam.validate((valid)=>{
					if(valid){
						this.loading = true;
						console.log(this.userLoginParam)
						this.postRequest('/login',this.userLoginParam).then(resp=>{
							if(resp){
								this.loading = false;
								const tokenStr = resp.tokenHead+resp.token;
								this.$router.replace('/home')
							}
							
						})
					}else{
						this.$message.error('输入格式错误，请检查！')
					}
				})
				// }
			},
		 	
		 },
		 
	}
</script>
<style scoped>
	@import url(../assets/css/login.css);
</style>