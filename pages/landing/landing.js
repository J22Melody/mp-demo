//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    this.setData({
      openId: Math.random().toString().slice(2),
    })
  },
  message: function (e) {
    wx.setStorageSync('coupon', e.detail.data[0].coupon)
  }
})
