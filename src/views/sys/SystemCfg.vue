<template>
	<div>
		<el-tabs v-model="activeName"  @tab-click="handleClick">
		  <!--    部门管理    -->
		  <el-tab-pane label="部门管理" name="DepMana">
		    <DepMana></DepMana>
		  </el-tab-pane>
		  <!--    岗位管理    -->
		  <el-tab-pane label="职位管理" name="PosMana">
		   <PosMana></PosMana>
		  </el-tab-pane>
		  <!--    角色权限管理    -->
		  <el-tab-pane label="角色权限管理" name="PowMana">
		    <PowMana></PowMana>
		  </el-tab-pane>
		</el-tabs>
		
	</div>
</template>

<script>
	import DepMana from '../../components/sys/basic/DepMana'
	import PosMana from '../../components/sys/basic/PosMana'
	import PowMana from '../../components/sys/basic/PowMana'
	export default{
		name:'SystemCfg',
		data(){
			return{
				activeName:'PosMana',
			};
		},
		components:{
			DepMana,
			PosMana,
			PowMana
		},
		methods:{
			handleClick(tab,event){
				console.log(tab,event)
			}
		}
	}
</script>

<style>
</style>
