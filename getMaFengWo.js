﻿var cheerio = require("cheerio");
var server = require("./curl");
var url = require('url');
var http = require('http');
var fs = require('fs');
var qs = require('querystring');

var address = "http://www.mafengwo.cn/note/detail.php?iId=3158882&iPage=1&iRid=12935324&t=0.03996462468057871";
function showTimes(){
	server.download(address, function(data) {
		if (data) {
			var $ = cheerio.load(data);
			$("div.vc_time span").each(function(i, e) {
				var content = $(e).html();
				var left = content.replace(/2014-08-17 21:02/, "");
				var times = left.replace('<i class="ico_view"></i>', "");
				console.log(new Date()+times);
			});
			
		} else {
			console.log("error");
		}
	});
	setTimeout(showTimes,100)
}
showTimes();