<template>
	<div>
		<el-card class="box-card">
		  <div slot="header" class="cardhead">
		    <el-container>
		      <div class="box-userface">
		        <img
		          style="
		          height: 60px;
		          width: 60px;
		          border: 1px solid #cdd7da;
		          background-color: white;
		          border-radius: 50%;"
		          :src="user.data.userFace" alt="头像">
		      </div>
		      <label class="userlable">{{ user.data.name }}</label>
		    </el-container>
		  </div>
		  <el-container direction="vertical" style="margin-top: 10px; text-align: left; margin-left:50px;display:flex;padding-left:20px auto;position: relative;">
		    <label class="userinfolsit"><b>电话:</b>
		      <label style="margin-left: 80px">
		        {{ user.data.phone }}
		      </label>
		    </label>
		    <label class="userinfolsit"><b>地址:</b>
		      <label style="margin-left: 80px">
		        {{ user.data.address }}
		      </label>
		    </label>
		    <label class="userinfolsit"><b>用户名:</b>
		      <label style="margin-left: 65px">
		        {{ user.data.username }}
		      </label>
		    </label>
		    <label class="userinfolsit"><b>用户类别:</b>
		      <label style="margin-left: 50px">
		        {{ user.data.roles[0].nameZh }}
		      </label>
		    </label>
		  </el-container>
		</el-card>
	</div>
</template>

<script>
	export default{
		name:'SystemBasic',
		data(){
			return{
				user: JSON.parse(window.sessionStorage.getItem('user')),
			}
		}
	}
</script>

<style scoped="scoped">
	.box-card {
	  width: 100%;
	  height: 100% !important;
	  border: rgba(206, 203, 203, 0.9);
	  margin: 0 auto;
	}
	.box-userface {
	  width: 60px;
	  display: inline;
	  float: left;
	  margin-left: 30px;
	}
	
	.userlable {
	  position: relative;
	  float: left;
	  top: 0px;
	  font-size: 20px;
	  margin: 20px ;
	  color:#585b6a;
	  letter-spacing: 1px;
	  font-weight: 600;
	}
	
	.userinfolsit {
	  top: 0px;
	  font-size: 15px;
	  margin-bottom: 20px;
	  margin-left:80px;
	  color:#40484c;
	}
	.cardhead .el-container{
		align-items: center;
		justify-content: center;
		}
		
</style>
