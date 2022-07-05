import request from '../utils/request'
// 验证码
const codes = () => {
  return request({ url: '/captcha', method: 'GET' })
}
// 登录
const login = (data) => {
  console.log(data)
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}
export default {
  codes,
  login
}
