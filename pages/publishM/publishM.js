// pages/home/home.js
//可以增加一些tag供发布者选择，以便更好的分类（可能需要后端执行自动分词python文件）
const app = getApp();
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()
let place1 = ''
let description1 = ''
let description2 = ''
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) { },

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
    list1: [],
    list2: [],
    list3: [],
    place1: ''
  },
})
const PICKER_KEY = {
  DATE: 'date',
  DATE1: 'date1',
  DATE2: 'date2',
  People: 'people',
};

Component({
  offsetTopList: [],
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    test1: 0,
    index1: 0,
    index2: 0,
    index12: 0,
    index22: 0,
    sideBarIndex: 0,
    sideBarIndex2: 0,

    scrollTop: 0,
    categories: [],
    tagbox: [],
    tagbox2: [],
    showcheck: false,
    showcheck2: false,
    fileArray: [],
    step: [{
      text: '已写稿',
      content: '需要编辑部审稿',
      hidden: false
    }, {
      text: '编辑部已审稿',
      content: "需要辅导员审稿",
      hidden: true
    }, {
      text: '辅导员已审稿',
      content: "需要排版",
      hidden: true
    }],
    currentStep: 0,
    stickyProps: {
      zIndex: 2,
    },
    PICKER_KEY,
    [`${PICKER_KEY.DATE}Visible`]: false,
    [`${PICKER_KEY.DATE1}Visible`]: false,
    [`${PICKER_KEY.DATE2}Visible`]: false,
    [`${PICKER_KEY.People}Visible`]: false,
    pickerTitle: '',

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

    wen: Array.from(new Array(3), (_, index) => ({
      label: `${index}文`,
      value: index,
    })),

    she: Array.from(new Array(3), (_, index) => ({
      label: `${index}摄`,
      value: index,
    })),
    [`${PICKER_KEY.DATE}Value`]: [month, day, hour],
    [`${PICKER_KEY.DATE1}Value`]: [month, day, hour, minute],
    [`${PICKER_KEY.DATE2}Value`]: [hour, minute],
    [`${PICKER_KEY.People}Value`]: [],

    value: 'label_2',
    list: [{
      value: 'label_1',
      label: '首页',
      icon: 'home'
    },
    {
      value: 'label_2',
      label: '发布',
      icon: 'check-rectangle'
    },
    {
      value: 'label_4',
      label: '我的',
      icon: 'user'
    },
    ],
  },
  methods: {
    onLoad(options) {
      let list1 = []
      let list2 = []
      let temp3 = []
      wx.request({
        url: 'https://www.hustnic.tech:8081/NIC/manage?method=getTag',
        success: (res) => {
          console.log(res.data.data)
          list1 = res.data.data['list1'][0]
          list2 = res.data.data['list2']
          let len = list1.length === list2.length ? list1.length : 0
          let tag = new Map()
          for (let i = 0; i < len; i++) {
            tag.set(list1[i], [])
            let temp = {
              label: list1[i],
              title: list1[i],
              items: []
            }
            for (let j = 0; j < list2[i].length; j++) {
              let temp2 = {
                label: list2[i][j],
                checked: false
              }
              temp['items'] = temp['items'].concat(temp2)
            }
            temp3 = temp3.concat(temp)
            this.setData({
              categories: temp3,
              tag: tag
            })
            //console.log(temp3)
          }
        }
      })
    },
    checkedTag(e) {
      console.log('2')
      console.log(e)
      this.setData({
        index2: e.currentTarget.dataset.index2
      })
    },
    handlePopup(e) {
      const {
        item
      } = e.currentTarget.dataset;

      this.setData({
        cur: item,
      },
        () => {
          this.setData({
            showcheck: true
          });
        },
      );
    },
    onVisibleChange(e) {
      this.setData({
        showcheck: e.detail.visible,
      });
    },
    onVisibleChange2(e) {
      this.setData({
        showcheck2: e.detail.visible,
      });
    },
    cancelCheck(e) {
      this.setData({
        showcheck: !this.data.showcheck
      })
    },
    showCheck(e) {
      this.setData({
        showcheck: !this.data.showcheck
      })
    },
    cancelCheck2(e) {
      this.setData({
        showcheck2: !this.data.showcheck2
      })
    },
    showCheck2(e) {
      this.setData({
        showcheck2: !this.data.showcheck2
      })
    },
    onSideBarChange(e) {
      console.log(e.detail)
      const {
        value
      } = e.detail;

      this.setData({
        sideBarIndex: value
      });
    },
    onSideBarChange2(e) {
      console.log(e.detail)
      const {
        value
      } = e.detail;

      this.setData({
        sideBarIndex2: value
      });
    },
    checkedTag(e) {
      console.log(e)
      this.setData({
        index2: e.currentTarget.dataset.index2
      })
    },
    checkedTags(e) {
      console.log('1')
      this.setData({
        index1: e.currentTarget.dataset.index1
      })
      let index1 = this.data.index1
      let index2 = this.data.index2
      let checked = 'categories[' + index1 + '].items[' + index2 + '].checked'
      let temp = this.data.tag
      console.log(temp)
      let temptagbox = this.data.tagbox
      let tempTag = this.data.categories[index1]['items'][index2]['label']
      let templist = temp.get(this.data.categories[index1]['label'])
      let tempdict = {
        color: index1,
        tag: this.data.categories[index1]['label'] + '-' + tempTag
      }
      if (templist.includes(tempTag)) {
        templist.splice(templist.indexOf(tempTag), 1)
        temp.set(this.data.categories[index1]['label'], templist)
        temptagbox.splice(temptagbox.indexOf(tempdict), 1)
      } else {
        templist.push(tempTag)
        temp.set(this.data.categories[index1]['label'], templist)
        temptagbox.push(tempdict)
      }
      this.setData({
        [checked]: !this.data.categories[index1].items[index2].checked,
        tag: temp,
        tagbox: temptagbox
      })
      console.log(this.data.categories[index1].items[index2].checked)
      //console.log(this.data.tag)
    },

    checkedTag2(e) {
      console.log(e)
      this.setData({
        index22: e.currentTarget.dataset.index22
      })
    },
    checkedTags2(e) {
      console.log('1')
      this.setData({
        index12: e.currentTarget.dataset.index12
      })
      let index1 = this.data.index12
      let index2 = this.data.index22
      let checked = 'categories[' + index1 + '].items[' + index2 + '].checked'
      let temp = this.data.tag
      console.log(temp)
      let temptagbox = this.data.tagbox2
      let tempTag = this.data.categories[index1]['items'][index2]['label']
      let templist = temp.get(this.data.categories[index1]['label'])
      let tempdict = {
        color: index1,
        tag: this.data.categories[index1]['label'] + '-' + tempTag
      }
      if (templist.includes(tempTag)) {
        templist.splice(templist.indexOf(tempTag), 1)
        temp.set(this.data.categories[index1]['label'], templist)
        temptagbox.splice(temptagbox.indexOf(tempdict), 1)
      } else {
        templist.push(tempTag)
        temp.set(this.data.categories[index1]['label'], templist)
        temptagbox.push(tempdict)
      }
      this.setData({
        [checked]: !this.data.categories[index1].items[index2].checked,
        tag2: temp,
        tagbox2: temptagbox
      })
      console.log(this.data.categories[index1].items[index2].checked)
      //console.log(this.data.tag)
    },

    uploadFile(e) {
      console.log(e)
      wx.chooseMessageFile({
        count: 10, //选择文件的数量
        type: 'all', //选择文件的类型
        success: (res) => {
          console.log(res.tempFiles)
          this.setData({
            fileArray: this.data.fileArray.concat(res.tempFiles)
          })
        }
      })
    },
    removefile(e) {
      let index = e.currentTarget.dataset.index
      console.log(e, index)
      this.data.fileArray.splice(index, 1)
      this.setData({
        fileArray: this.data.fileArray
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
    currentStepChange(e) {
      //选择任务状态
      this.setData({
        currentStep: e.detail.current
      })
      console.log(this.data.currentStep)
    },
    setPlace(e) {
      place1 = e.detail.value
    },
    setDescription1(e) {
      description1 = e.detail.value
    },
    setDescription2(e) {
      description2 = e.detail.value
      //console.log(description2)
    },
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },

    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },

    onStickyScroll(event) {
      console.log(event.detail);

    },

    joinArray(array) {
      return array.join(' ');
    },

    onClickPicker(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      //console.log('picker pick:', place1);
      this.setData({
        [`${key}Visible`]: true,
      });
    },

    onColumnChange(e) {
      //console.log('picker pick:', e);
    },
    onPickerChange(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      //console.log('picker change:', );
      this.setData({
        [`${key}Visible`]: false,
        [`${key}Value`]: e.detail.value,
        [`${key}CurrentValue`]: this.joinArray(e.detail.label),
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
      const {
        key
      } = e?.currentTarget?.dataset;
      console.log(e, '取消');
      console.log('picker1 cancel:');
      this.setData({
        [`${key}Visible`]: false,
      });
    },
    onChange(e) {
      //tabbar
      //四个页面
      this.setData({
        value: e.detail.value,
      });
      if (e.detail.value == 'label_1') {
        wx.redirectTo({
          url: '/pages/home/home',
        })
      }
      if (e.detail.value == 'label_4') {
        wx.redirectTo({
          url: '/pages/managment/managment',
        })
      }
    },
    //
    publishMission() {
      if (this.data.list1 === null) {
        wx.showToast({
          icon: 'none',
          title: '请填写起始时间',
          mask: true
        })
      } else if (this.data.list2 === null) {
        wx.showToast({
          icon: 'none',
          title: '请填写结束时间',
          mask: true
        })
      } else if (this.data.list3 === null) {
        wx.showToast({
          icon: 'none',
          title: '请填写小记者',
          mask: true
        })
      } else if (place1 === '') {
        wx.showToast({
          icon: 'none',
          title: '请填写地点',
          mask: true
        })
      } else if (description1 === '') {
        wx.showToast({
          icon: 'none',
          title: '请填写活动内容',
          mask: true
        })
      } else if (this.data.list2[0] < this.data.list1[2] || (this.data.list2[0] == this.data.list1[2] && this.data.list1[3] > this.data.list2[1])) {
        wx.showToast({
          icon: 'none',
          title: '请填写正确的结束时间',
          mask: true
        })
      } else {
        let obj = Object.create(null);
        for (let [k, v] of this.data.tag) {
          obj[k] = v;
        }
        let tags = JSON.stringify(obj)
        console.log(tags)
        wx.request({
          url: 'https://www.hustnic.tech:8081/NIC/manage',
          data: {
            "method": "add",
            "data": {
              "tags": tags,
              "element": 0,
              "publisher": app.globalData.userid,
              "place": place1,
              "title": "",
              "description": description1,
              "time": {
                "year": year,
                "month": this.data.list1[0],
                "day": this.data.list1[1],
                "beginHour": this.data.list1[2],
                "beginMinute": this.data.list1[3],
                "endHour": this.data.list2[0],
                "endMinute": this.data.list2[1],
              },
              "reporterNeeds": {
                "photo": this.data.list3[1],
                "article": this.data.list3[0]
              }
            }
          },
          success: (res) => {
            console.log(res)
            if (res.data.code === 202) {
              wx.showToast({
                title: '发布成功',
                mask: true
              })
              app.sleep(2000)
              wx.redirectTo({
                url: '/pages/home/home',
              })
            } else {
              wx.showToast({
                title: '发布失败',
                icon: 'error',
                mask: true
              })
            }
          },
        })
      }
    },
    publishMission2(e) {
      //console.log(this.data)
      let fileArray = this.data.fileArray
      console.log(fileArray)
      let description = ''
      for (let i of fileArray) {
        if (i.name.includes('docx') || i.name.includes('doc')) {
          description = i.name.split('.doc')[0]
          console.log(description)
        }
      }

      if (this.data.currentStep === 2 && description2 === '') {
        wx.showToast({
          icon: 'none',
          title: '请填写稿件备注',
          mask: true
        })
      } else if (fileArray.length === 0) {
        wx.showToast({
          icon: 'none',
          title: '请上传文件',
          mask: true
        })
      } else {
        let obj = Object.create(null);
        for (let [k, v] of this.data.tag2) {
          obj[k] = v;
        }
        let tags = JSON.stringify(obj)
        console.log(tags)
        let postscript = {}
        if (this.data.currentStep === 2) {
          postscript = {
            [app.globalData.username]: description2//
          }
        }
        wx.request({
          url: 'https://www.hustnic.tech:8081/NIC/manage',
          data: {
            "method": "add",
            "data": {
              "tags": tags,
              "description": description,
              "element": this.data.currentStep + 1,
              "publisher": app.globalData.userid,
              "postscript": postscript,
              "deadline": this.data.dateValue[0] + '月' + this.data.dateValue[1] + '日' + this.data.dateValue[1] + '时' + '00分'
            }
          },
          success: (res) => {
            console.log(res.data)
            let missionID = res.data.missionID
            console.log(missionID)
            for (let i = 0; i < fileArray.length; i++) {
              console.log(fileArray[i])
              wx.uploadFile({
                filePath: fileArray[i].path,
                name: 'file',
                url: 'https://www.hustnic.tech:8081/NIC/upload?missionID=' + missionID + '&userid=' + app.globalData.userid.toString(),
                header: {
                  "Content-Type": "multipart/form-data"
                },
                success: (res) => {
                  console.log(res.data)
                  let json = JSON.parse(res.data)
                  console.log(json)
                }
              })
            }
            wx.showToast({
              title: '发布成功',
              mask: true
            })
            wx.request({
              url: '', //
              data: {
                'missionID': missionID
              },
              success: (res) => {
                console.log(res)
              }
            })
            app.sleep(1500)
            wx.redirectTo({
              url: '/pages/home/home',
            })
          },
        })

      }
    }
  },
});