// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const coupon = wx.getStorageSync('coupon')
    let count = 0

    this.setData({
      coupon: coupon.omniCouponType !== 'NO_COUPON' && {
        ...coupon,
        begin: coupon.beginTime.slice(0, 4) + '-' + coupon.beginTime.slice(4, 6) + '-' + coupon.beginTime.slice(6, 8),
        end: coupon.endTime.slice(0, 4) + '-' + coupon.endTime.slice(4, 6) + '-' + coupon.endTime.slice(6, 8),
      },
      more: '更多优惠在这里哦'
    })

    setInterval(() => {
      this.setData({
        more: count % 2 === 0 ? '点击即可领取' : '更多优惠在这里哦'
      })

      count = count + 1
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '自定义转发标题',
      path: '/pages/index/index'
    }
  },

  test: function (res) {
    wx.reportAnalytics('test_click_link', {});
  }
})