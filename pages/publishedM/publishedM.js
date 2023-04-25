// pages/publishedM/publishedM.js
const app = getApp()
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let list_show = []
    this.setData({
      listm: [],
      listp: []
    })
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/show?method=showNeed',
      success: (res) => {
        let list_all = res.data.data;
        console.log(res)
        let j = -1;
        let len = list_all.length;
        for (let i = 0; i < len; i++) {
          let isUrge1 = true;
          let isUrge2 = true;
          let isUrge3 = true;
          let isUrge4 = true;
          j++;
          let lackAtc = list_all[j].reporterLack.article;
          let lackPht = list_all[j].reporterLack.photo;
          if (lackAtc === 0 && lackPht === 0) {
            list_show.splice(i, 1);
            i -= 1;
            len -= 1;
            continue;
          }
          if (lackAtc > 0) {
            isUrge3 = false;
          }
          if (lackPht > 0) {
            isUrge4 = false;
          }
          let article = list_all[j].reporterNeeds.article + "文";
          let photo = list_all[j].reporterNeeds.photo + "摄";
          let minbegin = list_all[j].time.beginMinute;
          let minend = list_all[j].time.endMinute;
          if (minbegin < 10) {
            minbegin = "0" + minbegin.toString();
          }
          if (minend < 10) {
            minend = "0" + minend.toString();
          }
          if (list_all[j].reporterNeeds.article === undefined) {
            article = '';
          }
          if (list_all[j].reporterNeeds.photo === undefined) {
            photo = '';
          }
          list_show[i] = {
            missionID: list_all[j].missionID,
            text: list_all[j].description,
            date1: list_all[j].time.month + "月" + list_all[j].time.day + "日" + list_all[j].time.beginHour + ":" + minbegin,
            date2: list_all[j].time.endHour + ":" + minend,
            location: list_all[j].place,
            people: article + photo,
            isUrge1: isUrge1,
            isUrge2: isUrge2,
            isUrge3: isUrge3,
            isUrge4: isUrge4,
          }
        }
        console.log(list_show)
        this.setData({
          listm: list_show
        })
      }
    })

    //paiban
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/show?method=showNeedLayout',
      success: (res) => {
        console.log(res.data.data)
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
          for (let k of list_all[i].files) {
            let temp = {
              name: k,
              size: 'none'
            }
            filelist.push(temp)
          }
          let peoplelist = []
          for (let m in list_all[i].postscript) {
            let temp = {
              name: m,
              //tel: '123456789',
              detail: list_all[i].postscript[m]
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
            showdetail: true
          }
          list_show.push(tempmission)
        }
        this.setData({
          listp: list_show
        })

      }
    })
  },
  downloadFile(e) {
    let arr = e.currentTarget.dataset.index
    console.log(arr)
    wx.showLoading({
      title: '下载中...',
      mask: true
    })
    wx.setClipboardData({
      data: 'http://www.hustnic.tech:8080/NIC/work_files/' + this.data.listp[this.data.index1].file[arr].name,
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
  previewFile(e) {
    let arr = e.currentTarget.dataset.index
    console.log(e)
    let tempFilePath = ''
    wx.showLoading({
      title: '请稍等...',
    })
    wx.downloadFile({
      url: 'https://www.hustnic.tech/NIC/work_files/' + this.data.listp[this.data.index1].file[arr].name,
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
              success: (res) => { },
            })
          }
        })
      }
    })

  },
  takePhoto(e) {
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/take',
      data: {
        "method": "take",
        "data": {
          "userid": app.globalData.userid.toString(),
          "missionID": e.currentTarget.dataset.id.toString(),
          "kind": "photo"
        }
      },
      success: (res) => {
        console.log(res.data)
        if (res.data.code === 401) {
          wx.showToast({
            title: res.data.msg,
            icon: 'error'
          })
        }
        if (res.data.code === 402) {
          wx.showToast({
            title: '接摄成功',
          })
          wx.request({
            url: '',//
            data: {
              'missionID': e.currentTarget.dataset.id,
              'userid': app.globalData.userid
            }
          })
          this.onLoad()
        }
        if (res.data.code === 99) {
          wx.showToast({
            title: '无此任务，请刷新界面',
            icon: 'error'
          })
        }
        if (res.data.code === 98) {
          wx.showToast({
            title: '错误！请联系开发者',
            icon: 'error'
          })
        }
      }
    })
  },

  takeArticle(e) {
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/take',
      data: {
        "method": "take",
        "data": {
          "userid": app.globalData.userid,
          "missionID": e.currentTarget.dataset.id,
          "kind": "article"
        }
      },
      success: (res) => {
        console.log(res.data)
        if (res.data.code === 401) {
          wx.showToast({
            title: res.data.msg,
            icon: 'error'
          })
        }
        if (res.data.code === 402) {
          wx.showToast({
            title: '接文成功'
          })
          wx.request({
            url: '',//
            data: {
              'missionID': e.currentTarget.dataset.id,
              'userid': app.globalData.userid
            }
          })
          this.onLoad()
        }
        if (res.data.code === 99) {
          wx.showToast({
            title: '无此任务，请刷新界面',
            icon: 'error'
          })
        }
        if (res.data.code === 98) {
          wx.showToast({
            title: '请联系开发者',
            icon: 'error'
          })
        }
      }
    })
  },

  takeTypesetting(e) {
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/take',
      data: {
        "method": "layout",
        "data": {
          "userid": String(app.globalData.userid),
          "missionID": String(e.currentTarget.dataset.id)
        }
      },
      success: (res) => {
        console.log(res.data)
        if (res.data.code === 401) {
          wx.showToast({
            title: res.data.msg,
            icon: 'error'
          })
        }
        if (res.data.code === 402) {
          wx.showToast({
            title: '接排版成功',
          })
          wx.request({
            url: '',//
            data: {
              'missionID': e.currentTarget.dataset.id,
              'userid': app.globalData.userid
            }
          })
          this.onLoad()
        }
        if (res.data.code === 99) {
          wx.showToast({
            title: '无此任务，请刷新界面',
            icon: 'error'
          })
        }
        if (res.data.code === 98) {
          wx.showToast({
            title: '错误！请联系开发者',
            icon: 'error'
          })
        }
      }
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

  },

  /**
   * 页面的初始数据
   */
  data: {
    hasMore: true,
    showLoading: true,
    start: 0,
    index1: ''
  },
  showDetail(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    let showdetail = 'listp[' + index + '].showdetail'
    this.setData({
      [showdetail]: !this.data.listp[index].showdetail,
      index1: index
    })
  }
})