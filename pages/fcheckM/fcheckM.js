// pages/fcheckM/fcheckM.js
const app = getApp();
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // //console.log(app.globalData.authority3)
    if (app.globalData.authority3 === 1) {
      this.setData({
        isManagement: true
      })
    } else {
      this.setData({
        isManagement: false
      })
    }
    const resultInfo = JSON.parse(options.resultInfo)
    //console.log(resultInfo)
    let people = []
    for (let i = 0; i < resultInfo.mag.article.length; i++) {
      let temp = {
        name: resultInfo.mag.article[i].username,
        job: '文',
        tel: resultInfo.mag.article[i].tel,
        userid: resultInfo.mag.article[i].userid,
        QQ: resultInfo.mag.article[i].QQ,
        head: resultInfo.mag.article[i].head,
      }
      people.push(temp)
    }
    for (let i = 0; i < resultInfo.mag.photo.length; i++) {
      let temp = {
        name: resultInfo.mag.photo[i].username,
        job: '摄',
        tel: resultInfo.mag.photo[i].tel,
        userid: resultInfo.mag.photo[i].userid,
        QQ: resultInfo.mag.photo[i].QQ,
        head: resultInfo.mag.photo[i].head,
      }
      people.push(temp)
    }
    if (resultInfo.mag.editor != undefined && this.data.isManagement) {
      ////console.log(resultInfo.mag.editor)
      let temp = {
        name: resultInfo.mag.editor.username,
        job: '审',
        tel: resultInfo.mag.editor.tel,
        userid: resultInfo.mag.editor.userid,
        QQ: resultInfo.mag.editor.QQ,
        head: resultInfo.mag.editor.head,
      }
      people.push(temp)
    }
    this.setData({
      people: people,
      missionID: resultInfo.missionID,
      mag: resultInfo.mag,
      tag: resultInfo.tag,
      attitude: resultInfo.attitude,
      code: resultInfo.code,
      code1: resultInfo.code1,
      file_download: resultInfo.files
    })
  },
  showPopup() {
    this.setData({
      show: true
    });
  },

  onClose() {
    this.setData({
      show: false
    });
  },
  handleChange() {
    this.setData({
      checked: !this.data.checked
    });
  },
  downloadFile(e) {
    let arr = e.currentTarget.dataset.id
    //console.log(arr)
    wx.showLoading({
      title: '下载中...',
      mask: true
    })
    wx.setClipboardData({
      data: 'https://www.hustnic.tech/NIC/work_files/' + this.data.file_download[arr].name,
      success: (res) => {
        wx.showToast({
          title: '文件下载链接已复制到剪贴板',
          icon: 'none'
        })
      },
      complete: (res) => {
        wx.hideLoading({
          success: (res) => { },
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    often: [{
      detail: '写的不错哦，继续加油'
    }, {
      detail: '写的不错哦，继续加油'
    }, {
      detail: '写的不错哦，继续加油,写的不错哦，继续加油写的不错哦，继续加油写的不错哦，继续加油写的不错哦，继续加油'
    }, {
      detail: '写的不错哦，继续加油'
    }, {
      detail: '写的不错哦，继续加油'
    }, {
      detail: '写的不错哦，继续加油,写的不错哦，继续加油写的不错哦，继续加油写的不错哦，继续加油写的不错哦，继续加油'
    }],
    show: false,
    checked: true,
    showMask: false,
    mode: '',
    monthVisible: false,
    month: '',
    monthText: '',
    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
    isManagement: true,
    mag: {},
    people: [],
    review: '',
    remarks: '',
    isManagement: false,
    tag: [],
    attitude: true,
    code: 1,
    code1: 2,
    userStars: [
      'https://www.hustnic.tech/NIC/work_files/image/kx.png',
      'https://www.hustnic.tech/NIC/work_files/image/kx.png',
      'https://www.hustnic.tech/NIC/work_files/image/kx.png',
      'https://www.hustnic.tech/NIC/work_files/image/kx.png',
      'https://www.hustnic.tech/NIC/work_files/image/kx.png',
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
  showMask(e) {
    this.setData({
      showMask: !this.data.showMask
    })
  },
  cancelMask() {
    this.setData({
      showMask: false
    })
  },
  missionRollback() {
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/manage',
      data: {
        'method': 'return',
        'data': {
          'missionID': String(this.data.missionID),
          'userid': app.globalData.userid,
          'comment': this.data.return
        }
      },
      success: (res) => {
        //console.log(res.data)
        if (res.data.code === 202) {
          wx.showToast({
            title: res.data.msg
          })
          app.sleep(1000)
          wx.navigateBack({
            delta: 2,
          })
        }
      }

    })
    this.cancelMask()
  },
  onClickPicker(e) {
    this.setData({
      date1Visible: true,
    });
  },
  onColumnChange(e) {
    //console.log('picker pick:', e);
  },
  joinArray(array) {
    return array.join('');
  },
  onPickerChange(e) {
    this.setData({
      date1Visible: false,
      date1Value: e.detail.value,
      date1CurrentValue: this.joinArray(e.detail.label),
    })
    //console.log('picker change:', this.data.date1CurrentValue)
    if (e.detail.value.length === 4) {
      this.setData({
        list1: e.detail.value
      })
    }
    if (e.detail.label[0] === e.detail.value[0] + '时') {
      this.setData({
        list2: e.detail.value
      })
    }
    if (e.detail.label[0] === e.detail.value[0] + '文') {
      this.setData({
        list3: e.detail.value
      })
    }
  },
  onPickerCancel(e) {
    //console.log(e, '取消');
    //console.log('picker1 cancel:');
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
        tempUserStars[i] = 'https://www.hustnic.tech/NIC/work_files/image/sx.png'
        that.setData({
          wjxScore: i + 1,
        })
      } else { // 其他是空心
        tempUserStars[i] = 'https://www.hustnic.tech/NIC/work_files/image/kx.png'
      }
    }
    // 重新赋值就可以显示了
    that.setData({
      userStars: tempUserStars
    })
    //console.log(this.data.wjxScore)
  },
  // 标签
  labelx(e) {
    //console.log(e)
    var i = e.currentTarget.dataset.index;
    var that = this.data.tag[i];
    that.setData({
      show: !e.currentTarget.dataset.show
    })
  },
  label(e) {
    //console.log(e)
    var that = this;
    that.setData({
      attitude: !e.currentTarget.dataset.index
    })
  },
  inputReview(e) {
    var value = e.detail.value;
    var len = parseInt(value.length);
    this.setData({
      review: value
    })
    ////console.log(this.data.review)
    if (len > this.data.max)
      return;
    this.setData({
      currentWordNumber: len
    });
  },
  inputRemarks(e) {
    // 获取输入框的内容
    var value = e.detail.value
    // 获取输入框内容的长度
    var len = parseInt(value.length)
    //输入框内容赋值
    this.setData({
      remarks: value
    })
    ////console.log(this.data.remarks)
    //最多字数限制
    if (len > this.data.max)
      return
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len //当前字数  
    })
  },
  inputsReturn(e) {
    var value = e.detail.value
    var len = parseInt(value.length)
    this.setData({
      return: value
    })
    if (len > this.data.max)
      return
    this.setData({
      currentWordNumber: len
    })
  },
  handleBtn() {
    if (this.data.remarks === '') {
      wx.showToast({
        title: '请输入评价！',
        icon: 'error'
      })
    }
    if (this.data.files === []) {
      wx.showToast({
        title: '请选择稿件!',
        icon: 'error'
      })
    }
    //else if (this.data.remarks == '') {
    // wx.showToast({
    //    title: '请输入备注！',
    //     icon: 'error'
    //   })
    // }
    else {
      let count = 0
      for (let i = 0; i < this.data.file_upload.length; i++) {
        let kind = 'editor'
        if (this.data.isManagement) {
          kind = 'teacher'
        }
        //console.log(kind)
        wx.uploadFile({
          filePath: this.data.file_upload[i].path,
          name: 'file',
          url: 'https://www.hustnic.tech:8081/NIC/upload?missionID=' + this.data.missionID.toString() + '&userid=' + app.globalData.userid.toString() + '&kind=' + kind,
          header: {
            "Content-Type": "multipart/form-data"
          },
          success: (res) => {
            //console.log(res)
            let json = JSON.parse(res.data)
            //console.log(json)
            if (json.code === 502) {
              count += 1
              if (count === this.data.file_upload.length) {
                if (kind === 'editor') {
                  //console.log(kind)
                  wx.request({
                    url: 'https://www.hustnic.tech:8081/NIC/manage',
                    data: {
                      "method": "examine",
                      "data": {
                        "userid": String(app.globalData.userid),
                        "missionID": String(this.data.missionID),
                        "review": this.data.remarks,
                        "tag": [],
                        "stars": String(this.data.wjxScore),
                        'kind': kind
                      }
                    },
                    success: (res) => {
                      //console.log(res)
                      if (count === this.data.file_upload.length && res.data.code === 402) {
                        wx.showToast({
                          title: '提交成功',
                        })
                      } else {
                        wx.showToast({
                          title: '提交失败',
                          icon: 'error'
                        })
                      }
                      app.sleep(2000)
                      wx.redirectTo({
                        url: '/pages/home/home',
                      })
                    }
                  })
                }
                if (kind === 'teacher') {
                  //console.log(kind)
                  wx.request({
                    url: 'https://www.hustnic.tech:8081/NIC/manage',
                    data: {
                      "method": "examine",
                      "data": {
                        "userid": String(app.globalData.userid),
                        "missionID": String(this.data.missionID),
                        "review": this.data.remarks,
                        "tag": [],
                        "stars": String(this.data.wjxScore),
                        'kind': kind,
                        'ddl': this.data.date1CurrentValue,
                        'postscript': this.data.review
                      }
                    },
                    success: (res) => {
                      //console.log(res)
                      if (count === this.data.file_upload.length && res.data.code === 402) {
                        wx.showToast({
                          title: '提交成功',
                        })
                      } else {
                        wx.showToast({
                          title: '提交失败',
                          icon: 'error'
                        })
                      }
                      app.sleep(2000)
                      wx.redirectTo({
                        url: '/pages/home/home',
                      })
                    }
                  })
                }
              }
            }
            //
            else {
              wx.showToast({
                title: 'error',
                icon: 'error'
              })
            }
          }
        })
      }
    }
  },
  // 文件上传
  uploadFile(e) {
    wx.chooseMessageFile({
      count: 10, //选择文件的数量
      type: 'all', //选择文件的类型
      success: (res) => {
        //console.log(res.tempFiles)
        this.setData({
          file_upload: this.data.file_upload.concat(res.tempFiles)
        })
      }
    })
  },
  removefile(e) {
    let index = e.currentTarget.dataset.index
    //console.log(e, index)
    this.data.file_upload.splice(index, 1)
    this.setData({
      file_upload: this.data.file_upload
    })
  },
  // 预览附件
  previewFile(e) {
    //console.log(e)
    let string = ''
    string = e.currentTarget.dataset.path.substring(e.currentTarget.dataset.path.indexOf(".") + 1)
    if (string === 'png' || string === 'jpg' || string === 'gif' || string === 'jpeg') {
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
        url: 'https://www.hustnic.tech/NIC/work_files/' + this.data.file_download[e.currentTarget.dataset.id].name,
        success: (res) => {
          //console.log(res)
          tempFilePath = res.tempFilePath
          // 文件预览
          wx.openDocument({
            filePath: tempFilePath, // 文件地址
            showMenu: true,
            success: function (res) {
              ////console.log('成功')
            },
            fail: function (error) {
              //console.log(error)
              wx.showToast({
                title: '无法预览！',
                icon: 'error'
              })
            },
            complete: (res) => {
              wx.hideLoading({
                success: (res) => { },
              })
            }
          })
        }
      })

    }
  },
  goToinformation(e) {
    //console.log(this.data.people)
    let i = e.currentTarget.dataset.index

    let data = {
      info: [{
        btext: this.data.people[i].userid
      }, {
        btext: this.data.people[i].name,
      }, {
        btext: this.data.people[i].job
      }, {
        btext: this.data.people[i].tel,
      }, {
        btext: "",
        stext: "当月绩效"
      }, {
        btext: "30",
        stext: "完成任务"
      }, {
        btext: "",
        stext: "总绩效",
        class: "-max",
        f: ""
      }],
      head: this.data.people[i].head,
      showName: false,
      index: 0,
    }

    wx.navigateTo({
      url: '/pages/myinformation/myinformation?resultInfo=' + JSON.stringify(data),
    })

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