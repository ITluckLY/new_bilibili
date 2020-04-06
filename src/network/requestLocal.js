/**
 *
 * @author 洋哥
 * @create 2020-04-05 17:01
 **/
import axios from "axios";

export function requestLocal(config) {
  // 1, 创建axios 的实例
  const instance = axios.create({
    headers: {
      'Content-Type': "application/json;charset=utf-8",
       'X-Requested-With': 'XMLHttpRequest'
    },

    baseURL: 'http://www.liulongbin.top:3005/',
    timeout: 2000
  })

  // 2,axios 的拦截器
  instance.interceptors.request.use(config => {
      return config
    },
    err => {
      console.log(err);
    })


  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })


  // 3,发送真正的网络请求
  return instance(config)
}
