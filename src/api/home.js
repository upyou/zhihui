import request from '@/utils/request'

export const getGuessList = () => {
  return request.get('/page/detail')
}
