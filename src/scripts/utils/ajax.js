
'use strict'  // 严格模式 


const $$ = (function(){
    let ajax = function(url,type,callback){
        var xhr = new XMLHttpRequest();  // 1. 创建请求头

        xhr.open(type,url,true);  // 2. 打开请求头 

        xhr.send(); // 3. 发送请求头

        xhr.onreadystatechange = function(){   // 4. 监听 得到返回的数据
             if(xhr.status==200&&xhr.readyState==4){
                 callback(JSON.parse(xhr.responseText))
             }
        }
    }
    return {
        http:ajax
    }
})();      // 匿名函数自执行 


let $ = {
    get(url,type,callback){

    },
    post(){

    }
}


export default $$;