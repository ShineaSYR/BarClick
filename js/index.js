var myChart = echarts.init(document.getElementById('container'));
var see;
var option = {
    color: ['#3398DB'],
    title:{
        text:'echarts调试',//${HunitID}
        x: 'center',                 // 水平安放位置，默认为左对齐，可选为：'center' ¦ 'left' ¦ 'right'
        y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为： 'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
        backgroundColor: 'rgba(0,0,0,1)',
        show:true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: deal(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [25, 10,30, 334, 390, 330, 220],
        itemStyle:{
            normal: {
                color: function(params) {
                    //console.log(params);
                    var key = params.name.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "");
                    //根据param的数据列进行颜色修改
                    if(key  == 'Sun'){
                        see =params.dataIndex;
                        //return "#FE8463";
                        return "red";   
                    }else{
                        //return "#9BCA63";
                        return "green";    
                    }
                }
            }
        }
    }]
};
//点击事件 点击指定的某个信息，触发相应效果
myChart.on('click', function(param) {
    if(param.dataIndex == see){
        //点击跳转到百度页面
        // window.location.href = "http://www.baidu.com";
        //点击跳转到新HTML页面
        window.location.href = "table_info.html";
    }
});
myChart.setOption(option);


//将x_catalog中的横排字转化为竖排字
function deal(x_catalog){
    console.log("hahah");
    var list = [];
    for (var i = 0; i < x_catalog.length; i++) {
        var s = "";
        for(var j = 0; j < x_catalog[i].length; j++){
            s += x_catalog[i][j]+"\r\n";
        }
        list.push(s);
        //console.log("hahah11");
    }
    //console.log(list);
    return list;

}

            