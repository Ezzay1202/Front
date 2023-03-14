// pages/submitM/submitM.js
const app = getApp();
let index1 = 0;
let list_all = []
let list_show = []
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let list_show = []
    wx.request({
      url: 'http://1.15.118.125:8081/NIC/user',
      data: {
        "method": "userInfo",
        "data": {
          "userid": app.globalData.userid.toString()
        }
      },
      success: (res) => {
        list_all = res.data.data
        console.log(res)
        if (list_all === undefined) {
          // 还没有接任务
        } else {
          for (let i = 0; i < list_all.length; i++) {
            let name = ''
            let detail = ''
            let state = 0
            if (JSON.stringify(list_all[i].comments.editor) != '{}') {
              state = 1
              for (let k in list_all[i].comments.editor) {
                name = k
                detail = list_all[i].comments.editor[k]
              }
            }
            let beginMinute = list_all[i].time.beginMinute
            let endMinute = list_all[i].time.endMinute
            if (list_all[i].time.beginMinute < 10) {
              beginMinute = "0" + list_all[i].time.beginMinute.toString()
            }
            if (list_all[i].time.endMinute < 10) {
              endMinute = "0" + list_all[i].time.endMinute.toString()
            }
            list_show[i] = {
              arr: i,
              missionID: list_all[i].missionID,
              text: list_all[i].description,
              date1: list_all[i].time.month + "月" + list_all[i].time.day + "日" + list_all[i].time.beginHour + ":" + beginMinute,
              date2: list_all[i].time.endHour + ":" + endMinute,
              location: list_all[i].place,
              people: list_all[i].reporterNeeds.article + "文" + list_all[i].reporterNeeds.photo + "摄",
              state: state,
              name: name,
              detail: detail,
              fileArray: []
            }
          }
        }
        console.log(list_show)
        this.setData({
          listm: list_show
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    index1: 0,
    listm: [],
    show: ''
  },
  // 提交
  submitFile(e) {
    let i = e.currentTarget.dataset.id
    let len = this.data.listm[i].fileArray.length
    let count = 0
    for (let j = 0; j < len; j++) {
      console.log(this.data.listm[i].fileArray[j].path)
      wx.uploadFile({
        filePath: this.data.listm[i].fileArray[j].path,
        name: 'file',
        url: 'http://1.15.118.125:8081/NIC/upload?missionID=' + this.data.listm[i].missionID.toString() + '&userid=' + app.globalData.userid.toString(),
        header: {
          "Content-Type": "multipart/form-data"
        },
        success: (res) => {
          let json = JSON.parse(res.data)
          console.log(json)
          if (json.code === 502) {
            count += 1
            if (count === len) {
              wx.showToast({
                title: '提交成功',
              })
              app.sleep(2000)
              wx.navigateBack()
            } else {
              wx.showToast({
                title: '提交失败',
                icon: 'error'
              })
            }
          }
        }
      })
    }

  },
  // 文件上传
  uploadFile(e) {
    console.log(e)
    index1 = e.currentTarget.dataset.index
    console.log(index1)
    let fileArray = 'listm[' + index1 + '].fileArray'
    wx.chooseMessageFile({
      count: 10, //选择文件的数量
      type: 'all', //选择文件的类型
      success: (res) => {
        console.log(res.tempFiles)
        this.setData({
          [fileArray]: this.data.listm[index1].fileArray.concat(res.tempFiles)
        })
      }
    })
    console.log(this.data.listm[index1].fileArray)
  },
  removefile(e) {
    console.log(index1)
    let index = e.currentTarget.dataset.index
    let fileArray = 'listm[' + index1 + '].fileArray'
    console.log(e, index)
    this.data.listm[index1].fileArray.splice(index, 1)
    this.setData({
      [fileArray]: this.data.listm[index1].fileArray
    })
    console.log(this.data.listm[index1].fileArray)
  },
  // 预览附件
  previewFile(e) {
    var string = ''
    string = e.currentTarget.dataset.path.substring(e.currentTarget.dataset.path.indexOf(".") + 1)
    if (string == 'png' || string == 'jpg' || string == 'gif' || string == 'jpeg') {
      // 图片预览
      var arr = []
      arr.push(e.currentTarget.dataset.path)
      wx.previewImage({
        current: e.currentTarget.dataset.path,
        urls: arr
      })
    } else {
      // 文件预览
      wx.openDocument({
        fileType: string, // 文件类型
        filePath: e.currentTarget.dataset.path, // 文件地址
        success: function (res) {
          console.log('成功')
        },
        fail: function (error) {
          console.log("失败")
        }
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