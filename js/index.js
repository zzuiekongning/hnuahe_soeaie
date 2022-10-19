// 立即执行函数，防止变量污染 (function() {})();

// 饼形图1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',

      bottom: 0,
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: '男女比例',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 386,
          name: "男生"
        },
        {
          value: 136,
          name: "女生"
        }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var reverse_myColor = ["#8B78F6", "#F8B448", "#56D0E3", "#F57474", "#1089E7"];
  // 2.指定配置项和数据
  var option = {
    grid: {
      top: "10%",
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      // 不显示x轴相关信息
      show: false
    },
    yAxis: [{
      type: 'category',
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: ["机器人工程", "能源与动力工程", "自动化", "建筑环境与能源应用工程", "农业机械化及其自动化"]
    }, 
    {
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      show: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: [109, 110, 147, 123, 26]
    }],
    series: [{
        // 第一组柱子（条状）
        name: '条',
        stack: 'total',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 层级 相当于z-index
        yAxisIndex: 0,
        // 柱子更改样式
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子的对象
            // dataIndex 是当前柱子的索引号
            // console.log(params);
            return myColor[params.dataIndex];
          }
        },
        data: [71, 74, 80, 64, 96],
        //显示柱子内的百分比文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动解析为数据（data内的数据）
          formatter: "{c}%"
        }
      },
      {
        // 第二组柱子（条状）
        name: '条',
        stack: 'total',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 层级 相当于z-index
        yAxisIndex: 0,
        // 柱子更改样式
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子的对象
            // dataIndex 是当前柱子的索引号
            // console.log(params);
            return reverse_myColor[params.dataIndex];
          }
        },
        data: [29, 26, 20, 36, 4],
        // 显示柱子内的百分比文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动解析为数据（data内的数据）
          formatter: "{c}%"
        }
      },
      {
        // 第三组柱子（框状 border）
        name: '框',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 14,
        // 层级 相当于z-index
        yAxisIndex: 1,
        // 柱子修改样式
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 2,
          barBorderRadius: 15,
        },
        data: [100, 100, 100, 100, 100]
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["18岁以下", "18岁", "19岁", "20岁", "21岁", "22岁", "22岁以上"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      //name: '直接访问',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [34, 186, 127, 48, 56, 52, 19],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块2
// (function () {
//   var myChart = echarts.init(document.querySelector('.line2 .chart'));

//   var option = {
//     tooltip: {
//       trigger: 'axis',
//     },
//     legend: {
//       top: "0%",
//       textStyle: {
//         color: "rgba(255,255,255,.5)",
//         fontSize: "12"
//       }
//     },
//     grid: {
//       top: '30',
//       left: '10',
//       right: '30',
//       bottom: '10',
//       containLabel: true
//     },
//     xAxis: [{
//       type: 'category',
//       boundaryGap: false,
//       // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
//       axisLabel: {
//         textStyle: {
//           color: "rgba(255,255,255,.6)",
//           fontSize: 12
//         }
//       },
//       // x轴线的颜色为   rgba(255,255,255,.2)
//       axisLine: {
//         lineStyle: {
//           color: "rgba(255,255,255,.2)"
//         }
//       },
//       data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
//     }],
//     yAxis: [{
//       type: 'value',
//       axisTick: {
//         // 不显示刻度线
//         show: false
//       },
//       axisLine: {
//         lineStyle: {
//           color: "rgba(255,255,255,.1)"
//         }
//       },
//       axisLabel: {
//         textStyle: {
//           color: "rgba(255,255,255,.6)",
//           fontSize: 12
//         }
//       },
//       // 修改分割线的颜色
//       splitLine: {
//         lineStyle: {
//           color: "rgba(255,255,255,.1)"
//         }
//       }
//     }],
//     series: [{
//         name: '邮件营销',
//         type: 'line',
//         smooth: true, // 圆滑的线
//         // 单独修改当前线条的样式
//         lineStyle: {
//           color: "#0184d5",
//           width: 2
//         },
//         // 填充区域渐变透明颜色
//         areaStyle: {
//           color: new echarts.graphic.LinearGradient(
//             0,
//             0,
//             0,
//             1,
//             [{
//                 offset: 0,
//                 color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
//               },
//               {
//                 offset: 0.8,
//                 color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
//               }
//             ],
//             false
//           ),
//           shadowColor: "rgba(0, 0, 0, 0.1)"
//         },
//         // 拐点设置为小圆点
//         symbol: 'circle',
//         // 设置拐点大小
//         symbolSize: 5,
//         // 开始不显示拐点， 鼠标经过显示
//         showSymbol: false,
//         // 设置拐点颜色以及边框
//         itemStyle: {
//           color: "#0184d5",
//           borderColor: "rgba(221, 220, 107, .1)",
//           borderWidth: 12
//         },
//         data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
//       },
//       {
//         name: "转发量",
//         type: "line",
//         smooth: true,
//         lineStyle: {
//           normal: {
//             color: "#00d887",
//             width: 2
//           }
//         },
//         areaStyle: {
//           normal: {
//             color: new echarts.graphic.LinearGradient(
//               0,
//               0,
//               0,
//               1,
//               [{
//                   offset: 0,
//                   color: "rgba(0, 216, 135, 0.4)"
//                 },
//                 {
//                   offset: 0.8,
//                   color: "rgba(0, 216, 135, 0.1)"
//                 }
//               ],
//               false
//             ),
//             shadowColor: "rgba(0, 0, 0, 0.1)"
//           }
//         },
//         // 设置拐点 小圆点
//         symbol: "circle",
//         // 拐点大小
//         symbolSize: 5,
//         // 设置拐点颜色以及边框
//         itemStyle: {
//           color: "#00d887",
//           borderColor: "rgba(221, 220, 107, .1)",
//           borderWidth: 12
//         },
//         // 开始不显示拐点， 鼠标经过显示
//         showSymbol: false,
//         data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
//       }
//     ]
//   };

//   myChart.setOption(option);

//   window.addEventListener('resize', function () {
//     myChart.resize();
//   })
// })();

// 饼形图1
// (function () {
//   var myChart = echarts.init(document.querySelector(".pie2 .chart"));
//   var option = {
//     color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
//     tooltip: {
//       trigger: 'item',
//       formatter: '{a} <br/>{b}: {c} ({d}%)'
//     },
//     legend: {
//       // 垂直居中,默认水平居中
//       // orient: 'vertical',

//       bottom: 0,
//       left: 10,
//       // 小图标的宽度和高度
//       itemWidth: 10,
//       itemHeight: 10,
//       // 修改图例组件的文字为 12px
//       textStyle: {
//         color: "rgba(255,255,255,.5)",
//         fontSize: "10"
//       }
//     },
//     series: [{
//       name: '年龄分布',
//       type: 'pie',
//       // 设置饼形图在容器中的位置
//       center: ["50%", "42%"],
//       // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
//       radius: ['40%', '60%'],
//       avoidLabelOverlap: false,
//       // 图形上的文字
//       label: {
//         show: false,
//         position: 'center'
//       },
//       // 链接文字和图形的线
//       labelLine: {
//         show: false
//       },
//       data: [{
//           value: 1,
//           name: "0岁以上"
//         },
//         {
//           value: 4,
//           name: "20-29岁"
//         },
//         {
//           value: 2,
//           name: "30-39岁"
//         },
//         {
//           value: 2,
//           name: "40-49岁"
//         },
//         {
//           value: 1,
//           name: "50岁以上"
//         }
//       ]
//     }]
//   };

//   myChart.setOption(option);
//   window.addEventListener('resize', function () {
//     myChart.resize();
//   })
// })();

// 饼形图2
(function () {
  var myChart = echarts.init(document.querySelector('.pie3 .chart'));
  option = {
    title: {
      subtext: '*非全部地市',
      left: 'right'
    },
    tooltip: {
      trigger: 'item',
      //formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        radius: [20, 110],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          {
            value: 49,
            name: '南阳市'
          },
          {
            value: 47,
            name: '信阳市'
          },
          {
            value: 46,
            name: '新乡市'
          },          
          {    
            value: 41,
            name: '洛阳市'
          },
          {
            value: 39,
            name: '周口市'
          },
          {
            value: 31,
            name: '郑州市'
          },
          {
            value: 27,
            name: '商丘市'
          }
        ]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();


// 模拟飞行路线地图
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '邯郸':[114.490686,36.612273],
    '三河':[	117.07229,39.98358],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028],
    '安庆':[117.0536,30.5248],
    '六安':[116.507676,31.752889],
    '亳州':[115.782939,33.869338],
    '汉中':[107.028621,33.077668],
    '延安':[109.49081,36.596537],
    '运城':[111.003957,35.022778],
    '阳泉':[113.583285,37.861188],
  };

  var XAData = [
    [{
      name: '西安'
    }, {
      name: '郑州',
      value: 16
    }]
  ];

  var XNData = [
    [{
      name: '石家庄'
    }, {
      name: '郑州',
      value: 10
    }]
  ];

  var XSData = [
    [{
      name: '太原'
    }, {
      name: '郑州',
      value: 8
    }]
  ];

  var YCData = [
    [{
      name: '合肥'
    }, {
      name: '郑州',
      value: 6
    }]
  ];
  var YJData = [
    [{
      name: '长春'
    }, {
      name: '郑州',
      value: 4
    }]
  ];
  var YSData = [
    [{
      name: '重庆'
    }, {
      name: '郑州',
      value: 2
    }]
  ];
  var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  //var planePath = 'arrow';
  var convertData = function (data) {

    var res = [];
    for (var i = 0; i < data.length; i++) {

      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;

  };

  var color = ["#C0C0C0", '#ffa022', "#56D0E3", "#FF0000", "#8B78F6","#D9D919",]; //航线的颜色
  var series = [];
  [
    ['西安', XAData],
    ['石家庄', XNData],
    ['太原', XSData],
    ['合肥',YCData],
    ['长春',YJData],
    ['重庆',YSData],
  ].forEach(function (item, i) {
    series.push({
      // name: '陕西',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1.2,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, {
      // name: '河北' ,
      type: 'lines',
      zlevel: 2,
      symbol: ['none', 'arrow'],
      symbolSize: 10,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1.2,
          opacity: 0.6,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, 
    {
      // name: '山西',
      type: 'lines',
      zlevel: 3,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: 'grey', //arrow箭头的颜色
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[2],
          width: 1.2,
          opacity: 0.6,
          curveness: 0.2
        }
      },
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: function (val) {
        return val[2] / 8;
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[0].name,
          value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
        };
      })
    }
    );
  });
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['陕西 Top1', '河北 Top2', '山西 Top3'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'multiple'
    },
    geo: {
      map: 'china',
      // 把地图放大1.2倍
      zoom: 1.2,
      label: {
        // 鼠标移动显示区域名称
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      roam: true,
      // 地图样式修改
      itemStyle: {
        normal: {
          areaColor: 'rgba(34, 70, 168, 0.7)',
          borderColor: '#0692a4'
        },
        emphasis: {
          areaColor: 'rgba(119, 139, 224, 0.548)'
        }
      }
    },
    series: series
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();