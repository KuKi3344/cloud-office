<template>
	<div class="bk">
		<vue-particles color="#ffffff" :particleOpacity="0.7" :particlesNumber="70" shapeType="circle"
			:particleSize="4" linesColor="#a0d7f9" :linesWidth="0" :lineLinked="false" :lineOpacity="0.7"
			:linesDistance="80" :moveSpeed="4" :hoverEffect="false" hoverMode="grab" :clickEffect="false"
			clickMode="push" class="lizi">
		</vue-particles>
		<div class ="nonetitle">
			<div class="tip">404</div>
			<div class="tip2">小主，您没有权限QWQ&emsp;请<router-link to='/'>登录</router-link></div>
		
		</div>
		
	
	</div>
</template>

<script>
	export default{
		name:'none'
	}
</script>

<style scoped="scoped">
	.bk{
		position: absolute;
		left: 0;
		top: 0;
		bottom:0;
		right:0;
		min-height: 100%;
		min-width: 100%;
		max-height: 1550px auto;
		max-width: 750px auto;
		background-color: #a9c1cb;
		z-index:-100;
	}
	.nonetitle{
		width:400px;
		height:400px;
		position:absolute;
		left:50%;
		top:45%;
		transform: translate(-50%,-50%);
		text-align: center;
		color:#f4f4f4;
		background-color: #c6d8d8;
		border-radius: 50%;
		opacity: 0.9;
	}
	.tip{	
		margin-left:20px;
		margin-top:70px;
		font-size:180px;
		letter-spacing: 40px;
		font-family: "agency fb";
	}
	.tip2{
		margin-top: 30px;
		font-size: 25px;
		font-family:"STHupo";
		letter-spacing: 2px;
	}
	.tip2 a{
		color:#819594 !important;
	}
</style>
