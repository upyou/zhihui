import request from '@/utils/request'

export const Postcart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const GetCart = () => {
  return request.get('/cart/list')
}

export const updataCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const deleteCart = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}
