
// 因为需要多次用到设置localstorage和获取localstorage  所以需要封装在一个js模块中
const USER_KEY = 'token'
// 获取localstorage的值   因为是json字符串  所以需要转成JSON对象
export const getItem = () => JSON.parse(window.localStorage.getItem(USER_KEY))
// 设置localstorage的值   因为需要存字符串  所以存json字符串
export const setItem = (data) => window.localStorage.setItem(USER_KEY, JSON.stringify(data))
// 移除localstorage的值
export const removeItem = () => window.localStorage.removeItem(USER_KEY)
