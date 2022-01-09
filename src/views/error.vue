<template>
	<div class="bk" v-cloak>
		<vue-particles color="#ffffff" :particleOpacity="0.7" :particlesNumber="70" shapeType="circle"
			:particleSize="4" linesColor="#a0d7f9" :linesWidth="0" :lineLinked="false" :lineOpacity="0.7"
			:linesDistance="80" :moveSpeed="4" :hoverEffect="false" hoverMode="grab" :clickEffect="false"
			clickMode="push" class="lizi">
		</vue-particles>
		<div class ="nonetitle">
			<div class="tip" style="font-size:100px;margin-top:120px;">ERROR</div>
			<div class="tip2" style="margin-top:40px;margin-left:30px;line-height: 40px;">此页面不存在，小主可以回到<router-link to='/home'>首页</router-link></div>
		
		</div>
		</div>
</template>

<script>
	export default{
		name:'error',
	}
</script>

<style scoped="scoped">
@import url("../assets/css/error.css");
</style>
