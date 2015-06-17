var cheerio = require("cheerio");
var server = require("./curl");
var http = require('http');
var querystring = require('querystring');

var url = "http://d.weibo.com/1087030002_892_1003_0?page=1"
var data = {  
	mobile: '',
	password_3347: '',
	backURL:'http://weibo.cn/'
};
var content = querystring.stringify(data);  
var options = {  
    hostname: 'login.weibo.cn',  
    path: '/login/?' + content,  
    method: 'POST',
    headers:{  
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",  
        "Content-Length":content.length,         
        "Accept":"application/json, text/javascript, */*; q=0.01",  
      
        "Accept-Language":"zh-cn",  
        "Cache-Control":"no-cache",  
        "Connection":"Keep-Alive",    
        "Host":"bbs.byr.cn",  
        "Referer":"http://bbs.byr.cn/index",  
        "User-Agent":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; BOIE9;ZHCN)",  
        "X-Requested-With":"XMLHttpRequest"  
    }  
};  
var req = http.request(options, function (res) {  
    res.setEncoding('utf8');  
    res.on('data', function (chunk) {  
    	server.download(url, function(data) {
    		console.log(data);
    		if (data) {
    			var $ = cheerio.load(data);
    			$("a.S_txt1").each(function(i, e) {
    				console.log($(e).attr("href"));
    				console.log($(e).attr("title"));
    			});
    		} else {
    			console.log(new Date()+"error");
    		}
    	});
    });  
});  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message); 
    callback(e.message);
});  
req.end();
