// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  sleep(time){
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
    username: "",
    identity: "",
    authority1: 0,//记者权限（接任务）
    authority2: 0,//编辑部成员（发布任务和审核稿件权限）
    authority3: 0,//辅导员权限（稿件二审）
    missionCompleted: [],
    missionTaken: [],
    week_kcb: 6,
    kcb:[],
    kcb_code:0
  }
})