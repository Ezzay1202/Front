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

  downloadFile(e) {
    let arr = e.currentTarget.dataset.id
    console.log(arr)
    wx.showLoading({
      title: '下载中...',
      mask: true
    })
    wx.setClipboardData({
      data: 'http://1.15.118.125:8080/NIC/work_files/' + this.data.file_download[arr].name,
      success: (res) => {
        wx.showToast({
          title: '文件下载链接已复制到剪贴板',
          icon: 'none'
        })
      },
      complete: (res) => {
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    mode: '',
    monthVisible: false,
    month: '2021-09',
    monthText: '',
    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
    review: '',
    remarks: '',
    isManagement: true,
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
    file_upload: [],
    date1Visible: false,
    months: Array.from(new Array(12), (_, index) => ({
      label: `${index + 1}月`,
      value: index + 1,
    })),
    days: Array.from(new Array(31), (_, index) => ({
      label: `${index + 1}日`,
      value: index + 1
    })),

    hour: Array.from(new Array(24), (_, index) => ({
      label: `${index}时`,
      value: index,
    })),

    minute: Array.from(new Array(60), (_, index) => ({
      label: `${index}分`,
      value: index,
    })),
  },
  onClickPicker(e) {

    this.setData({
      date1Visible: true,
    });
  },
  onColumnChange(e) {
    console.log('picker pick:', e);
  },
  onPickerChange(e) {

    console.log('picker change:', );
    this.setData({
      date1Visible: false,
      date1Value: e.detail.value,
      date1CurrentValue: this.joinArray(e.detail.label),
    });
    if (e.detail.value.length == 4) {
      this.setData({
        list1: e.detail.value
      })
    }
    if (e.detail.label[0] == e.detail.value[0] + '时') {
      this.setData({
        list2: e.detail.value
      })
    }
    if (e.detail.label[0] == e.detail.value[0] + '文') {
      this.setData({
        list3: e.detail.value
      })
    }
  },
  onPickerCancel(e) {
    console.log(e, '取消');
    console.log('picker1 cancel:');
    this.setData({
      date1Visible: false,
    });
  },
  // 星星点击事件
  starTap(e) {
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
    console.log(this.data.wjxScore)
  },
  // 标签
  labelx(e) {
    console.log(e)
    var i = e.currentTarget.dataset.index;
    var that = this.data.tag[i];
    that.setData({
      show: !e.currentTarget.dataset.show
    })
  },
  label(e) {
    console.log(e)
    var that = this;
    that.setData({
      attitude: !e.currentTarget.dataset.index
    })
  },
  inputReview(e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //输入框内容赋值
    this.setData({
      review: value
    })
    console.log(this.data.review)
    //最多字数限制
    if (len > this.data.max)
      return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len //当前字数  
    });
  },
  inputRemarks(e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //输入框内容赋值
    this.setData({
      remarks: value
    })
    console.log(this.data.remarks)
    //最多字数限制
    if (len > this.data.max)
      return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len //当前字数  
    });
  },
  handleBtn() {
    if (this.data.review == '') {
      wx.showToast({
        title: '请输入评价！',
        icon: 'error'
      })
    } //else if (this.data.remarks == '') {
    // wx.showToast({
    //    title: '请输入备注！',
    //     icon: 'error'
    //   })
    // }
    wx.request({
      url: '',
      data: {
        "method": "",
        "data": {}
      },
      success: (res) => {
        console.log(res)
        wx.showToast({
          title: '发布成功',
        });
        let now = new Date();
        let entertime = now.getTime();
        let endtime = now.getTime();
        while (endtime - entertime < 2000) {
          endtime = new Date().getTime()
        }
        wx.redirectTo({
          url: '/pages/home/home',
        })
      }
    })
  },
  // 文件上传
  uploadFile(e) {
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
    console.log(e)
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
      let tempFilePath = ''
      wx.showLoading({
        title: '请稍等...',
      })
      wx.downloadFile({
        url: 'http://1.15.118.125:8080/NIC/work_files/' + this.data.file_download[e.currentTarget.dataset.id].name,
        success: (res) => {
          console.log(res)
          tempFilePath = res.tempFilePath
          // 文件预览
          wx.openDocument({
            filePath: tempFilePath, // 文件地址
            showMenu: true,
            success: function (res) {
              //console.log('成功')
            },
            fail: function (error) {
              console.log(error)
              wx.showToast({
                title: '无法预览！',
                icon: 'error'
              })
            },
            complete: (res) => {
              wx.hideLoading({
                success: (res) => {},
              })
            }
          })
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