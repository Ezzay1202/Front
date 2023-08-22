// pages/login/login.js
const app = getApp()
Page({
  content(e) {
    this.setData({
      userid: e.detail.value
    })
  },
  password(e) {
    this.setData({
      password: e.detail.value
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    open: true,
    isShow: false,
    userid: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('check')
    if (app.globalData.userid != '') {
      this.Login3()
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  password_eye() {
    let open = !this.data.open
    this.setData({
      open: open
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  password_eye() {
    let open = !this.data.open
    this.setData({
      open: open
    })
  },
  Login1() {
    //console.log(app.globalData)
    if (this.data.userid === '') {
      wx.showToast({
        title: '请输入账户！',
        icon: 'error',
        mask: true
      })
    } else if (this.data.password === '') {
      wx.showToast({
        title: '请输入密码！',
        icon: 'error',
        mask: true
      })
    } else {
      wx.showLoading({
        title: '登陆中...',
        mask: true,
        success: () => {
          wx.request({
            data: {
              data: {
                password: this.data.password, //password,
                userid: this.data.userid //userid
              },
              method: "signUp"
            },
            url: 'https://www.hustnic.tech:8081/NIC/login',
            success: (res) => {
              //console.log(res.data)
              if (res.data.code === 102) {
                app.globalData.hasLogin = true
                app.globalData.authority1 = res.data.data.authority1
                app.globalData.authority2 = res.data.data.authority2
                app.globalData.authority3 = res.data.data.authority3
                app.globalData.username = res.data.data.username
                app.globalData.userid = res.data.data.userid
                app.globalData.head = res.data.data.head
                app.globalData.tel = res.data.data.tel
                app.globalData.week_kcb = res.data.time.week
                app.globalData.identity = res.data.data.identity
                app.globalData.missionTaken = res.data.data.missionTaken
                app.globalData.finishedPerformance = res.data.data.finishedPerformance
                //app.globalData.password = this.data.password

                // 把 SessionId 和过期时间放在内存中的全局对象和本地缓存里边
                app.globalData.sessionId = res.data.sessionId
                wx.setStorageSync('SESSIONID', res.data.sessionId)
                //存储账号密码
                wx.setStorageSync('USERID', res.data.data.userid)
                //console.log(this.data.password)
                wx.setStorageSync('PASSWORD', this.data.password)
                // 假设登录态保持1天
                let expiredTime = new Date().getTime() + 1 * 24 * 60 * 60 * 1000 * 180
                app.globalData.expiredTime = expiredTime
                wx.setStorageSync('EXPIREDTIME', expiredTime)
                wx.showToast({
                    title: '登录成功',
                    mask: true
                  }),
                  app.sleep(1200)
                //
                this.setData({
                  isShow: true
                })
              }
              if (res.data.code === 99) {
                wx.showToast({
                  title: '查无此用户',
                  icon: 'error',
                  mask: true
                })
              }
              if (res.data.code === 101) {
                wx.showToast({
                  title: '密码错误',
                  icon: 'error',
                  mask: true
                })
              }
              if (res.data.code === 103) {
                wx.showToast({
                  title: 'Error',
                  icon: 'error',
                  mask: true
                })
              }
            }
          })
        },
        complete: () => {
          wx.hideLoading({
            success: (res) => {},
          })
        }
      })
    }
  },
  Login3() {
    console.log(app.globalData)
    wx.showLoading({
      title: '登陆中...',
      mask: true,
      success: () => {
        wx.request({
          data: {
            data: {
              password: app.globalData.password, //password,
              userid: app.globalData.userid //userid
            },
            method: "signUp"
          },
          url: 'https://www.hustnic.tech:8081/NIC/login',
          success: (res) => {
            //console.log(res.data)
            if (res.data.code === 102) {
              app.globalData.hasLogin = true
              app.globalData.authority1 = res.data.data.authority1
              app.globalData.authority2 = res.data.data.authority2
              app.globalData.authority3 = res.data.data.authority3
              app.globalData.username = res.data.data.username
              app.globalData.userid = res.data.data.userid
              app.globalData.head = res.data.data.head
              app.globalData.tel = res.data.data.tel
              app.globalData.week_kcb = res.data.time.week
              app.globalData.identity = res.data.data.identity
              app.globalData.missionTaken = res.data.data.missionTaken
              app.globalData.finishedPerformance = res.data.data.finishedPerformance
              //app.globalData.password = this.data.password

              // 把 SessionId 和过期时间放在内存中的全局对象和本地缓存里边
              app.globalData.sessionId = res.data.sessionId
              wx.setStorageSync('SESSIONID', res.data.sessionId)
              // 假设登录态保持1天
              let expiredTime = new Date().getTime() + 1 * 24 * 60 * 60 * 1000 * 180
              app.globalData.expiredTime = expiredTime
              wx.setStorageSync('EXPIREDTIME', expiredTime)
              wx.showToast({
                  title: '登录成功',
                  mask: true
                }),
                app.sleep(1200)
              wx.redirectTo({
                url: '/pages/home/home',
              })
            }
            if (res.data.code === 99) {
              wx.showToast({
                title: '查无此用户',
                icon: 'error',
                mask: true
              })
            }
            if (res.data.code === 101) {
              wx.showToast({
                title: '密码错误',
                icon: 'error',
                mask: true
              })
            }
            if (res.data.code === 103) {
              wx.showToast({
                title: 'Error',
                icon: 'error',
                mask: true
              })
            }
          }
        })
      },
      complete: () => {
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })

  },
  gotoHome() {
    wx.navigateTo({
      url: '/pages/home/home',
    })
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '是否授权？',
      success: (res) => {
        console.log(res)
        let datalist1 = res
        wx.login({
          success: (res) => {
            console.log(res)
            let datalist2 = res
            wx.request({
              url: 'https://www.hustnic.tech:8081/NIC/getLoginCertificate',
              data: {
                'encryptedData': datalist1.encryptedData,
                'iv': datalist1.iv,
                'signature': datalist1.signature,
                'rawData': datalist1.rawData,
                'code': datalist2.code,
                'userid': app.globalData.userid
              },
              success: (res) => {
                //console.log(res)
                // 这里是获取下发权限地方，根据官方文档，可以根据  wx.getSetting() 的 withSubscriptions   这个参数获取用户是否打开订阅消息总开关。后面我们需要获取用户是否同意总是同意消息推送。所以这里要给它设置为true 。
                wx.getSetting({
                  withSubscriptions: true, //  这里设置为true,下面才会返回mainSwitch
                  success: function (res) {
                    console.log(1)
                    // 调起授权界面弹窗
                    if (res.subscriptionsSetting.mainSwitch) { // 用户打开了订阅消息总开关
                      console.log(2, res.subscriptionsSetting)
                      if (res.subscriptionsSetting.itemSettings != null) { // 用户同意总是保持是否推送消息的选择, 这里表示以后不会再拉起推送消息的授权
                        console.log(3)
                        let moIdState = res.subscriptionsSetting.itemSettings['uuQFBkHw0iV9EQhtGNIwaF4zD7kTN4JIIMgJScDUUqY', 'srvRC1W53H6Fns29YbmsVpZgh1j82egPTT6gD8T1VFc', '9stBRAqDVcQt15Oi4FgLw75P7xpzb9YrifSX7-jLGoQ']; // 用户同意的消息模板id
                        console.log(moIdState)
                        if (moIdState === 'accept') {
                          console.log('接受了消息推送');

                        } else if (moIdState === 'reject') {
                          console.log("拒绝消息推送");

                        } else if (moIdState === 'ban') {
                          console.log("已被后台封禁");

                        }
                      } else {
                        // 当用户没有点击 ’总是保持以上选择，不再询问‘  按钮。那每次执到这都会拉起授权弹窗
                        let tmplist = [
                          'srvRC1W53H6Fns29YbmsVpZgh1j82egPTT6gD8T1VFc', 'uuQFBkHw0iV9EQhtGNIwaF4zD7kTN4JIIMgJScDUUqY', '9stBRAqDVcQt15Oi4FgLw75P7xpzb9YrifSX7-jLGoQ'
                        ]
                        wx.showModal({
                          title: '提示',
                          content: '请授权开通服务通知',
                          showCancel: true,
                          success: function (ress) {
                            console.log(ress)
                            if (ress.confirm) {
                              wx.requestSubscribeMessage({ // 调起消息订阅界面
                                tmplIds: [tmplist[1]],
                                success(res) {
                                  console.log('订阅消息 成功 ');
                                  console.log(res);
                                  wx.showModal({
                                    title: '提示',
                                    content: '请授权开通服务通知',
                                    showCancel: true,
                                    success: function (ress) {
                                      console.log(ress)
                                      if (ress.confirm) {
                                        wx.requestSubscribeMessage({ // 调起消息订阅界面
                                          tmplIds: [tmplist[0]],
                                          success(res) {
                                            console.log('订阅消息 成功 ');
                                            console.log(res);
                                            wx.showModal({
                                              title: '提示',
                                              content: '请授权开通服务通知',
                                              showCancel: true,
                                              success: function (ress) {
                                                console.log(ress)
                                                if (ress.confirm) {
                                                  wx.requestSubscribeMessage({ // 调起消息订阅界面
                                                    tmplIds: [tmplist[2]],
                                                    success(res) {
                                                      console.log('订阅消息 成功 ');
                                                      console.log(res);

                                                    },
                                                    fail(er) {
                                                      console.log("订阅消息 失败 ");
                                                      console.log(er);
                                                    }
                                                  })


                                                }
                                              }
                                            })
                                          },
                                          fail(er) {
                                            console.log("订阅消息 失败 ");
                                            console.log(er);
                                          }
                                        })


                                      }
                                    }
                                  })
                                },
                                fail(er) {
                                  console.log("订阅消息 失败 ");
                                  console.log(er);
                                }
                              })


                            }
                          }
                        })
                      }
                    } else {
                      console.log('订阅消息未开启')
                    }
                  },
                  fail: function (error) {
                    console.log(error);
                  },
                })
              }
            })
          }
        })
      },
      fail: (res) => {
        //console.log(res)
      },
      complete: (res) => {
        wx.redirectTo({
          url: '/pages/home/home',
        })
      }
    })




    /*
    wx.getUserProfile({
      desc: '是否授权？',
      success: (res) => {
        console.log(res)
        let datalist1 = res
        wx.login({
          success: (res) => {
            //console.log(res)
            let datalist2 = res
            wx.request({
              url: 'https://www.hustnic.tech:8081/NIC/getLoginCertificate',
              data: {
                'encryptedData': datalist1.encryptedData,
                'iv': datalist1.iv,
                'signature': datalist1.signature,
                'rawData': datalist1.rawData,
                'code': datalist2.code,
                'userid': app.globalData.userid
              },
              success: (res) => {
                //console.log(res)
              }
            })
          }
        })
      },
      fail: (res) => {
        //console.log(res)
      },
      complete: (res) => {
        wx.redirectTo({
          url: '/pages/home/home',
        })
      }
    })
    */
  },
  cancelMask() {
    wx.redirectTo({
      url: '/pages/home/home',
    })
  }
})