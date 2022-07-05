import axios from 'axios'
import store from '../store'
const service = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 1000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // console.log('response',response)
    const authorization = response.headers.authorization
    store.commit('user/setAuthorization', authorization)
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 统一传参处理
// const request = (options) => {
//   if (options.method.toLowerCase() === 'get') {
//     options.params = options.data || {}
//   }
//   return service(options)
// }

export default service
