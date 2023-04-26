// pages/mywork/mywork.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deltext: '',
    delstep: '',
    steps_num: 2,
    mainActiveIndex: 0,
    activeId: [],
    max: 2,
    index: 0,
    items: [{
      // 导航名称
      text: '班级',
      // 导航名称右上角徽标
      badge: 3,
      // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
      dot: false,
      // 禁用选项
      disabled: false,
      // 该导航下所有的可选项
      children: [{
          // 名称
          text: '管实2101班',
          // id，作为匹配选中状态的标识
          id: 1,
          // 禁用选项
          disabled: false,
        },
        {
          text: '物流2001班',
          id: 2,
        },
      ],
    }, ],
    itemTitle: '筛选',
    class: [{
      value1: 0,
      option1: [{
          text: '按时间排序',
          value: 0,
          icon: ''
        },
        {
          text: '按分数排序',
          value: 1,
          icon: ''
        },
        {
          text: '按状态排序',
          value: 2,
          icon: ''
        },
      ],
    }, ],
    step: [{
      text: '接稿',
    }, {
      text: '写稿',
    }, {
      text: '编辑部审稿',
    }, {
      text: '辅导员审稿',
    }, {
      text: '排版',
    }, ],
  },
  cancelMask() {
    this.setData({
      showDelete: false,
      deltext: ''
    })
  },
  deleteM(e) {
    let index = e.currentTarget.dataset.index
    //let step = this.data.listm_ing[index].steps_num - 1
    console.log(index)
    this.setData({
      showDelete: true,
      deltext: this.data.listm_ing[index].text,
      delmissionID:this.data.listm_ing[index].missionID
      //delstep: this.data.step[step].text
    })
  },
  missionDelete(){
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/manage',
      data:{
        'method':'delete',
        'data':{
          'missionID':this.data.delmissionID
        }
      },
      success:(res)=>{
        console.log(res.data)
        if(res.data.code === 202){
          wx.showToast({
            title: res.data.msg
          })
        }else{
          wx.showToast({
            title: '删除失败！',
            icon:'error'
          })
        }
      }
    })
    this.setData({
      showDelete:false
    })
    this.onLoad()
  },
  missionChange(e){
    let index = e.currentTarget.dataset.index
    console.log(index)
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/manage',
      data:{
        'method':'alter'
      }
    })
  },
  gotoHistory() {
    wx.navigateTo({
      url: '/pages/historyM/historyM',
    })
  },
  cancelMask() {
    this.setData({
      showDelete: false,
      deltext: ''
    })
  },
  deleteM(e) {
    let index = e.currentTarget.dataset.index
    let step = this.data.listm_ing[index].steps_num - 1
    this.setData({
      showDelete: true,
      deltext: this.data.listm_ing[index].text,
      delstep: this.data.step[step].text
    })
  },
  gotoHistory() {
    wx.navigateTo({
      url: '/pages/historyM/historyM',
    })
  },
  goto(e) {
    console.log(e)
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `../seeM/seeM?url=${url}`,
    })
  },
  onClickNav({
    detail = {}
  }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({
    detail = {}
  }) {
    const {
      activeId
    } = this.data;

    const index = activeId.indexOf(detail.id);
    if (index > -1) {
      activeId.splice(index, 1);
    } else {
      activeId.push(detail.id);
    }

    this.setData({
      activeId
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/show',
      data: {
        'method': 'showAll',
        'data': {
          'kind': 'current'
        }
      },
      success: (res) => {
        console.log(res.data.data)
        let datalist = res.data.data
        let listm_ing = []
        for (let i = 0; i < datalist.length; i++) {
          let steps_num = 0
          if(datalist[i].status['接稿'] != '未达成'){
            steps_num += 1
            if(datalist[i].status['写稿'] != '未达成'){
              steps_num += 1
              if(datalist[i].status['编辑部审稿'] != '未达成'){
                steps_num += 1
                if(datalist[i].status['辅导员审核'] != '未达成'){
                  steps_num += 1
                  if(datalist[i].status['接排版'] != '未达成'){
                    steps_num += 1
                  }
                }
              }
            }

          }
          let tempMission = {
            missionID:datalist[i].missionID,
            text:datalist[i].description,
            steps_num:steps_num,

          }
          listm_ing.push(tempMission)
        }
        this.setData({
          listm_ing:listm_ing
        })
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

  }
})