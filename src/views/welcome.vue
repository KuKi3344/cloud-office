<template>
	<div class="contain">
		<div class="contain-main">
			<div >
			<el-descriptions title="您的事务处理情况:">
			<el-descriptions-item label="用户名">{{user.data.name}}</el-descriptions-item>
			    <el-descriptions-item label="备注">
			      <el-tag size="small">{{user.data.roles[0].name}}</el-tag>
			    </el-descriptions-item>
			</el-descriptions>	
			</div>			
			<div class="process">
				<div class="content"><el-progress type="circle" :percentage="30"></el-progress>正在处理</div>
				<div class="content"><el-progress type="circle" :percentage="50" color="#85e762"></el-progress>已完成</div>
				<div class="content"><el-progress type="circle" :percentage="20" color="#ff902f"></el-progress>待处理</div>			
			</div>			
		</div>
		<div id="chartLine" style="width:400px;height:300px;flex:0;"></div>
		<div id="main" style="width:400px;height:350px;flex:0"></div>
	</div>
</template>

<script>
	  import echarts from 'echarts'
	export default {
		name: 'welcome',
		 data() {
		      return {
				  user: JSON.parse(window.sessionStorage.getItem('user')),
			  }
		    },
		    mounted: function() {
		      this.$nextTick(function() {
		        this.getPie()
		      })
			  this.drawLineChart()
		    },
		    methods: {
				drawLineChart() {
				      const echarts = require('echarts');
				      let myChart = echarts.init(document.getElementById('chartLine'));
				      myChart.setOption(
				          {
				            title: {
				              text: '营业额趋势图',
				              x: 'left'
				            },
				            tooltip: {
				              trigger: 'axis'
				 
				            },
				            legend: {
				              data: ['营业额'],
				              x: 'right'
				            },
				            grid: {
				              left: '1%',
				              right: '4%',
				              bottom: '3%',
				              containLabel: true
				            },
				            xAxis: {
				              type: 'category',
				              boundaryGap: false,
				              data: ['9月','10月','11月','12月','1月','2月','3月']
				            },
				            yAxis: {
				              type: 'value'
				            },
				            series:
				                [{
				                  name: '营业额',
				                  type: 'line',
				                  // 设置折线图颜色
				                  itemStyle: {
				                    normal: {
				                      lineStyle: {
				                        color: '#7ebedc'
				                      }
				                    }
				                  },
				                  stack: '总量',
				                  data: [1024,1241,1312,1287,1422,1348,1552],
				                }]
				          }
				      );
				    },
		      getPie() {
		        // 绘制图表
		        var myChart = echarts.init(document.getElementById('main'))
		        // 指定图表的配置项和数据
		        var option = {
		          //标题
		          title: {
		            text: '公司总体事务处理情况',
		            x: 'center' ,              //标题位置
		            textStyle: { //标题内容的样式
		              color: '#505d64',
		              fontStyle: 'normal',
		              fontWeight: 600,
		              fontSize: 17 ,//主题文字字体大小，默认为18px
		            },
		          },
		          // stillShowZeroSum: true,
		          //鼠标划过时饼状图上显示的数据
		          tooltip: {
		            trigger: 'item',
		            formatter: '{b}:{c} ({d}%)'
		          },
		          //图例
		          legend: {//图例  标注各种颜色代表的模块
		            // orient: 'vertical',//图例的显示方式  默认横向显示
		            bottom: 10,//控制图例出现的距离  默认左上角
		            left: 'center',//控制图例的位置
		            // itemWidth: 16,//图例颜色块的宽度和高度
		            // itemHeight: 12,
		            textStyle: {//图例中文字的样式
		              color: '#414141',
		              fontSize: 16
		            },
		            data: ['待处理', '处理中', '已完成']//图例上显示的饼图各模块上的名字
		          },
		          //饼图中各模块的颜色
		          color: ['#9ceab2', '#f4d77d', '#8ad0ee'],
		          // 饼图数据
		          series: {
		            // name: 'bug分布',
		            type: 'pie',             //echarts图的类型   pie代表饼图
		            radius: '70%',           //饼图中饼状部分的大小所占整个父元素的百分比
		            center: ['48%', '45%'],  //整个饼图在整个父元素中的位置
		            // data:''               //饼图数据
		            data: [                  //每个模块的名字和值
		              { name: '待处理', value: 30 },
		              { name: '处理中', value: 60 },
		              { name: '已完成', value: 40 },
		            ],
		            itemStyle: {
		              normal: {
		                label: {
		                  show: true,//饼图上是否出现标注文字 标注各模块代表什么  默认是true
		                  // position: 'inner',//控制饼图上标注文字相对于饼图的位置  默认位置在饼图外
		                },
		                labelLine: {
		                  show: true//官网demo里外部标注上的小细线的显示隐藏    默认显示
		                }
		              }
		            },
		          }
		
		        }
		        // 使用刚指定的配置项和数据显示图表。
		        myChart.setOption(option)
		      }
		    }
	}
</script>

<style scoped="scoped">
	.contain{
		display: flex;
		flex-wrap: wrap;
		justify-content:space-around;
		}
		.contain-main{
			width:90%;
			height:200px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
.process{
	display: flex;
	text-align: center;
}
.content{
	margin-right: 30px;
}

</style>
