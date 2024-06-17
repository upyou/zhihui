import request from '@/utils/request'

// 获取个人信息
export const getUserInfoDetail = () => {
  return request.get('/user/info')
}

export const updateUserInfo = (orderId) => {
  return request.post('/order/cancel', { orderId })
}
