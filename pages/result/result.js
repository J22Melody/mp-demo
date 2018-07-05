function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  var len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i])
    var num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

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
    const useNavigator = compareVersion(wx.getSystemInfoSync().SDKVersion, '2.0.7') > -1
    const coupon = wx.getStorageSync('coupon')
    let count = 0

    this.setData({
      useNavigator,
      coupon: coupon && coupon.omniCouponType !== 'NO_COUPON' && {
        ...coupon,
        begin: coupon.beginTime.slice(0, 4) + '-' + coupon.beginTime.slice(4, 6) + '-' + coupon.beginTime.slice(6, 8),
        end: coupon.endTime.slice(0, 4) + '-' + coupon.endTime.slice(4, 6) + '-' + coupon.endTime.slice(6, 8),
      },
      // coupon: {
      //   couponDesc: `- 限扫玛购微信支付，单笔支付金额大于100元(含100元)可自动抵扣1.7元；
      //         - 购物券有效期2018年6月26日至2018年6月29日，请在有效期内使用；
      //         - 享受优惠若发生退款，相应优惠根据退款总额同比例扣除；
      //         - 限扫玛购使用，详情可见店内公告或咨询店员；
      //         - 本券不适用于购买礼品卡及大单购物。`,
      //   couponId: '1442',
      //   couponMininum: 10000,
      //   couponName: '测试代金券',
      //   couponRemainValue: '5',
      //   couponState: 'SENDED',
      //   couponStockId: '1717',
      //   couponUseValue: '0',
      //   couponValue: 50,
      //   sendSource: 'FULL_SEND',
      //   omniCouponType: 'WALMART',
      //   omniCouponTypeId: '6f282bf5-3b29-4e47-8e81-cc90ee070293',
      //   beginTime: '20180608000000',
      //   endTime: '20180615235959',
      // },
      more: '更多优惠券在这里哦',
      collapse: true,
    })

    setInterval(() => {
      this.setData({
        more: count % 2 === 0 ? '点击下方图片领取' : '更多优惠券在这里哦'
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
      title: '扫玛购专属优惠券，幸运抽奖high不停！',
      path: '/pages/landing/landing',
      imageUrl: 'https://mco-image-stage.walmartmobile.cn/image/share-bg.jpg',
    }
  },

  onClickLink1: function (e) {
    wx.reportAnalytics('wfs_88_banner', {})
    if (!this.data.useNavigator) {
      wx.navigateToMiniProgram({
        appId: "wxcdc13dc8495e174e",
        path: `/pages/activityH5/activityH5?redirectUrl=${encodeURIComponent('https://pro.m.jd.com/mini/active/4R1FivQhRMNQWRJ4v3f6MDAi3Tvr/index.html?wxAppName=Kepler&wxAppId=wxcdc13dc8495e174e&siteId=WXAPP-JA2016-1')}`,
      })
    }
  },

  onClickLink2: function (e) {
    wx.reportAnalytics('jddj_88_banner', {})
    if (!this.data.useNavigator) {
      wx.navigateToMiniProgram({
        appId: "wxffb7d80f8c50ac5c",
        path: "/pages/home/home?activityId=109670&type=12&&business=107",
      })
    }
  },

  onClickMore: function (e) {
    this.setData({
      collapse: !this.data.collapse,
    })
  },
})