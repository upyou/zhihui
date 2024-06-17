const KEY = 'vue-shopping-cart'

export const getInfo = () => {
  const defaultInfo = { token: '', userId: '' }
  const info = localStorage.getItem(KEY)
  return info ? JSON.parse(info) : defaultInfo
}

export const setInfo = (info) => {
  localStorage.setItem(KEY, JSON.stringify(info))
}

export const removeInfo = () => {
  localStorage.removeItem(KEY)
}

const name = 'HistoryName'
export const getHistory = () => {
  const re = localStorage.getItem(name)
  return re ? JSON.parse(re) : []
}

export const setHistory = (history) => {
  localStorage.setItem(name, JSON.stringify(history))
}
