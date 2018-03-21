import { config } from './config'

export const request = (type, url, params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${config.api[config.env]}${url}`,
      data: params,
      method: type,
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
