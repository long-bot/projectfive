import axios from 'axios'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 设置请求拦截器
request.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 设置响应拦截器
request.interceptors.response.use((response) => {
  // 如果响应对象中有data 则直接返回data数据
  // 如果没有data  则返回原样数据
  return response.data.data || response.data
}, (error) => {
  return Promise.reject(error)
})

export default request
