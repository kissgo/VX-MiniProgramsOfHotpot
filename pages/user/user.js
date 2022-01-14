// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
    userCard: [
      {
        card_id: 1,
        card_name: "现金券",
        card_amount:1,
        ishaveCard: true,
        Card: [{
          xjcard_id: 1,
        image: "/image/user/oder/27.png"
        },
        
      ]
        },
        {
          card_id: 2,
          card_name: "产品券",
          card_amount:0,
          ishaveCard: false,
          Card: []
        },
        {
          card_id: 3,
          card_name: "权益卡",
          card_amount:2,
          ishaveCard: true,
          Card: [{
            xjcard_id: 1,
          image: "/image/user/oder/21.png"
          },
          {
            xjcard_id: 2,
          image: "/image/user/oder/23.png"
          }]
        }
      ],

    user: {
      account: {
        src: "/image/user/oder/22.png",
        name: 'Amethyst',
        ID:'1010213020',
        money:'32.13',
        cpcard:'0',
        qycard:'0',
        xjcard:'4',
      }
    },
    cIndex:0
      },
    

    showCard(event){
      console.log(event.currentTarget.dataset.index)
      this.setData({
        cIndex:event.currentTarget.dataset.index
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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