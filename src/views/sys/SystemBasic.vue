<template>
	<div>
		 <el-tabs v-model="activeName">
		    <el-tab-pane label="部门管理" name="first">
			<table bprder="1">
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
			</table>
			</el-tab-pane>
		    <el-tab-pane label="职位管理" name="second">职位管理</el-tab-pane>
		    <el-tab-pane label="职称管理" name="third">职称管理</el-tab-pane>
		    <el-tab-pane label="奖惩规则" name="fourth">奖惩规则</el-tab-pane>
			 <el-tab-pane label="权限组" name="fifth">权限组</el-tab-pane>
		  </el-tabs>
	</div>
</template>

<script>
	export default{
		name:'SystemBasic',
		data(){
			return{
				activeName:'first',
			}
		}
	}
</script>

<style>
</style>
