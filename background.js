//接收消息 
chrome.extension.onRequest.addListener(
    function(request,sender,sendResponse){
        console.log("get a request");
        for(var i=0;i<request.length;i++){ 
            chrome.tabs.create(request[i]);      
        }
        
});