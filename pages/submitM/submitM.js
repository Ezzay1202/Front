// pages/submitM/submitM.js
let index1=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index1:0,
    listm:[
      {
        text:"管理学创新实验班班会 管理学创新实验班班会", date1:"10-9-11-0" ,date2:"12-00", location:"东久D888",people:"1文1摄" ,fileArray:[{name: "NIC考核标准lallalal (1)(1).docx",
        path: "wxfile://tmp_d356ac9211e5a7b972a4f51c20e8b0cc.docx",
        size: 22089,
        time: 1669440948,
        type: "file"},{name: "NIC考核标准 (1)(1).docx",
        path: "wxfile://tmp_d356ac9211e5a7b972a4f51c20e8b0cc.docx",
        size: 22089,
        time: 1669440948,
        type: "file"}]},
        {
          text:"管理学创新实验班班会 管理学创新实验班班会", date1:"10-9-11-0" ,date2:"12-00", location:"东久D888",people:"1文1摄",fileArray:[]},], 
    show:'display:none',

  },
  // 文件上传
  uploadFile:function(e) {
    console.log(e)
    index1=e.currentTarget.dataset.index
    console.log(index1)
    let fileArray='listm['+index1+'].fileArray'
    wx.chooseMessageFile({
        count: 10,     //选择文件的数量
        type: 'all',   //选择文件的类型
        success: (res) => {
          console.log(res.tempFiles)
            this.setData({
              [fileArray]: this.data.listm[index1].fileArray.concat(res.tempFiles)
            })
        }
    })
},
removefile(e){
  console.log(index1)
  let index=e.currentTarget.dataset.index
  let fileArray='listm['+index1+'].fileArray'
  console.log(e,index)
  this.data.listm[index1].fileArray.splice(index,1)
  this.setData({
    [fileArray]:this.data.listm[index1].fileArray
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
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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