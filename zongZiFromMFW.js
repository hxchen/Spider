var cheerio = require("cheerio");
var server = require("./curl");
var http = require('http');
var https = require('https');
var querystring = require('querystring');
var FORMDATA = require("form-data");
var url = "https://passport.mafengwo.cn/login.html";
var username = "";
var password = "";
/**
 * getLogin
 * 获取登陆页面
 */
function getLogin(callback) {
	var data = {};
	var contents = querystring.stringify(data);
	var options = {
		hostname : 'passport.mafengwo.cn',
		port : 443,
		path : '/login.html',
		method : 'GET',
		headers : {
			'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
			'Accept-Encoding' : 'gzip, deflate, sdch',
			'Accept-Language' : 'zh-CN,zh;q=0.8,tr;q=0.6,en;q=0.4,zh-TW;q=0.2,sq;q=0.2',
			'Cache-Control' : 'max-age=0',
			'Connection' : 'keep-alive',
			'Cookie' : 'mfw_uuid=d6b4b0af-366d-ee99-da8c-5ee5e1e5c04b; __mfwthirduuid=f0c977c26b79985c52cbc0c828e11d6b; __mfwuuid=d6b4b0af-366d-ee99-da8c-5ee5e1e5c04b; __mfwft=1432698886; NTKF_T2D_CLIENTID=guest9ACD9803-6D95-7239-8B72-5A8BF0F7250C; __mfwlv=1434532178; __mfwvn=21; 0c8d04901d1b62999c722917041813f6=1501; PHPSESSID=jeufabrc3jb0t76jls88f7bud4; _r=163; _rp=a%3A2%3A%7Bs%3A1%3A%22p%22%3Bs%3A34%3A%22mail.163.com%2Fjs6%2Fread%2Freadhtml.jsp%22%3Bs%3A1%3A%22t%22%3Bi%3A1434533275%3B%7D; 5295523_LAST_MSG_DAKA_DATE=1434535855; 3c4751be7aca0d6a2fd9c5b2375bb3e1=1566; 26afe81f3c9398c9ff3b0338547070cc=1613; 130eefe7b7f5ed90eed7a3391c3313f6=1649; 2eb233827f0073a06eadf2505256c0d5=1651; f8e7784434588841552609a7d3aab054=1646; __utma=258432534.1951795724.1426495160.1434522163.1434532180.28; __utmb=258432534.52.10.1434532180; __utmc=258432534; __utmz=258432534.1434532180.28.19.utmcsr=weibo.com|utmccn=(referral)|utmcmd=referral|utmcct=/318280005/home; __mfwlt=1434535958; uva=a%3A5%3A%7Bs%3A13%3A%22host_pre_time%22%3Bs%3A10%3A%222015-06-17%22%3Bs%3A2%3A%22lt%22%3Bi%3A1434535961%3Bs%3A5%3A%22rhost%22%3Bs%3A9%3A%22weibo.com%22%3Bs%3A10%3A%22last_refer%22%3Bs%3A0%3A%22%22%3Bs%3A4%3A%22step%22%3Bi%3A252%3B%7D; oad_n=a%3A6%3A%7Bs%3A5%3A%22refer%22%3Bs%3A37%3A%22http%3A%2F%2Fweibo.com%2F318280005%2Fhome%3Fwvr%3D5%22%3Bs%3A2%3A%22hp%22%3Bs%3A9%3A%22weibo.com%22%3Bs%3A3%3A%22oid%22%3Bi%3A1151%3Bs%3A2%3A%22dm%22%3Bs%3A15%3A%22www.mafengwo.cn%22%3Bs%3A2%3A%22ft%22%3Bs%3A19%3A%222015-06-17+17%3A09%3A41%22%3Bs%3A2%3A%22pv%22%3Bi%3A63%3B%7D',
			'Host' : 'passport.mafengwo.cn',
			'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36'
		}
	};
	var req = https.request(options, function(res) {
		console.log("getLogin-statusCode: ", res.statusCode);
		res.setEncoding('utf8');
		var data = "";
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on("end", function() {
			console.log('DATA-getLogin: ' + data);
			callback(data);
		});
	});
	req.end();
	req.on('error', function(e) {
		console.error('error' + e);
	});
}

function login_post(callback) {
	// 表单
	var form = new FORMDATA();
	form.append("passport", username);
	form.append("password", password);
	form.append("code", "");
	var options = {
		hostname : 'passport.mafengwo.cn',
		port : 80,
		path : '/login/',
		method : 'POST',
		headers : {
			'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
			'Accept-Encoding' : 'gzip, deflate',
			'Accept-Language' : 'zh-CN,zh;q=0.8,tr;q=0.6,en;q=0.4,zh-TW;q=0.2,sq;q=0.2',
			'Cache-Control' : 'max-age=0',
			'Connection' : 'keep-alive',
			'Content-Length' : 178,
			'Content-Type' : 'application/x-www-form-urlencoded',
			'Cookie' : 'mfw_uuid=d6b4b0af-366d-ee99-da8c-5ee5e1e5c04b; __mfwthirduuid=f0c977c26b79985c52cbc0c828e11d6b; __mfwuuid=d6b4b0af-366d-ee99-da8c-5ee5e1e5c04b; __mfwft=1432698886; NTKF_T2D_CLIENTID=guest9ACD9803-6D95-7239-8B72-5A8BF0F7250C; __mfwlv=1434532178; __mfwvn=21; 0c8d04901d1b62999c722917041813f6=1501; PHPSESSID=jeufabrc3jb0t76jls88f7bud4; _r=163; _rp=a%3A2%3A%7Bs%3A1%3A%22p%22%3Bs%3A34%3A%22mail.163.com%2Fjs6%2Fread%2Freadhtml.jsp%22%3Bs%3A1%3A%22t%22%3Bi%3A1434533275%3B%7D; 5295523_LAST_MSG_DAKA_DATE=1434535855; 3c4751be7aca0d6a2fd9c5b2375bb3e1=1566; 26afe81f3c9398c9ff3b0338547070cc=1613; 130eefe7b7f5ed90eed7a3391c3313f6=1649; 2eb233827f0073a06eadf2505256c0d5=1651; f8e7784434588841552609a7d3aab054=1646; __utma=258432534.1951795724.1426495160.1434522163.1434532180.28; __utmb=258432534.52.10.1434532180; __utmc=258432534; __utmz=258432534.1434532180.28.19.utmcsr=weibo.com|utmccn=(referral)|utmcmd=referral|utmcct=/318280005/home; __mfwlt=1434537325; uva=a%3A5%3A%7Bs%3A13%3A%22host_pre_time%22%3Bs%3A10%3A%222015-06-17%22%3Bs%3A2%3A%22lt%22%3Bi%3A1434537328%3Bs%3A5%3A%22rhost%22%3Bs%3A9%3A%22weibo.com%22%3Bs%3A10%3A%22last_refer%22%3Bs%3A0%3A%22%22%3Bs%3A4%3A%22step%22%3Bi%3A256%3B%7D; oad_n=a%3A6%3A%7Bs%3A5%3A%22refer%22%3Bs%3A37%3A%22http%3A%2F%2Fweibo.com%2F318280005%2Fhome%3Fwvr%3D5%22%3Bs%3A2%3A%22hp%22%3Bs%3A9%3A%22weibo.com%22%3Bs%3A3%3A%22oid%22%3Bi%3A1151%3Bs%3A2%3A%22dm%22%3Bs%3A15%3A%22www.mafengwo.cn%22%3Bs%3A2%3A%22ft%22%3Bs%3A19%3A%222015-06-17+17%3A09%3A41%22%3Bs%3A2%3A%22pv%22%3Bi%3A67%3B%7D',
			'Host' : 'passport.mafengwo.cn',
			'Origin' : 'https://passport.mafengwo.cn',
			'Referer' : 'https://passport.mafengwo.cn/login.html',
			'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36',
		}
	};

	// 发送带表单请求
	form.submit(options, function(err, res) {
		if (err) {
			cb(err);
		} else {
			var headers = JSON.stringify(res.headers);
			console.log('STATUS2: ' + res.statusCode);
			console.log('HEADERS2: ' + headers);
			res.setEncoding("utf8");
			var res_body = "";
			res.on("data", function(chunk) {
				res_body += chunk;
			});
			res.on("end", function() {
				console.log('DATA2: ' + res_body);
				callback(res_body);
			});
			res.on("error", function(err2) {
				console.error(err.message);
			});
		}
	});
};
function homePage() {
	var data = {};
	var contents = querystring.stringify(data);
	var options = {
		hostname : 'www.mafengwo.cn',
		port : 80,
		path : '/',
		method : 'GET',
		headers : {
			'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
			'Accept-Encoding' : 'gzip, deflate, sdch',
			'Accept-Language' : 'zh-CN,zh;q=0.8,tr;q=0.6,en;q=0.4,zh-TW;q=0.2,sq;q=0.2',
			'Cache-Control' : 'max-age=0',
			'Connection' : 'keep-alive',
			'Cookie' : 'mfw_uuid=c95d0692-1f67-1c3f-f870-a5247ea237e5; __mfwthirduuid=f40e70fd739e740c67aff0c37b8982ef; __mfwuuid=c95d0692-1f67-1c3f-f870-a5247ea237e5; _r=baidu; _rp=a%3A2%3A%7Bs%3A1%3A%22p%22%3Bs%3A14%3A%22www.baidu.com%2F%22%3Bs%3A1%3A%22t%22%3Bi%3A1430492029%3B%7D; __mfwft=1432642238; check_in=2015-05-28; check_out=2015-05-29; PHPSESSID=c0mk5dj9kt8h4nofvr6o506ev4; __mfwlv=1434545167; __mfwvn=12; 5295523_LAST_MSG_DAKA_DATE=1434546248; 3c4751be7aca0d6a2fd9c5b2375bb3e1=1486; 26afe81f3c9398c9ff3b0338547070cc=1613; 130eefe7b7f5ed90eed7a3391c3313f6=1625; 2eb233827f0073a06eadf2505256c0d5=1651; f8e7784434588841552609a7d3aab054=1646; __mfwlt=1434547506; uva=a%3A4%3A%7Bs%3A2%3A%22lt%22%3Bi%3A1434547515%3Bs%3A5%3A%22rhost%22%3Bs%3A0%3A%22%22%3Bs%3A10%3A%22last_refer%22%3Bs%3A1%3A%22%2F%22%3Bs%3A4%3A%22step%22%3Bi%3A313%3B%7D; oad_n=a%3A6%3A%7Bs%3A5%3A%22refer%22%3Bs%3A21%3A%22https%3A%2F%2Fwww.baidu.com%22%3Bs%3A2%3A%22hp%22%3Bs%3A13%3A%22www.baidu.com%22%3Bs%3A3%3A%22oid%22%3Bi%3A1026%3Bs%3A2%3A%22dm%22%3Bs%3A15%3A%22www.mafengwo.cn%22%3Bs%3A2%3A%22ft%22%3Bs%3A19%3A%222015-06-16+22%3A30%3A02%22%3Bs%3A2%3A%22pv%22%3Bi%3A21%3B%7D; CNZZDATA30065558=cnzz_eid%3D851135009-1427806666-null%26ntime%3D1434544601; __utmt=1; __utma=258432534.1987267935.1427810674.1434464998.1434545169.16; __utmb=258432534.11.10.1434545169; __utmc=258432534; __utmz=258432534.1434545169.16.9.utmcsr=baidu.com|utmccn=(referral)|utmcmd=referral|utmcct=/',
			'Host' : 'www.mafengwo.cn',
			'Referer':'www.mafengwo.cn',
			'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36'
		}
	};
	var req = http.request(options, function(res) {
		console.log("homePage-statusCode: ", res.statusCode);
		res.setEncoding('UTF-8');
		var data = "";
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on("end", function() {
			console.log('DATA-homePage: ' + data);
		});
	});
	req.end();
	req.on('error', function(e) {
		console.error('error' + e);
	});
}
homePage();
//getLogin(function(data) {
//	login_post(function(data1) {
//		homePage();
//	});
//});
