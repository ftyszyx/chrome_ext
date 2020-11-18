// (function(){

// 	var count = 100;

// 	var timer = setInterval(function(){
// 		if(!count){
// 			clearInterval(timer);
// 		}
// 		chrome.browserAction.setBadgeBackgroundColor({color: '#0000FF'});
// 		chrome.browserAction.setBadgeText({text: ""+count});
// 		count--;
// 	},1000);
	
// })();



(function(){
	var icon = localStorage.getItem('stock_icon');
	if(icon != undefined){
		chrome.browserAction.setIcon({path:'images/icons/'+icon+'.png'});
	}
	
})();

// var blackList = [
// 	"baidu.com",
// 	"360.cn",
// 	"qq.com",
// 	"taobao.com",
// 	"alibaba.com",
// 	"1688.com",
// 	"tmall.com",
// 	"google.com",
// 	"amazon.com",
// 	"jd.com",
// 	"hao123.com",
// 	"so.com",
// 	"people.com.cn",
// 	"apple.com",
// 	"paypal.com",
// 	"alipay.com"
// ];
// if(localStorage.getItem('stock_blacklist')){
// 	blackList = localStorage.getItem('stock_blacklist').split('|');
// }

// var domainReg = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
// function isArrayContain(arr, str){
// 	for(var i = 0, len = arr.length; i < len; i++){
// 		var domain = arr[i];
// 		if(str.indexOf(domain) != -1){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// chrome.tabs.onCreated.addListener(function(tab) {
// 	var tabId = tab.id;
//   	console.log('tabs.onCreated --'
//               + ' tab.windowId: ' + tab.windowId
//               + ' tab.id: '    + tab.id
//               + ' tab.index: '  + tab.index
//               + ' tab.url: '    + tab.url);
//   	console.log(tab)

//   	// 如果设置了开关，则依据开关规则
//   	var isOn = localStorage.getItem('stock_switch') || 'on';
//   	if(isOn != 'on'){
//   		return;
//   	}

//   	var url = tab.url;
//   	var patt = url.match(domainReg)

//   	// 如果在n个小时内关闭过，则不再出现
//   	var closeTime = localStorage.getItem('stock_close');
//   	if(closeTime && new Date() - closeTime <= 1000*3600*5){
//   		return;
//   	}
//   	// 黑名单中的不显示
//   	if(url && isArrayContain(blackList, patt[2])){
//   		return;
//   	}

//   	// 随机抽取2%的pv展现
//   	var rate = localStorage.getItem('stock_rate') || 0.05;
//   	if(Math.random() > rate){
//   		return;
//   	}

// 	//  	chrome.tabs.executeScript(tab.id, {code: 'document.body.innerHTML = "hello world"'}, function(){
// 	// 	console.log('haha')
// 	// })
	
// 	// 1. 只在http和https协议下出
// 	// 2. 只在一些小网站上出，按照黑名单过滤
// 	// 
// 	// 
// 	chrome.tabs.executeScript(tab.id, {file: 'insert.js'}, function(){
// 		console.log('植入成功')
// 	})

// 	// chrome.tabs.onUpdated.addListener(function(tabId, {'status': complete},tab){
// 	// 	console.log('tab=', tab)
// 	// })
// });

// chrome.extension.onMessage.addListener(
//     function(request, sender, sendResponse) {
//     	// console.log(request, sender, sendResponse)
//     	if(request && request.cmd == 'close'){
//     		localStorage.setItem('stock_close', +new Date());
//     	}
//         // sendResponse("close success");
//     }
// );