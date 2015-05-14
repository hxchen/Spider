var cheerio = require("cheerio");
var server = require("./curl");
var http = require('http');
var querystring = require('querystring');

var data = {  
	PollId: '53',
	Item_168: '712'
};
var content = querystring.stringify(data);  
var options = {  
    hostname: '127.0.0.1', 
    port: 80, 
    path: '/poll/poll/poll_skim_dowith.jsp?' + content,  
    method: 'POST',
    headers:{  
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",  
        "Content-Length":content.length,         
        "Accept":"application/json, text/javascript, */*; q=0.01",  
        "remoteAddress":'10.10.10.1',
        "Accept-Language":"zh-cn",  
        "Cache-Control":"no-cache",  
        "Connection":"Keep-Alive",    
        "Host":"bbs.byr.cn",  
        "Referer":"plug.wokeji.com",  
        "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36",  
        "X-Requested-With":"XMLHttpRequest"  
    }  
};  
var req = http.request(options, function (res) {  
	console.log('request is sending...');
    res.setEncoding('utf8');  
    res.on('data', function (chunk) {  
    	console.log('result:'+chunk);
    });  
});  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message); 
});  
req.end();
