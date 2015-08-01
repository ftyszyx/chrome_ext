//接收消息 
chrome.extension.onRequest.addListener(
    function(request,sender,sendResponse){
        console.log("get a request");
        for(var i=0;i<request.length;i++){ 
            //只打开没访问过的
            var detail={};
            detail.url=request[i].url;

            var processVisitUrl=function(request_info){
                return function(visitItems){
                    if(visitItems.length==0){
                        chrome.tabs.create(request_info); 
                        console.log("visit:"+request_info.url);                      
                    }
                }
            }
            chrome.history.getVisits(detail,processVisitUrl(request[i]));
        }        
});