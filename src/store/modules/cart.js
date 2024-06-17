import { GetCart, updataCart, deleteCart } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, newList) {
      state.cartList = newList
    },
    ChangeCount (state, { goodsId, goodsNum }) {
      const index = state.cartList.find(item => item.goods_id === goodsId)
      index.goods_num = goodsNum
    }
  },
  actions: {
    async getCartList (context) {
      const { data } = await GetCart()
      data.list.forEach(item => {
        item.checked = true
      })
      context.commit('setCartList', data.list)
    },
    async ChangeCount (context, obj) {
      const { goodsId, goodsNum, goodsSkuId } = obj
      context.commit('ChangeCount', { goodsId, goodsNum })
      await updataCart(goodsId, goodsNum, goodsSkuId)
    },
    async delCartList (context) {
      const arr = context.getters.CartList

      const goodsIdArr = arr.map(item => item.id)
      await deleteCart(goodsIdArr)

      context.dispatch('getCartList')
    }
  },
  getters: {
    cartTotal (state) {
      return state.cartList.reduce((total, item) => total + item.goods_num, 0)
    },
    CartList (state) {
      return state.cartList.filter(item => item.checked)
    },
    cartCount (state, getters) {
      return getters.CartList.reduce((num, item) => num + item.goods_num, 0)
    },
    countPrice (state, getters) {
      return getters.CartList.reduce((total, item) => total + item.goods.goods_price_min * item.goods_num, 0).toFixed(2)
    },
    cartlists (state, getters) {
      return getters.CartList.length
    }
  }
}
