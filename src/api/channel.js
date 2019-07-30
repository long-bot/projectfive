
import request from '@/utils/request.js'
// 获取频道数据
export const getChnnelOrDefault = () => {
  return request({
    method: 'get',
    url: 'app/v1_0/user/channels'
  })
}
