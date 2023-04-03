// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    let sessionId = wx.getStorageSync('SESSIONID')
    let expiredTime = wx.getStorageSync('EXPIREDTIME')
    let userid = wx.getStorage('USERID')
    let password = wx.getStorage("PASSWORD")
    let now = +new Date()
    if (now - expiredTime <= 1 * 24 * 60 * 60 * 1000 * 180) {
      this.globalData.sessionId = sessionId
      this.globalData.expiredTime = expiredTime
      this.globalData.userid = userid
      this.globalData.password = password
    }

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  sleep(time) {
    let now = new Date()
    let entertime = now.getTime()
    let endtime = now.getTime()
    while (endtime - entertime < time) {
      endtime = new Date().getTime()
    }
  },
  globalData: {
    hasLogin: false,
    userid: "",
    password:"",
    username: "",
    head:"",//headurl
    tel: "",
    identity: "",
    authority1: 0, //记者权限（接任务）
    authority2: 0, //编辑部成员（发布任务和审核稿件权限）
    authority3: 0, //辅导员权限（稿件二审）
    finishPerformance: [],
    missionTaken: [],
    week_kcb: 0,
    kcb: [],
    kcb_code: 0,
    sessionID: null,
    expiredTime: 0
  }
})