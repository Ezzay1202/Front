// pages/fcheckM/fcheckM.js
const app = getApp();
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const resultInfo = JSON.parse(options.resultInfo)
    console.log(resultInfo)
    this.setData({
      mag: resultInfo.mag,
      tag: resultInfo.tag,
      attitude: resultInfo.attitude,
      code: resultInfo.code,
      code1: resultInfo.code1,
      file_download: resultInfo.files
    })
  },

  downloadFile: function (e) {
    wx.downloadFile({
      url: 'http://1.15.118.125:8080/NIC/work_files/' + this.data.file_download[0].name,
      success:(res)=>{
        console.log(res)
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    mag: {},
    tag: [],
    attitude: true,
    code: 1,
    code1: 2,
    userStars: [
      "/image/kx.png",
      "/image/kx.png",
      "/image/kx.png",
      "/image/kx.png",
      "/image/kx.png",
    ],
    wjxScore: 0,
    // textarea
    min: 5, //最少字数
    max: 300, //最多字数 (根据自己需求改变) 
    file_download: [],
    file_upload: []
  },
  // 星星点击事件
  starTap: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempUserStars = this.data.userStars; // 暂存星星数组
    var len = tempUserStars.length; // 获取星星数组的长度
    for (var i = 0; i < len; i++) {
      if (i <= index) { // 小于等于index的是满心
        tempUserStars[i] = "/image/sx.png";
        that.setData({
          wjxScore: i + 1,
        })
      } else { // 其他是空心
        tempUserStars[i] = "/image/kx.png"
      }
    }
    // 重新赋值就可以显示了
    that.setData({
      userStars: tempUserStars
    })
  },
  // 标签
  labelx: function (e) {
    console.log(e)
    var i = e.currentTarget.dataset.index;
    var that = this.data.tag[i];
    that.setData({
      show: !e.currentTarget.dataset.show
    })
  },
  label: function (e) {
    console.log(e)
    var that = this;
    that.setData({
      attitude: !e.currentTarget.dataset.index
    })
  },
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最多字数限制
    if (len > this.data.max)
      return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len //当前字数  
    });
  },
  handleBtn() {
    wx: if (this.data.code == 1) {
      wx.showToast({
        title: '评价成功',
        icon: 'succes',
        mask: true,
        success: function () {
          setTimeout(function () {
            wx.reLaunch({
              url: '../index/index'
              //跳转到任务阶段页面
            })
          }, 1500)
        }
      });
    } else if (this.data.code1 == 2) {
      console.log("111")
      wx.showToast({
        title: '评价失败',
        image: '/image/fail.png',
        duration: 1500,
        mask: true
      })
    }
  },
  // 文件上传
  uploadFile: function (e) {
    console.log(e)
    wx.chooseMessageFile({
      count: 10, //选择文件的数量
      type: 'all', //选择文件的类型
      success: (res) => {
        console.log(res.tempFiles)
        this.setData({
          file_upload: this.data.file_upload.concat(res.tempFiles)
        })
      }
    })
  },
  removefile(e) {
    let index = e.currentTarget.dataset.index
    console.log(e, index)
    this.data.file_upload.splice(index, 1)
    this.setData({
      file_upload: this.data.file_upload
    })
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
