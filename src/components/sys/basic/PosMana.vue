<template>
	<div>
		<el-table v-loading="loading" :data="records" class="el-table" height="400" border
			style="width:1200px; border-radius:10px;" :header-cell-style="{background:'#eef1f4',color:'#606266'}">
		
			<el-table-column fixed prop="id" label="编号" width="200" height="40">
			</el-table-column>
		
			<el-table-column prop="deptId" label="职位编号" width="200" height="40">
			</el-table-column>
			<el-table-column prop="name" label="职位名称" width="200" height="40">
			</el-table-column>
			<el-table-column prop="createDate" label="创建时间" width="300" height="40">
			</el-table-column>
			<el-table-column label="操作" width="300" height="40">
		
				<template slot-scope="scope">
					<el-button type="primary" @click="updatePos(scope.row)">编辑</el-button>
					 <el-button type="danger" @click="deletePos(scope.row.id)">删除</el-button>
				</template>
		
			</el-table-column>

		</el-table>
		<div style="display: flex;justify-content: space-around;">
			<el-pagination background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
			@current-change="handleCurrentChange" :total="total" :page-count="pages" :current-page="currentPage"
			:page-sizes="[8, 15, 20]" :page-size="pageSize">
		</el-pagination>
		<el-button plain icon="el-icon-circle-plus-outline" style="border-radius:20px;" @click="addPos">添加职位
		</el-button></div>
		
		
		<el-dialog style="width: 1000px;height: 1000px;" title="职位信息编辑" :visible.sync="zdydialog" append-to-body>
			<el-form :model="updateList">
				<el-form-item label="编号" width="80px">
					<el-input class="dialog_input" v-model="updateList.id" :disabled="true"></el-input>
				</el-form-item>
				<el-form-item label="职位编号" width="80px">
					<el-input class="dialog_input" v-model="updateList.deptId"></el-input>
				</el-form-item>
				<el-form-item label="职位名称" width="80px">
					<el-input class="dialog_input" v-model="updateList.name"></el-input>
				</el-form-item>
			</el-form>
		
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancel">取 消</el-button>
				<el-button type="primary" @click="update">确 定</el-button>
			</div>
		</el-dialog>
		
		
		<el-dialog style="width: 1000px;height: 1000px" title="职位信息添加" :visible.sync="addview" append-to-body>
			<el-form :model="addList">
				<el-form-item label="编号" width="80px">
					<el-input class="dialog_input" v-model="addList.id"></el-input>
				</el-form-item>
				<el-form-item label="职位编号" width="80px">
					<el-input class="dialog_input" v-model="addList.deptId"></el-input>
				</el-form-item>
				<el-form-item label="职位名称" width="80px">
					<el-input class="dialog_input" v-model="addList.name"></el-input>
				</el-form-item>
			</el-form>
		
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancel">取 消</el-button>
				<el-button type="primary" @click="add">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default{
		name:'PosMana',
		data(){
			return{
				records:[],
				currentPage:1,
				pageSize:15,
				total:0,
				pages:1,
				loading:true,
				updateList:{
					id:'',
					deptId:'',
					name:'',
					
				},
				addList:{
					id:'',
					deptId:'',
					name:'',
					
				},
				addview:false,
				zdydialog:false,
			}
		},
		created(){
			
			this.$axios.get('/api/position/query', {
				params: {
					currentPage: this.currentPage,
					/* 页数索引 */
					pageSize: this.pageSize
					/* 页容量 */
				}
			}).then((res) => {
					this.total = res.data.total;
					this.pages = res.data.pages;
					this.records = res.data.records;
					this.loading = false;
				})
		},
		methods:{
			cancel: function() {
				this.addview = false;
				this.zdydialog = false;
				this.$axios.get('/api/position/query', {
					params: {
						currentPage: this.currentPage,
						/* 页数索引 */
						pageSize: this.pageSize
						/* 页容量 */
					}
				}).then((res) => {
						this.total = res.data.total;
						this.pages = res.data.pages;
						this.records = res.data.records;
						this.loading = false;
						console.log(this.records)
					})
			},
			handleSizeChange: function(size) {
				this.pageSize = size;
				console.log(this.pageSize); //每页下拉显示数据
				this.$axios.get('/api/position/query', {
					params: {
						pageNum: this.currentPage,
						/* 页数索引 */
						pageSize: this.pageSize
						/* 页容量 */
					}
				}).then((res) => {
						this.count = res.data.count;
						this.pageCount = res.data.pageCount;
						this.records = res.data.records;
						this.currentPage = res.data.currentPage;
					})
			},
			
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				console.log(this.currentPage); //点击第几页
				this.$axios.get('/api/position/query', {
					params: {
						pageNum: this.currentPage,
						/* 页数索引 */
						pageSize: this.pageSize
						/* 页容量 */
					}
				}).then((res) => {
						this.count = res.data.count;
						this.pageCount = res.data.pageCount;
						this.records = res.data.records;
						this.currentPage = res.data.currentPage;
					})
			},
			updatePos:function(row){
				this.updateList.id = row.id;
				this.updateList.deptId = row.deptId;
				this.updateList.name = row.name;
				this.zdydialog = true;
			},
			update:function(){
				this.putRequest('/api/system/cfg/position/update',this.updateList).then(resp=>{
				this.cancel();
					
				})
			},
			deletePos:function(id){
				this.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
						this.$axios.delete('/api/system/cfg/position/delete/'+id).then(resp=>{
							 this.cancel();
						})
				        }).catch(() => {
				
				          this.$message({
				            type: 'info',
				            message: '已取消删除'
				          }); 
						  this.cancel();
				        });
			},
			addPos:function(){
					this.addview = true;
			},
			add:function(){
				this.postRequest('/api/system/cfg/position/add',this.addList).then(resp=>{
					this.addview = false;
					this.addList.id = '';
					this.addList.deptId = '';
					this.addList.name = '';
					this.cancel();
				})
			},
			
		}
	}
</script>

<style scoped="scoped">
	.el-table{
		overflow-x: scroll;
	}
</style>
