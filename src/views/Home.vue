<template>
	<div>
		<el-container>
			<el-header>header</el-header>
			<el-container>
				<el-aside width="200px" style="background-color:#3e454c;opacity: 0.8;border-radius:10px;
    border: 1px solid hsla(0,0%,100%,.8);box-shadow: 10px 10px 20px rgb(0 0 0 / 40%);">
					    <el-menu router style="width:100% !important">
					      <el-submenu :index="index+''" v-for="(item,index) in routes" 
						  :key="index" v-if="!item.hidden" style="background-color:#3e454c;">
					        <template slot="title">
						<!-- 		需要下载font-awesome才能用这个图标 -->
								<i :class="item.iconCls" style="color:#adc9e3;margin-right:15px;"></i>
							<span>{{item.name}}</span>
							</template>
					    <el-menu-item :index="children.path" v-for="(children,indexj) in item.children" :key="indexj">
							  {{children.name}}
							  </el-menu-item>
							</el-submenu>
							 </el-menu>
				</el-aside>
				<el-main>
					  <router-view/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default{
		name:"Home",
		computed:{
			routes(){
				// console.log(this.$store.state.routes);
				return this.$store.state.routes;
			}
		},
		methods:{
			
		}
		
	}
</script>

<style scoped>
	@import url(../assets/css/home.css);
</style>