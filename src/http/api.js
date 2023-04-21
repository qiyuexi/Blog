import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 1000,
})

// 请求拦截器
api.interceptors.request.use( config => {
  // config配置对象， headers请求头
  return config
}, (error) => {
  return Promise.reject(error)
})


//响应拦截器
api.interceptors.response.use( res => {
  // 成功的回调函数：响应拦截器可以检测做的一些事情
  return res.data
}, error => {
  return Promise.reject(error)
})

export default api;