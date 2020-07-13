var geoCoordMap = {
	"台湾": [121.509062, 25.044332],
	"河北": [114.502461, 38.045474],
	"山西": [112.549248, 37.857014],
	"内蒙古": [111.670801, 40.818311],
	"辽宁": [123.429096, 41.796767],
	"吉林": [125.3245, 43.886841],
	"黑龙江": [126.642464, 45.756967],
	"江苏": [118.767413, 32.041544],
	"浙江": [120.153576, 30.287459],
	"安徽": [117.283042, 31.86119],
	"福建": [119.306239, 26.075302],
	"江西": [115.892151, 28.676493],
	"山东": [117.000923, 36.675807],
	"河南": [113.665412, 34.757975],
	"湖北": [114.298572, 30.584355],
	"湖南": [112.982279, 28.19409],
	"广东": [113.280637, 23.125178],
	"广西": [108.320004, 22.82402],
	"海南": [110.33119, 20.031971],
	"四川": [104.065735, 30.659462],
	"贵州": [106.713478, 26.578343],
	"云南": [102.712251, 25.040609],
	"西藏": [91.132212, 29.660361],
	"陕西": [108.948024, 34.263161],
	"甘肃": [103.823557, 36.058039],
	"青海": [101.778916, 36.623178],
	"宁夏": [106.278179, 38.46637],
	"新疆": [87.617733, 43.792818],
	"北京": [116.405285, 39.904989],
	"天津": [117.190182, 39.125596],
	"上海": [121.472644, 31.231706],
	"重庆": [106.504962, 29.533155],
	"香港": [114.173355, 22.320048],
	"澳门": [113.54909, 22.198951]
};
var markPointData = [{
	"name": "新疆",
	"coord": [
		87.665966, 43.869561, 90
	],
	"runConut": '537',
	"num": '234'
}];

function randomData() {
	return Math.round(Math.random() * 500);
}

var dataMap = [{
		name: '北京',
		value: '100'
	}, {
		name: '天津',
		value: randomData()
	},
	{
		name: '上海',
		value: randomData()
	}, {
		name: '重庆',
		value: randomData()
	},
	{
		name: '河北',
		value: randomData()
	}, {
		name: '河南',
		value: randomData()
	},
	{
		name: '云南',
		value: randomData()
	}, {
		name: '辽宁',
		value: randomData()
	},
	{
		name: '黑龙江',
		value: randomData()
	}, {
		name: '湖南',
		value: randomData()
	},
	{
		name: '安徽',
		value: randomData()
	}, {
		name: '山东',
		value: randomData()
	},
	{
		name: '新疆',
		value: randomData()
	}, {
		name: '江苏',
		value: randomData()
	},
	{
		name: '浙江',
		value: randomData()
	}, {
		name: '江西',
		value: randomData()
	},
	{
		name: '湖北',
		value: randomData()
	}, {
		name: '广西',
		value: randomData()
	},
	{
		name: '甘肃',
		value: randomData()
	}, {
		name: '山西',
		value: randomData()
	},
	{
		name: '内蒙古',
		value: randomData()
	}, {
		name: '陕西',
		value: randomData()
	},
	{
		name: '吉林',
		value: randomData()
	}, {
		name: '福建',
		value: randomData()
	},
	{
		name: '贵州',
		value: randomData()
	}, {
		name: '广东',
		value: randomData()
	},
	{
		name: '青海',
		value: randomData()
	}, {
		name: '西藏',
		value: randomData()
	},
	{
		name: '四川',
		value: randomData()
	}, {
		name: '宁夏',
		value: randomData()
	},
	{
		name: '海南',
		value: randomData()
	}, {
		name: '台湾',
		value: randomData()
	},
	{
		name: '香港',
		value: randomData()
	}, {
		name: '澳门',
		value: randomData()
	}
];
var colors = ["#1DE9B6", "#EEDD78", "#32C5E9", "#FFDB5C", "#37A2DA", "#04B9FF"];
var convertData = function(data) {
	var res = [];
	var len = data.length
	len = Math.floor(Math.random() * len)
	for (var i = 0; i < len; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
};
