// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    Index:0,
  png:[
    "/image/home/11.jpg",
    "/image/home/12.jpg",
    "/image/home/13.jpg",

  ],

  },
  event0(e){
    // console.log(e)
    this.setData({
      Index:e.detail.current
    })
  },
  event1(e){
    wx.switchTab({
      url: '/pages/fenlei/fenlei',
    })
  },
  event2(e){
    wx.switchTab({
      url: '/pages/user/user',
    })
  },
  event3(e){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  // 事件处理函数

  onLoad() {
  
    }
  



})
