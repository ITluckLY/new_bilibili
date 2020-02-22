/**
 *
 * @author 洋哥
 * @create 2020-02-20 16:07
 **/
import  axios from 'axios'
 export function request(config) {
  //1,创建axios的实例
  const  instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:2000
  })

   // 2, axios 的拦截器
   instance.interceptors.request.use( config =>{
     return config
   }, err =>{
     console.log(err);
   })

   instance.interceptors.response.use( res =>{
     return res.data
   },err=>{
     console.log(err);
   })

   // 3 发送真正的网络请求
   return instance(config)


}

