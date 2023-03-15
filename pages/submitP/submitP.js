// pages/submitP/submitP.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  content(e) {
    let index = e.currentTarget.dataset.index
    let url = 'listp[' + index + '].url'
    this.setData({
      [url]: e.detail.value
    })
  },
  goto(e) {
    console.log(e)
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `../seeM/seeM?url=${url}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      listp: []
    })
    wx.request({
      url: 'http://1.15.118.125:8081/NIC/user',
      data: {
        'method': 'showLayout',
        'data': {
          'userid': app.globalData.userid
        }
      },
      success: (res) => {
        console.log(res.data)
        let list_all = res.data.data
        let list_show = []
        for (let i = 0; i < list_all.length; i++) {
          let taglist = []
          for (let j in list_all[i].tags) {
            for (let k = 0; k < list_all[i].tags[j].length; k++) {
              taglist.push(j + '-' + list_all[i].tags[j][k])
            }
          }
          let filelist = []
          for (let k in list_all[i].files) {
            let temp = {
              name: k,
              size: 'none'
            }
            filelist.push(temp)
          }
          let peoplelist = []
          for (let m in list_all[i].postscript) {
            let temp = {
              name: m
            }
            peoplelist.push(temp)
          }
          let tempmission = {
            missionID: list_all[i].missionID,
            text: list_all[i].description,
            date: list_all[i].deadline,
            tag: taglist,
            file: filelist,
            people: peoplelist,
            url: '',
          }
          list_show.push(tempmission)
        }
        this.setData({
          listp: list_show
        })
      }
    })
  },
  submitP(e) {
    console.log(this.data.listp[e.currentTarget.dataset.index].url)
    let url = this.data.listp[e.currentTarget.dataset.index].url
    if (url != '') {
      wx.request({
        url: 'http://1.15.118.125:8081/NIC/take',
        data: {
          'method': 'uploadURL',
          'data': {
            'missionID': String(this.data.listp[e.currentTarget.dataset.index].missionID),
            'userid': String(app.globalData.userid),
            'url': this.data.listp[e.currentTarget.dataset.index].url
          }
        },
        success: (res) => {
          console.log(res.data)
          if (res.data.code === 202) {
            wx.showToast({
              title: '上传成功'
            })
            this.onLoad()
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'error'
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '请输入排版链接！',
        icon: 'error'
      })
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

  }
})