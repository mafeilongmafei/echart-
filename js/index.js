let request = require("request");
let cheerio = require("cheerio")
let fs = require("fs")
request(
  "https://ncov.dxy.cn/ncovh5/view/pneumonia?from=timeline&isappinstalled=0", (a , b ,c)=>{
	const $  = cheerio.load(c)
	let str = $("#getAreaStat").html()
	str = str.split("=")[1]
	str = str.split("}catch")[0]
	
      fs.writeFile("../file.json", str, (res) => {
        console.log(res);
      });
  }
);
