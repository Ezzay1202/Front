// components/people.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    peoples: {
      type: Array,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index1: 0,
    index2: 0,
    sideBarIndex: 0,
    scrollTop: 0
  },

  lifetimes: {
    attached() {
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
          let peopleList = new Map()
          this.setData({
            peopleRelated: peopleList
          })
          for (let k in datas) {
            maps1.label = k
            maps1.title = k
            let tempRelated = this.data.peopleRelated //Map
            console.log(tempRelated)
            tempRelated.set(k, [])
            this.setData({
              peopleRelated: tempRelated
            })
            for (let j = 0; j < datas[k].length; j++) {
              maps2.label = datas[k][j].username
              maps2.checked = false
              dep[j] = maps2
              maps2 = {}
            }
            maps1.items = dep
            dep = []
            people[i++] = maps1
            maps1 = {}
          }
          this.setData({
            categories: people
          })
          console.log(this.data.categories);
        }
      })
    }
  },

  /**
   * 组件的方法列表 
   */
  methods: {
    onLoad(options) {

    },
    checkedTag(e) {
      this.setData({
        index2: e.currentTarget.dataset.index2
      })
    },
    checkedTags(e) {
      console.log(this.data)
      this.setData({
        index1: e.currentTarget.dataset.index1
      })
      let index1 = this.data.index1
      let index2 = this.data.index2
      let checked = 'categories[' + index1 + '].items[' + index2 + '].checked'
      let peopleRelated = this.data.peopleRelated //是一个Map
      let peopleTemp = this.data.categories[index1].items[index2].label //人名
      //console.log(peopleTemp)
      let tempList = peopleRelated.get(this.data.categories[index1].title)
      console.log(peopleRelated)
      console.log(tempList)
      console.log(this.data.categories)
      //console.log(peopleRelated)
      if (tempList.includes(peopleTemp)) //检测Map中是否有此人名
      {
        tempList.splice(tempList.indexOf(peopleTemp), 1)
        peopleRelated.set(this.data.categories[index1].title, tempList)
      } else {
        tempList.push(peopleTemp)
        peopleRelated.set(this.data.categories[index1].title, tempList)
      }
      let number = []
      let k = 0
      for (let p of peopleRelated) {
        console.log(p)
        for (let q = 0; q < p[1].length; q++) {
          number[k++] = p[1][q]
        }
      }
      this.setData({
        [checked]: !this.data.categories[index1].items[index2].checked,
        peoples: number
      })
      console.log(peopleRelated)
    },

    cancel() {
      this.setData({
        visible: !this.data.visible
      })
      this.triggerEvent('sync', {
        value: this.properties.visible,
        peoples: this.properties.peoples
      })
    },

    onVisibleChange(e) {
      this.setData({
        visible: e.detail.visible,
      });
      this.triggerEvent('sync', {
        value: this.properties.visible
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
    }
  }
})