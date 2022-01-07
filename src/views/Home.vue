<template>
	<div class="main">
		<vue-particles color="#76aed3" :particleOpacity="0.7" :particlesNumber="50" shapeType="triangle"
			:particleSize="3.5" linesColor="#a0d7f9" :linesWidth="1.5" :lineLinked="true" :lineOpacity="0.7"
			:linesDistance="100" :moveSpeed="3" :hoverEffect="false" hoverMode="grab" :clickEffect="false"
			clickMode="push" class="lizi">
		</vue-particles>
		<el-container>
			<el-header class="homeheader">
				<div class="headtitle">LULU办公助手</div>
				<div class="right">
					<div id="he-plugin-simple"></div> <!-- 天气预报接口实现 -->
					<el-dropdown class="userInfo">
						<span class="el-dropdown-link">
							<i> <img :src="user.data.userFace"> </i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item disabled class="username">{{user.data.name}}</el-dropdown-item>
							<el-dropdown-item>个人中心</el-dropdown-item>
							<el-dropdown-item>设置</el-dropdown-item>
							<el-dropdown-item>注销登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-header>
			<el-container>
				<el-aside width="200px" style="background-color:#3e454c;opacity: 0.8;border-radius:10px;
    border: 1px solid hsla(0,0%,100%,.8);box-shadow: 10px 10px 20px rgb(0 0 0 / 40%);">
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
				<el-main style="margin:50px;border-radius: 15px;box-shadow: 5px 5px 12px rgb(0 0 0 / 40%);background-color: #fff;opacity: 0.9;z-index: -1;">
					<router-view />
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
		},
		computed: {
			routes() {
				// console.log(this.$store.state.routes);
				return this.$store.state.routes;
			}
		},
		methods: {

		}

	}
</script>

<style scoped>
	@import url(../assets/css/home.css);
</style>
