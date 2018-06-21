//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    this.setData({
      // openId: Math.random().toString().slice(2),
      openId: 'ouj0M0Vao60f9XPGyYeF7rHVFfYk',
    })
  },
  message: function (e) {
    wx.setStorageSync('coupon', e.detail.data[0].coupon)
  }
})
