// pages/people/people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
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
    },],
    activeId: [],
    max: 2,
    index1: '',
    index2: '',
    choose: false,
    itemTitle: '筛选',
    people: [{
      text: "人事部",
      show_dep: true,
      dep: [{
        value: 2,
        checked: true,
        img: '/image/啸天.png',
        name: "乔晟豪",
        tag_box: ['人事部部长', '管实2101班']
      },
      {
        value: 1,
        checked: false,
        img: '/image/啸天.png',
        name: "乔晟豪",
        tag_box: ['人事部部长', '管实2101班']
      }
      ]
    },
    {
      text: "技术部",
      show_dep: true,
      dep: [{
        img: '/image/啸天.png',
        name: "苏睿贤",
        tag_box: ['技术部部长', '管实2101班']
      },
      {
        img: '/image/啸天.png',
        name: "江昊洋",
        tag_box: ['技术部成员', '物流2001班']
      }
      ]
    },
    {
      text: "技术部",
      show_dep: true,
      dep: [{
        img: '/image/啸天.png',
        name: "苏睿贤",
        tag_box: ['技术部部长', '管实2101班']
      },
      {
        img: '/image/啸天.png',
        name: "江昊洋",
        tag_box: ['技术部成员', '物流2001班']
      }
      ]
    },
    {
      text: "技术部",
      show_dep: true,
      dep: [{
        img: '/image/啸天.png',
        name: "苏睿贤",
        tag_box: ['技术部部长', '管实2101班']
      },
      {
        img: '/image/啸天.png',
        name: "江昊洋",
        tag_box: ['技术部成员', '物流2001班']
      }
      ]
    }
    ],
    class: [{
      value1: 0,
      option1: [{
        text: '按职务排序',
        value: 0,
        icon: ''
      },
      {
        text: '按姓名排序',
        value: 1,
        icon: ''
      },
      ],
    },],
    ImgSrc: []
  },

  showDep(e) {
    console.log(e)
    let index1 = e.currentTarget.dataset.index1
    let show_dep = 'people[' + index1 + '].show_dep'
    this.setData({
      [show_dep]: !this.data.people[index1].show_dep
    })
    if (!this.data.people[index1].show_dep) {
      this.setData({
        flag: !this.data.flag
      })
    }
  },
  Choose(e) {
    this.setData({
      choose: !this.data.choose
    })
  },
  // indexOfMyArray(e) {
  //   let index1 = e.currentTarget.dataset.index1
  //   this.setData({
  //     index1: index1
  //   })
  // },
  onChoose(e) {
    this.setData({
      index2: e.currentTarget.dataset.index2
    })
  },
  onChooses(e) {
    console.log(e)
    let choose = this.data.choose
    if (choose && this.data.flag) {
      this.setData({
        index1: e.currentTarget.dataset.index1
      })
      let index1 = this.data.index1
      let index2 = this.data.index2
      let checked = 'people[' + index1 + '].dep[' + index2 + '].checked'
      console.log(index1, index2, checked)
      this.setData({
        [checked]: !this.data.people[index1].dep[index2].checked
      })
      if (this.data.people[index1].dep[index2].checked) {
        this.data.ImgSrc.push(this.data.people[index1].dep[index2].img)
        this.setData({
          ImgSrc: this.data.ImgSrc
        })
      }
      if (!this.data.people[index1].dep[index2].checked) {
        this.data.ImgSrc.splice(this.data.ImgSrc.indexOf(this.data.people[index1].dep[index2].img), 1)
        this.setData({
          ImgSrc: this.data.ImgSrc
        })
      }
      console.log(this.data.people[index1].dep[index2].img);
      console.log(this.data.ImgSrc);
    }
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
      url: 'http://1.15.118.125:8081/NIC/allUser',
      data: {
        "method": "grouped",
        "data": {
          "groupItem": "department"
        }
      },
      success: (res) => {
        let people = []
        let dep = []
        let datas = res.data.data
        console.log(datas)
        let i = 0
        let maps1 = {}
        let maps2 = {}
        for (let k in datas) {
          maps1.text = k
          maps1.show_dep = true
          for (let j = 0; j < datas[k].length; j++) {
            console.log(datas[k][j]);
            console.log(j);
            maps2.checked = false
            maps2.img = 'http://1.15.118.125:8080/NIC/work_files/' + datas[k][j].head
            maps2.name = datas[k][j].username
            maps2.tag_box = [datas[k][j].identity, datas[k][j].classStr]
            dep[j] = maps2
            maps2 = {}
          }
          maps1.dep = dep
          dep = []
          people[i++] = maps1
          maps1 = {}
        }
        this.setData({
          people: people
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