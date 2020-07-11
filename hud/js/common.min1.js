var gengxin;
try{
    gengxin= new ActiveXObject("Msxml2.XMLHTTP");
}catch(e){
    try{
        gengxin= new ActiveXObject("Microsoft.XMLHTTP");
    }catch(e){
        try{
            gengxin= new XMLHttpRequest();
        }catch(e){}
    }
}

//局部刷新 3  
function getPart2(url){
    gengxin.open("get",url,true);
    gengxin.onreadystatechange = function(){
        if(gengxin.readyState == 4)
        {
            if(gengxin.status == 200)
            {
                if(gengxin.responseText!=""){
                    document.getElementById("sx2").innerHTML = unescape(gengxin.responseText);        
                }
            }
            else{
                document.getElementById("sx2").innerHTML = "数据载入出错";
            }
        }
    }
    gengxin.setRequestHeader("If-Modified-Since","0");
    gengxin.send(null);
}
setInterval("getPart2('data3.php')",1000);

