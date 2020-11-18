(function(){
	// document.body.innerHTML = 'hello world';
	var doc = document;
	var divNode = doc.createElement('div');
	divNode.setAttribute("id", "tweetinfo");
	divNode.innerHTML = '<a href="#" class="close" id="tweet-close">关闭</a><iframe id="tweet-iframe" src="http://www.stock360.cn/info.html" frameborder="no" scrolling="no" width="336" height="280"></iframe>';
	document.body.appendChild(divNode);
	
	var styleNode = doc.createElement('style');
	var cssStr = '#tweetinfo{position:fixed;right:0;bottom:0;z-index:100000;width:auto!important;margin-left:-168px;margin-top:-150px;}#tweetinfo .close{position:absolute;top:-12px;right:0;font-size:14px;}';
	styleNode.appendChild(doc.createTextNode(cssStr));
	document.head.appendChild(styleNode);

	var $tweetinfo = document.getElementById('tweetinfo');
	document.getElementById('tweet-close').addEventListener('click', function(e){
		e.preventDefault();
		$tweetinfo.style.display = 'none';

		// 与插件进行消息通信
		chrome.extension.sendMessage(  {cmd: "close"}, function(response) {  response && console.log(response); }  ); 
	})

	window.addEventListener('message', function(e){
		var data = e.data;
		if(data && data.origin == 'stock'){
			var $iframe = document.getElementById('tweet-iframe');

			data.width && $iframe.setAttribute('width', data.width);
			data.height && $iframe.setAttribute('height', data.height);
			data.url &&	$iframe.setAttribute('src', data.url);
		}
	})


})();