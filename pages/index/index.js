//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
  },
  message: function (e) {
    wx.setStorageSync('coupon', e.detail.data[0].coupon)
  }
})
