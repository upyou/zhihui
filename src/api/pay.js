import request from '../utils/request'

export const getAddressList = () => {
  return request.get('/address/list')
}

export const getPay = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode,
      delivery: 10,
      shopId: 0,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}

export const Order = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10,
    shopId: 0,
    couponId: 0,
    isUsePoints: 0,
    payType: 10,
    ...obj

  })
}

export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
