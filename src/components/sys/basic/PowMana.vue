<template>
	<div>
		<div class="powtool">
			<el-input placeholder="请输入角色英文名" v-model="role.name">
				<template slot="prepend">ROLE_</template>
			</el-input>
			<el-input v-model="role.nameZh" placeholder="请输入角色中文名"></el-input>
			<el-button size="small" type="primary" icon="el-icon-plus">添加角色</el-button>
		</div>
		<div class="powmain">
			<el-collapse v-model="activeName" accordion @change="change">
			  <el-collapse-item :title="r.nameZh" :name="r.id" v-for="(r,index) in roles" :key="index">
				  
			    <el-card class="box-card">
			      <div slot="header" class="clearfix">
			        <span>可访问资源</span>
			        <el-button style="float: right; padding: 3px 0;color:#f75255" type="text" icon="el-icon-delete"></el-button>
			      </div>
			     <div>
					<template v-for="item in allMenus" >
					  <el-row style="margin-bottom: 10px" :key="item.id">
					    <span class="message" style="margin-right: 10px">{{ item.name }}</span>
					    <br>
					    <div class="box-width">
					      <template v-for="subitem in item.subMenu">
					        <el-checkbox-group v-model="selectMenus" class="message" :key="subitem.id">
					          <el-checkbox :label="subitem.id+''" style="margin-right: 10px"><span>{{ subitem.name }}</span></el-checkbox>
					        </el-checkbox-group>
					      </template>
					    </div>
					  </el-row>
					</template>
				 </div>
			    </el-card>
				
			  </el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>

<script>
	export default{
		name:'PowMana',
		data(){
			return{
				role:{
					name:'',
					nameZh:''
				},
				activeName:'2',
				roles:[],
				allMenus:[],
				 defaultProps: {
				          children: 'subMenu',
				          label: 'name'
				        },
				selectMenus:[],
			}
		},
		mounted(){
			this.initRoles();
		},
		methods:{
			change(rid){
				//传入角色id
				this.initAllMenus();
				this.initselectMenus(rid);
			},
			//获取所有菜单信息
			initAllMenus(){
				this.getRequest('/api/system/cfg/permission/menus').then(resp=>{
					this.allMenus = resp.data[0].subMenu;
					console.log(this.allMenus)
				})
			},
			//获取点击角色的菜单信息
			initselectMenus(rid){
				this.selectMenus = [];
				this.getRequest('/api/system/cfg/permission/get-menus-id-by/'+rid).then(resp=>{
					if(resp.data){
					for (var i = 0; i < resp.data.length; i++) {
					 this.selectMenus.push(resp.data[i].menuId+'')
					}
					}
				})
			},
			//获取所有角色信息
			initRoles(){
				this.getRequest('/api/system/cfg/permission/list').then(resp=>{
					if(resp){
						this.roles = resp.data;
					}
				})
			}
		}
	}
</script>

<style>
	.powtool{
		display:flex;
		justify-content: flex-start;
	}
	.powtool .el-input{
		width:300px;
		margin-right: 15px;
	}
	.powmain{
		margin-top: 10px;
	}
</style>
