// pages/home/home.js
const app = getApp()
const date = new Date()
const year = date.getFullYear()
const month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
const day = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()
let place1 = ''

Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(options.type="baidu"){
      this.setData({
        url:"https://mp.weixin.qq.com/s/HVmzDgdhLzOJUcBnIMy0fg"
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

  },


  /**
   * 页面的初始数据
   */
  data: {
    url: ""
  }
})

const PICKER_KEY = {
  DATE1: 'date1',
  DATE2: 'date2',
  People: 'people',
};

Component({
  data: {
    picture:[
      {
        img:"https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
        people:"乔晟豪"
      },{
        img:"https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
        people:"乔晟豪"
      },{
        img:"https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
        people:"乔晟豪"
      },{
        img:"https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
        people:"乔晟豪"
      },{
        img:"https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
        people:"乔晟豪"
      },
    ],
    boxshow:[
      {
        image:"http://mmbiz.qpic.cn/mmbiz_jpg/gbpAf4uUr2CPGoKg3rLAVNiaIjRHRgucKpf2D0xGKXEABncIfmRpeiaAvvRjlibycFw2r9EOiaHJYDOJ2yQp23PX3Q/0?wx_fmt=jpeg",
        text:"W.0.W | 我与兔年那些不得不说的事！"
      },
      {
        image:"https://mmbiz.qpic.cn/mmbiz_jpg/gbpAf4uUr2Ac8wK5HibkMhAmDeXRps44clAPtULQic6IObMB7rB5uscibPfTbM0GqLwXsFrZqR2GCyg0FSKicc0uPg/0?wx_fmt=jpeg",
        text:"M.O.M新春特辑 | 年味儿速递：快看！这些管院er用镜头记录下了年前幸福的瞬间~"
      },
      {
        image:"https://mmbiz.qpic.cn/mmbiz_png/gbpAf4uUr2B1uZSbxb6SdAEtqm0fNDDSL1arFMsgCcENBibMQbtpRREMp47auxa2uqHzdKXHlcTqRgqasGTpAKg/0?wx_fmt=png",
        text:"W.O.W | 惊！原来距离我成为学霸需要的时间是......"
      }

    ],
    isShow:false,
    functions_show: [{
      name: "待接任务",
      img: '/image/publishedM.png',
      goto: "/pages/publishedM/publishedM"
    }, {
      name: "查询稿件",
      img: '/image/apply.png',
      goto: "/pages/inquiryM/inquiryM"
    }, {
      name: "审核稿件",
      img: '/image/checkM.png',
      goto: "/pages/checkM/checkM"
    }],
    functions:[ {
      name: "待接任务",
      img: '/image/publishedM.png',
      goto: "/pages/publishedM/publishedM"
    }, {
      name: "查询稿件",
      img: '/image/apply.png',
      goto: "/pages/inquiryM/inquiryM"
    }, {
      name: "审核稿件",
      img: '/image/checkM.png',
      goto: "/pages/checkM/checkM"
    },{
      name: "提交稿件",
      img: '/image/submitM.png',
      goto: "/pages/submitM/submitM"
    },{
      name: "历史稿件",
      img: '/image/submitM.png',
      goto: "/pages/historyM/historyM"
    },{
      name: "提交排版",
      img: '/image/submitM.png',
      goto: "/pages/submitP/submitP"
    },{
      name: "历史稿件",
      img: '/image/submitM.png',
      goto: "/pages/historyM/historyM"
    }],
    
    showfunctions:true,
    showtime:true,
    current: 0,
    duration: 500,
    interval: 5000,
    value: 'label_1',
    value_s: '',
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
        value: 'label_3',
        label: '消息',
        icon: 'notification'
      },
      {
        value: 'label_4',
        label: '我的',
        icon: 'user'
      },
    ],
    todaywork:[
      {
        name:"概率论",
        add:"D888",
        time1:"8:00",
        time2:"10:00",
      },
      {
        name:"概率论",
        add:"D888",
        time1:"8:00",
        time2:"10:00",
      },
    ],
    day:[{
      date:"1/12 周四",
      work:[
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
      ],
    },{
      date:"1/12 周四",
      work:[
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
      ],
    },{
      date:"1/12 周四",
      work:[
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
        {
          name:"概率论",
          add:"D888",
          time1:"8:00",
          time2:"10:00",
        },
      ],
    }],
    step:[{
      text:'已接稿',
    },{
      text:'已写稿',
    },{
      text:'编辑部审稿',
    },{
      text:'辅导员审稿',
    },{
      text:'排版',
    },],
    listm:[
      {
        text:"学习二十大，管院在行动 | 本科第六党支部开展11月主题党日活动", date:"2022-11-30" , location:"管理学院105",people:[{key:1,name:"陶柯羽"},{key:2,name:"高原"},{key:5,name:"徐文慧"},{key:4,name:"张赫"},],url:"https://mp.weixin.qq.com/s/x-zHT_8DiS7T5NHC91Z3zA",score:4.5},
        {
          text:"学习二十大，管院在行动 | 本科第六党支部开展11月主题党日活动", date:"2022-11-30" , location:"管理学院105",people:[{key:1,name:"陶柯羽"},{key:2,name:"高原"},{key:5,name:"徐文慧"},{key:4,name:"张赫"},],url:"https://mp.weixin.qq.com/s/x-zHT_8DiS7T5NHC91Z3zA",score:4.5},    
    ],
  time:2*24*60*60*1000,
  timeData:{},

  swiper_show:[{
    url:"https://mp.weixin.qq.com/s/QgZSCvkBxFSRbH_wZg2S9Q",
    image:"https://mmbiz.qpic.cn/mmbiz_png/gbpAf4uUr2BUXONjIriayQ15PiadXdAnDibVGqiaSbgibc3PtuojCkEolxKgroPRrG3Ly41hRNw5tGsbn6wEr6LkXgw/0?wx_fmt=png",
    name:"秋日限定 | 小管邀请你抓住秋天最后的尾巴"
  },{
    url:"https://mp.weixin.qq.com/s/7UwvBVLlALpGn0SYwd8y1Q",
    image:"https://mmbiz.qpic.cn/mmbiz_jpg/gbpAf4uUr2Bkb3kzXMldhB2l9Wx85CqibicPsMsPD1R3kGTeic4fubWnsb3WNUW9baictFMq1ic0QDKsZTTd5XLkskQ/0?wx_fmt=jpeg",
    name:"腊月二十七 | 孩童街上嬉，沐浴剃精细"
  },{
    url:"https://mp.weixin.qq.com/s/7UwvBVLlALpGn0SYwd8y1Q",
    image:"http://mmbiz.qpic.cn/mmbiz_png/gbpAf4uUr2A9OWFDMY9bsxibgQkKflB0fNND7xgVIts7Y093Kibib8jkwIanJ7a9FFQpBK8rthUlt2Pdc0TaDgqaA/0?wx_fmt=png",
    name:"我们的故事——管理学院学生工作2022年度记忆"
  }],

  PICKER_KEY,
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
    group:[{label:"我",value:"我"},{label:"全部",value:"全部"},{label:"组长团",value:"组长团"},{label:"技术部",value:"技术部"},{label:"人事部",value:"人事部"},{label:"记者团",value:"记者团"}],

    [`${PICKER_KEY.DATE1}Value`]: [month, day, hour, minute],
    [`${PICKER_KEY.DATE2}Value`]: [hour, minute],
    [`${PICKER_KEY.People}Value`]: []
  },

  methods: {
    onClickPicker(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      console.log('picker pick:', place1);
      this.setData({
        [`${key}Visible`]: true,
      });
    },

    onColumnChange(e) {
      console.log('picker pick:', e);
    },
    onPickerChange(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      console.log('picker change:', );
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
    addWorks(){
      this.setData({
        isShow:"true"    
      })
    },
    goto(e){
      console.log(e)
      let url=e.currentTarget.dataset.url
      wx.navigateTo({
        url:`../seeM/seeM?url=${url}`,
      })
    },
    onTimeChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },
    showFunctions(){
      this.setData({
        showfunctions:!this.data.showfunctions
      })
    },
    showTimes(){
      this.setData({
        showtime:!this.data.showtime
      })
    },
    cannelMask() {
      this.setData({
        isShow: false
      })
    },
    goTomoudle2(e) {
      console.log("yes", e)
      let index = e.currentTarget.dataset.index
      let url = this.data.functions[index].goto
      if (url == '/pages/checkM/checkM' && app.globalData.authority2 == 10) {//!!!
        wx.showToast({
          title: '您没有权限',
          icon: 'error'
        })
      } else {
        wx.redirectTo({
          url: url,
        })
      }

    },
    onChange(e) {
      //tabbar
      this.setData({
        value: e.detail.value,
      });
      if (app.globalData.hasLogin && e.detail.value == 'label_2') {
        //页面跳转
        if (app.globalData.authority2 == 1) {
          wx.redirectTo({
            url: "/pages/publishM/publishM",
          })
        } else {
          wx.showToast({
            title: '您没有权限',
            icon: 'none'
          })
        }
      };
      if (app.globalData.hasLogin && e.detail.value == 'label_4') {
        //页面跳转
      
          wx.redirectTo({
            url: "/pages/myself/myself",
          })
        
      };
      if (!app.globalData.hasLogin && e.detail.value != 'label_1') {
        //页面跳转
        wx.redirectTo({
          url: "/pages/login/login",
        })
      }
    },
  },
});