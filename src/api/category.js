import request from '@/utils/request'

export const getCategoryData = () => {
  return request.get('/category/list')
}

export const getProdetails = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}

export const getProdetailsComment = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
