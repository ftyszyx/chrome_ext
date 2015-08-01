
//分页的操作
(function (argument) {
    $(".config-page").hide();
    $('#set-tab').click(function(){
        $('#set-tab').attr("class","tab on");
        $('#normal-tab').attr("class","tab");
        $(".config-page").show();
        $(".table").hide();
    });
    $('#normal-tab').click(function(){
        $('#set-tab').attr("class","tab");
        $('#normal-tab').attr("class","tab on");
        $(".config-page").hide();
        $(".table").show();
    });
})();

