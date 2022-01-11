	<div class="main" v-cloak>
		<vue-particles color="#76aed3" :particleOpacity="0.7" :particlesNumber="50" shapeType="triangle"
			:particleSize="3.5" linesColor="#a0d7f9" :linesWidth="1.5" :lineLinked="true" :lineOpacity="0.7"
			:linesDistance="100" :moveSpeed="3" :hoverEffect="false" hoverMode="grab" :clickEffect="false"
			clickMode="push" class="lizi">
		</vue-particles>
		<el-container>
			<el-header class="homeheader">
				<div class="left">
				<div class="box">
				       <div>
				           <span></span>
				           <span></span>
				           <span></span>
				           <span></span>
				       </div>
				   </div>
				<div class="headtitle">LULU办公助手</div>
				</div>
				<div class="right">
					<el-badge :value="10" :max="99" class="item">
					  <el-button size="small" style="border-radius: 15px;">新的待办</el-button>
					</el-badge>
					<span id="nav">&emsp;{{timeid}}&emsp;</span>
					<span id="nav2">&emsp;今日气温</span>
					<div id="he-plugin-simple"></div> <!-- 天气预报接口实现 -->
					<el-dropdown class="userInfo" @command="commandHandler">
						<span class="el-dropdown-link">
							<i> <img :src="user.data.userFace"> </i>
						</span>
						<el-dropdown-menu slot="dropdown" class="dropmenu">
							<el-dropdown-item disabled class="username">{{user.data.name}}</el-dropdown-item>
							<el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
							<el-dropdown-item command="game">休闲娱乐</el-dropdown-item>
							<el-dropdown-item command="logout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<el-menu router style="width:100% !important">
						<el-submenu :index="index+''" v-for="(item,index) in routes" :key="index" v-if="!item.hidden"
							style="background-color:#3e454c;">
							<template slot="title">
								<!-- 		需要下载font-awesome才能用这个图标 -->
								<i :class="item.iconCls" style="color:#adc9e3;margin-right:15px;"></i>
								<span>{{item.name}}</span>
							</template>
							<el-menu-item :index="children.path" v-for="(children,indexj) in item.children"
								:key="indexj">
								{{children.name}}
							</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<el-breadcrumb v-if="this.$router.currentRoute.path!='/home'">
					  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
					  <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
					</el-breadcrumb>
					<div class="mainview">
						
						<router-view />
					</div>
					
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>


<script>
	export default {
		name: "Home",
		data() {
			return {
				user: JSON.parse(window.sessionStorage.getItem('user')),
				timeid:'',
			}
		},
		//整个created都是为了调用天气预报接口
		created() {
			//和风天气插件调用
			window.WIDGET = {
				"CONFIG": {
					"modules": "02",
					"background": "5",
					"tmpColor": "#6a6a6a",
					"tmpSize": "15",
					"aqiColor": "#737373",
					"aqiSize": "15",
					"weatherIconSize": "20",
					"alertIconSize": "15",
					"padding": "10px 10px 10px 10px",
					"shadow": "0",
					"language": "auto",
					"fixed": "false",
					"vertical": "center",
					"horizontal": "center",
					"key": "bb0bd610ef8e4dd0b28f6920d11d41a8"
				}
			};
			(function(d) {
				var c = d.createElement('link');
				c.rel = 'stylesheet';
				c.href = 'https://widget.heweather.net/simple/static/css/he-simple.css?v=1.4.0';
				var s = d.createElement('script');
				s.src = 'https://widget.heweather.net/simple/static/js/he-simple.js?v=1.4.0';
				var sn = d.getElementsByTagName('script')[0];
				sn.parentNode.insertBefore(c, sn);
			 sn.parentNode.insertBefore(s, sn);
			})(document);
			this.currentTime();	//初始化当前时间
		},
		computed: {
			routes() {
				// console.log(this.$store.state.routes);
				return this.$store.state.routes;
			}
		},
		methods: {
			//实时获取日期
		getTime(){
		        var _this = this;
		        let mm = new Date().getMonth()+1;
		        let dd = new Date().getDate();
		        let hh = new Date().getHours();
		        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
		        this.timeid = mm+'月'+dd+'日 '+hh+':'+mf+':'+ss;
		      },
		currentTime(){
		      setInterval(this.getTime,500)
		},
		commandHandler(command){
				if(command=='logout'){
					this.$confirm('此操作将注销登录, 是否继续?', '提示', {
					          confirmButtonText: '确定',
					          cancelButtonText: '取消',
					          type: 'warning'
					        }).then(() => {
								//注销登录
					          this.postRequest('/logout');
					          //清空用户信息
					          window.sessionStorage.removeItem('tokenStr');
					          window.sessionStorage.removeItem('user');
							  //清除vuex中保存的路由，这样保证路由一直是当前用户拥有的
							  this.$store.commit('initRoutes',[]);
					          this.$router.replace('/');
							  
					        }).catch(() => {
					          this.$message({
					            type: 'info',
					            message: '已取消'
					          });          
					        });				
				}
				if(command=='userinfo'){
					this.$router.push('/system/basic');
				}else{
					this.$router.push('/game');
				}
		},
			  
		}

	}
</script>

<style scoped>
	@import url(../assets/css/home.css);
</style>
