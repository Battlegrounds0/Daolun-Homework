

Page({
  onLoad: function () {
    const requestTask = wx.request({

      url: 'https://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=6tYzTvGZSOpYB5Oc2YGGOKt8', //百度天气API

      header: {

        'content-type': 'application/json',

      },



      success: (res) => {
        console.log(res);
        
        //res
        // res.weather -> string
        this.setData({
          //cloudy: res.weather === 'cloudy'
          //
          pm25: res.data.results[0].pm25,
          temperature:res.data.results[0].weather_data[0].temperature,
          weather:res.data.results[0].weather_data[0].weather,
          wind:res.data.results[0].weather_data[0].wind,
          currentCity:res.data.results[0].currentCity
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
    currentCity:false,
    weather:false,
    wind:false,
    temperature: 0,
    cloudy: false,
    pm25:0,
    //...
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  //输出百度上的数据
  
})