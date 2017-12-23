

Page({
  onLoad: function () {
    const requestTask = wx.request({


      url: 'https://api.heclouds.com/devices/20492854/datapoints?datastream_id=Light,Temperature,Humidity&limit=15',

      header: {

        'content-type': 'application/json',

        'api-key': 'ezWKzPXPlw2Jw9XEVvo=WHH=oyM='

      },

      success: (res) => {
        console.log(res);

        //res
        // res.weather -> string
        this.setData({
          //cloudy: res.weather === 'cloudy'
          //
        temp:res.data.data.datastreams[0].datapoints[13].value,
        
        });
        
      },
      fail: function (res) {

        console.log("fail!!!")

      },



      complete: function (res) {

        console.log("end")

      }

    })
    
  },
  

 

  data: {
  temp:false,
  src:false,
  text1: '羽绒服较好',
  text2: '外套较好',
  text3: '卫衣较好',
  text4: '短袖较好',
  array: [{
    mode: 'scaleToFill'
  }],
 
    
  },

  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  //...
  
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  
  //输出百度上的数据

})

// pages/chuanshenmo/chuanshenmo.js
