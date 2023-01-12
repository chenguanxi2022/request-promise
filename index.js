class RequestPromise {
  static requestPromise = new RequestPromise()
  constructor(options = {}) {
    // 请求根路径
    this.baseUrl = options.baseUrl || ''
    // 请求的 url 地址
    this.url = options.url || ''
    // 请求方式
    this.method = 'GET'
    // 请求参数对象
    this.data = null
    // header 请求头
    this.header = options.header || {}
  }
  get(url, data = {}) {
    this.method = 'GET'
    this.url = this.baseUrl + url
    this.data = data
    return this.request()
  }
  post(url, data = {}) {
    this.method = 'POST'
    this.url = this.baseUrl + url
    this.data = data
    return this.request()
  }
  put(url, data = {}) {
    this.method = 'PUT'
    this.url = this.baseUrl + url
    this.data = data
    return this.request()
  }
  delete(url, data = {}) {
    this.method = 'DELETE'
    this.url = this.baseUrl + url
    this.data = data
    return this.request()
  }
  request() {
    // 清空 header 对象
    this.header = {}
    // 发起请求
    return new Promise((resolve, reject) => {
      let wx = wx
      // 适配 uniapp
      if ('undefined' !== typeof uni) {
        wx = uni
      }
      wx.request({
        url: this.url,
        method: this.method,
        data: this.data,
        header: this.header,
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        },
      })
    })
  }
}

export const $http = RequestPromise.requestPromise
