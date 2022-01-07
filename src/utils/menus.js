import { getRequest } from './api'


export const initMenu = (router,store)=>{
	if(store.state.routes.length>0){
		return;
	}
	//请求菜单
	getRequest('/system/basic/menu').then(resp=>{
		// console.log(resp.data);
		if(resp.data){
			//格式化Router
			let fmtRoutes = formatRoutes(resp.data);
			//添加到路由
			router.addRoutes(fmtRoutes);
			//将数据存入vuex
			store.commit('initRoutes',fmtRoutes);
		}
	})
}
//初始化路由
export const formatRoutes = (routes)=>{
	let fmtRoutes = [];
	routes.forEach(router=>{
		if(router.component){
		let{
			path,
			component,
			name,
			iconCls,
			subMenu,
		} = router;
		if(subMenu && subMenu instanceof Array){
			//递归
			subMenu = formatRoutes(subMenu);
		}
		let fmtRouter={
			path:path,
			name:name,
			iconCls:iconCls,
			subMenu:subMenu,
			component(resolve){
				if(component.startsWith('Emp')){
					require(['../views/emp/'+component+'.vue'],resolve);
				}else if(component.startsWith('Per')){
					require(['../views/per/'+component+'.vue'],resolve);
				}else if(component.startsWith('Sal')){
					require(['../views/sal/'+component+'.vue'],resolve);
				}else if(component.startsWith('Sta')){
					require(['../views/sta/'+component+'.vue'],resolve);
				}else if(component.startsWith('Sys')){
					require(['../views/sys/'+component+'.vue'],resolve);
				}						
			}
		}
		fmtRoutes.push(fmtRouter);
		}
	});
	return fmtRoutes;
}