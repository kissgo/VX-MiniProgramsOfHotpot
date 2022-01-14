// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据 
   */
  data: {
    cartList: null, // 购物车列表
    hascartList: false,  //购物车列表,列表是否有数据,如果有数据，则不为空购物车
    totalPrice: 0, //总价格
    selectAll: true //全选 默认
  },
  /**
  * 计算总价(sum=num*prixe)  要遍历被选中的
  */
  getTotalPrice() {
    let cartList = this.data.cartList;                  // 获取购物车列表
    let sumtotal = 0;
    for (let i = 0; i < cartList.length; i++) {         // 循环列表得到每个数据
      if (cartList[i].selected) {                     // 判断选中才会计算价格
        sumtotal += cartList[i].num * cartList[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      cartList: cartList,
      totalPrice: sumtotal.toFixed(2)
    });
  },
  //单选 1.改变自己的样式，2，改变当前的状态（显示（true or false）） 3.返回数据重新计算价格
  selectedList(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index; //获取自己传的index
    let cartList = this.data.cartList; //获取购物车列表
    let selected = cartList[index].selected;  //当前选中的商品的状态
    cartList[index].selected = !selected; //改变当前选中的商品的状态 true=!true
    this.setData({
      cartList  //重新返回数据
    })
    this.getTotalPrice() //重新计算价格
  },

  /**
     * 购物车全选事件 1.改变自己的样式(记得要返回自己的状态，它是在data里，不是数据里了)，改变当前的状态（显示（true or false）） 2.改变单选的状态cartList[i].selected = selectAll;
     * 3.返回数据重新计算价格
     */
  selectedAll(e) {
    //console.log(e)
    // let index = e.currentTarget.dataset.index; //获取自己传的index
    let selectAll = this.data.selectAll;//是否全选状态
    selectAll = !selectAll; //改变当前选中的商品的状态 true=!true
    let cartList = this.data.cartList; //获取购物车列表
    for (let i = 0; i < cartList.length; i++) {
      cartList[i].selected = selectAll;  //改变所有商品的状态
    }
    this.setData({
      cartList: cartList, //重新返回数据
      selectAll: selectAll
    })
    this.getTotalPrice() //重新计算价格
  },


  //删除事件  cartList.splice(index, 1); //返回数据，同时要判断购物车是不是空，如果不为空就重新计算价格
  delList(e) {
    let index = e.currentTarget.dataset.index; //获取自己传的index
    let cartList = this.data.cartList; //获取购物车列表
    cartList.splice(index, 1); //删除购物车列表里这个商品
    this.setData({
      cartList: cartList //重新返回数据
    })
    if (!cartList.length) { //如果购物车为空
      this.setData({
        hascartList: false   //显示购物车为空页面
      });
    } else {  //如果不为空
      this.getTotalPrice();  //重新计算总价格
    }

  },

  /**
     * 绑定加数量事件
     */
  jia(e) {
    let index = e.currentTarget.dataset.index; //获取自己传的index
    let cartList = this.data.cartList; //获取购物车列表
    let num = cartList[index].num;
    num = num + 1;
    cartList[index].num = num;
    this.setData({
      cartList: cartList //重新返回数据
    })
    this.getTotalPrice();  //重新计算总价格
  },

  /**
     * 绑定减数量事件
     */
  jian(e) {
    let index = e.currentTarget.dataset.index; //获取自己传的index
    let cartList = this.data.cartList; //获取购物车列表
    let num = cartList[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    cartList[index].num = num;
    this.setData({
      cartList: cartList //重新返回数据
    })
    this.getTotalPrice();  //重新计算总价格
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      hascartList: true,
      cartList: [
        { id: 1, title: '豆腐皮', image: 'http://pos.hdlcdns.com/dev/upload/deab87af-7dc4-46cd-8a1c-25226eedb22b.jpg', num: 3, price: 30, selected: true },
        { id: 2, title: '捞派切片牛肉', image: 'http://pos.hdlcdns.com/dev/upload/7b7601ca-b291-4654-99a3-8e08f69418bb.jpg', num: 1, price: 84.0, selected: true },
        { id: 3, title: '猪肚', image: 'http://pos.hdlcdns.com/dev/upload/6bb6815b-7428-486d-8b92-8b40ad40d017.jpg', num: 2, price: 64.0, selected: true }
      ]
    });
    this.getTotalPrice()
  }
})