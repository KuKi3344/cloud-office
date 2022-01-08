import axios from 'axios'
import { Message } from 'element-ui';
import router from '../router'


//请求拦截器
axios.interceptors.request.use(config=>{
	//如果存在token，请求携带这个token
	if(window.sessionStorage.getItem('tokenStr')){
		config.headers['Authorization'] = window.sessionStorage.getItem('tokenStr');
	}
	return config;
},error=>{
	console.log(error);
})
//配置响应拦截器
axios.interceptors.response.use((success)=>{
	//业务逻辑错误
	if (success.status&&success.status==200){
		if(success.data.code==500||success.data.code==401||success.data.code==403){
			// 如果业务逻辑错误或者未登录或者权限禁止
			Message.error({message:success.data.message});
			return;
		}
		Message.success({message:success.data.message});
	}
	return success.data;
}, (error)=>{
	if(error.response.code == 504||error.response.code == 404){
		Message.error({message:'服务器不见辣'});
	}else if(error.response.code==403){
	}else if(error.response.code == 401){
		Message.error({message:'尚未登陆，请登录'});
		router.replace('/userlogin');
	}else{
		if(error.response.data.message){
			Message.error({message:error.response.data.message});
		}else{
			Message.error({message:'未知错误！'});
		}
	}
	return;
});
let base = ''; //很多是需要通过/api来调用接口的，方便反向代理直接匹配/api，把访问本地地址/api转到后端接口地址/api
//传送json格式的post请求
export const postRequest = (url,params)=>{
	return axios({
		method:'post',
		url:`${base}${url}`,
		data:params
	})
}
export const getRequest = (url,params)=>{
	return axios({
		method:'get',
		url:`${base}${url}`,
		data:params
	})
}
export const putRequest = (url,params)=>{
	return axios({
		method:'put',
		url:`${base}${url}`,
		data:params
	})
}
export const deleteRequest = (url,params)=>{
	return axios({
		method:'delete',
		url:`${base}${url}`,
		data:params
	})
}