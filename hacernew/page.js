//获取
//  要筛选的
// <td class="title">
// <a href="http://spotthedrowningchild.com">Show HN: Spot the Drowning Child</a>
// <span class="sitebit comhead"> (spotthedrowningchild.com)</span>
//公用函数


//显示功能
(function(){
    $("body").append('<input id="btn_openall" type="button" value="打开所有"/>');
    function tab(){
        this.selected =false 
    }
    
    
    $("#btn_openall").click(function(){
        
        var tabarr=new Array();
        var allnews=$("td .title");
        for(var i=0;i<allnews.length;i++){
            var linkarr=$(allnews[i]).children('a');
            if(linkarr.length>0){
                var newtab=new tab();
                newtab.url=linkarr.attr("href");
                if(newtab.url.indexOf('http')==0){
                    tabarr.push(newtab);
                }
                
            }
        }

        chrome.extension.sendRequest(tabarr, function(response) {
        //console.log(response.farewell);
            console.log("send request ok");
        });
    });
    
})();

