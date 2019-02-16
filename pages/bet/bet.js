// pages/bet/bet.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    betTypeId: 0,
    betSiteId: 0,
    canOrder: true,
    betLoopMax: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
    threeBalls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    betConfig: [{
      "name": "双色球",
      "picName": "shuangseqiu",
      "redNum": "33",
      "blueNum": "16"
    }, {
      "name": "七乐彩",
      "picName": "qilecai",
      "redNum": "30",
      "blueNum": "0"
    }, {
      "name": "3D",
      "picName": "3D",
      "redNum": "0",
      "blueNum": "0"
    }],
    choseRedBalls: [],
    choseRedBallIndex: 0,
    choseBlueBalls: [],
    choseBlueBallIndex: 0,
    tapCurrentIndex: [],
    chosethreeDFirst: [],
    chosethreeDSecond: [],
    chosethreeDThird: [],
    chosethreeDFirstIndex: 0,
    chosethreeDSecondIndex: 0,
    chosethreeDThirdIndex: 0,
    times: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      betTypeId: options.betTypeId,
      betSiteId: options.betSiteId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 用户点击选号
   */
  tapRedBall: function(e) {
    var ballnum = e.currentTarget.dataset.ballnum;
    if (this.data.choseRedBalls.indexOf(ballnum) == -1) {
      this.data.choseRedBalls[this.data.choseRedBallIndex++] = ballnum;
      this.data.tapCurrentIndex = ballnum - 1;
      this.setData({
        choseRedBalls: this.data.choseRedBalls
      })
      console.info("choseRed : " + ballnum);
      console.info("choseRedBalls : " + this.data.choseRedBalls);
    } else {
      this.data.choseRedBalls.splice(this.data.choseRedBalls.indexOf(ballnum), 1);
      this.data.choseRedBallIndex--;
      this.setData({
        choseRedBalls: this.data.choseRedBalls
      })
      console.info("unchoseRed : " + ballnum);
      console.info("choseRedBalls : " + this.data.choseRedBalls);
    }

  },

  tapBlueBall: function(e) {
    var ballnum = e.currentTarget.dataset.ballnum;
    if (this.data.choseBlueBalls.indexOf(ballnum) == -1) {
      this.data.choseBlueBalls[this.data.choseBlueBallIndex++] = ballnum;
      this.data.tapCurrentIndex = ballnum - 1;
      this.setData({
        choseBlueBalls: this.data.choseBlueBalls
      })
      console.info("choseBlue : " + ballnum);
      console.info("choseBlueBalls : " + this.data.choseBlueBalls);
    } else {
      this.data.choseBlueBalls.splice(this.data.choseBlueBalls.indexOf(ballnum), 1);
      this.data.choseBlueBallIndex--;
      this.setData({
        choseBlueBalls: this.data.choseBlueBalls
      })
      console.info("unchoseBlue : " + ballnum);
      console.info("choseBlueBalls : " + this.data.choseBlueBalls);
    }

  },
  tap3DBall: function(e) {
    var ballnum = e.currentTarget.dataset.ballnum;
    var digit = e.currentTarget.dataset.digit;

      switch(digit) {
        case 0:
          if (this.data.chosethreeDFirst.indexOf(Number(ballnum)) == -1) {
            this.data.chosethreeDFirst[this.data.chosethreeDFirstIndex++] = Number(ballnum);
            this.data.tapCurrentIndex = ballnum - 1;
            this.setData({
              chosethreeDFirst: this.data.chosethreeDFirst
            })
            console.info("chosethreeDFirst : " + ballnum);
            console.info("chosethreeDFirstBalls : " + this.data.chosethreeDFirst);
          } else {
            this.data.chosethreeDFirst.splice(this.data.chosethreeDFirst.indexOf(Number(ballnum)), 1);
            this.data.chosethreeDFirstIndex--;
            this.setData({
              chosethreeDFirst: this.data.chosethreeDFirst
            })
            console.info("unchosethreeDFirst : " + ballnum);
            console.info("chosethreeDFirstBalls : " + this.data.chosethreeDFirst);
          }
        break;
        case 1:
          if (this.data.chosethreeDSecond.indexOf(Number(ballnum)) == -1) {
            this.data.chosethreeDSecond[this.data.chosethreeDSecondIndex++] = Number(ballnum);
            this.data.tapCurrentIndex = ballnum - 1;
            this.setData({
              chosethreeDSecond: this.data.chosethreeDSecond
            })
            console.info("chosethreeDSecond : " + ballnum);
            console.info("chosethreeDSecondBalls : " + this.data.chosethreeDSecond);
          } else {
            this.data.chosethreeDSecond.splice(this.data.chosethreeDSecond.indexOf(Number(ballnum)), 1);
            this.data.chosethreeDSecondIndex--;
            this.setData({
              chosethreeDSecond: this.data.chosethreeDSecond
            })
            console.info("unchosethreeDSecond : " + ballnum);
            console.info("chosethreeDSecondBalls : " + this.data.chosethreeDSecond);
          }
        break;
        case 2:
          if (this.data.chosethreeDThird.indexOf(Number(ballnum)) == -1) {
            this.data.chosethreeDThird[this.data.chosethreeDThirdIndex++] = Number(ballnum);
            this.data.tapCurrentIndex = ballnum - 1;
            this.setData({
              chosethreeDThird: this.data.chosethreeDThird
            })
            console.info("chosethreeDThird : " + ballnum);
            console.info("chosethreeDThirdBalls : " + this.data.chosethreeDThird);
          } else {
            this.data.chosethreeDThird.splice(this.data.chosethreeDThird.indexOf(Number(ballnum)), 1);
            this.data.chosethreeDThirdIndex--;
            this.setData({
              chosethreeDThird: this.data.chosethreeDThird
            })
            console.info("unchosethreeDThird : " + ballnum);
            console.info("chosethreeDThirdBalls : " + this.data.chosethreeDThird);
          }
        break;
      }
  },

  orderSubmit: function(e) {
    switch (this.data.betTypeId) {
      case "1": //双色球
        wx.request({
          url: 'http://localhost:8765/iBet/order/newOrder',
          data: {
            userId: app.globalData.userId,
            betSiteId: this.data.betSiteId,
            betId: this.data.betSiteId,
            redBalls: this.data.choseRedBalls,
            blueBalls: this.data.choseBlueBalls,
            times: this.data.times
          },
          success(orderRes) {
            console.log(orderRes);
            switch (orderRes.data.rtnCode) {
              case "999":
                wx.showModal({
                  title: '抱歉！',
                  content: '系统问题' + orderRes.data.rtnMessage,
                })
                break;
              case "0":
                wx.switchTab({
                  url: '../buyed/buyed',
                })
                break;
              case "1":
                wx.showModal({
                  title: '抱歉！',
                  content: '系统问题' + orderRes.data.rtnMessage,
                })
                break;
            }
          },
          fail(err) {

          }
        })
        break;
      case "2": //七乐彩
        wx.request({
          url: 'http://localhost:8765/iBet/order/newOrder',
          data: {
            userId: app.globalData.userId,
            betSiteId: this.data.betSiteId,
            betId: this.data.betSiteId,
            redBalls: this.data.choseRedBalls,
            blueBalls: this.data.choseBlueBalls,
            times: this.data.times
          },
          success(orderRes) {
            console.log(orderRes);
            switch (orderRes.data.rtnCode) {
              case "999":
                wx.showModal({
                  title: '抱歉！',
                  content: '系统问题' + orderRes.data.rtnMessage,
                })
                break;
              case "0":
                wx.switchTab({
                  url: '../buyed/buyed',
                })
                break;
              case "1":
                wx.showModal({
                  title: '抱歉！',
                  content: '系统问题' + orderRes.data.rtnMessage,
                })
                break;
            }
          },
          fail(err) {

          }
        })
        break;
      case "3": //3D
        var threeDBalls = new Array(this.data.chosethreeDFirst,this.data.chosethreeDSecond,this.data.chosethreeDThird);
        wx.request({
          url: 'http://localhost:8765/iBet/order/newOrder',
          data: {
            userId: app.globalData.userId,
            betSiteId: this.data.betSiteId,
            betId: this.data.betSiteId,
            redBalls: threeDBalls,
            blueBalls: this.data.choseBlueBalls,
            times: this.data.times
          },
          success(orderRes) {
            console.log(orderRes);
            switch (orderRes.data.rtnCode) {
              case "999":
                wx.showModal({
                  title: '抱歉！',
                  content: '系统问题' + orderRes.data.rtnMessage,
                })
                break;
              case "0":
                wx.switchTab({
                  url: '../buyed/buyed',
                })
                break;
              case "1":
                wx.showModal({
                  title: '抱歉！',
                  content: '系统问题' + orderRes.data.rtnMessage,
                })
                break;
            }
          },
          fail(err) {

          }
        })
        break;
    }
  }

})