// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.13562655285273,
    latitude: 23.04308268848755,
    markers: [
    {
      id: 0,
      latitude: 23.089337,
      longitude: 113.321285,
      width: 28,
      height: 32
    },
    //位置1
    {
      id: 1,
      latitude: 23.091024,
      longitude: 113.319884,
      width: 28,
      height: 32
    },
    //位置2
    {
      id: 2,
      
      latitude: 23.03377135768493,
      longitude: 113.17075479351229,
      width: 28,
      height: 32
    },
    //位置3
    {
      id: 3,
      latitude: 23.02542516569787,
      longitude: 113.1417505798413,
      width: 28,
      height: 32
    },
    //位置4
    {
      id: 4,
      latitude: 23.022740816325694,
      longitude: 113.14681189547798,
      width: 28,
      height: 32
    },
  ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        console.log("当前位置的经纬度为：", res.latitude, res.longitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,

        })
      }
    })
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
  onShareAppMessage: function () {

  }
})