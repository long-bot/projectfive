
import request from '@/utils/request.js'
// 导出登录需要发送的请求
export const login = ({ mobile, code }) => {
  console.log(1)
  return request({
    method: 'post',
    url: 'app/v1_0/authorizations',
    data: { mobile, code }
  })
}
