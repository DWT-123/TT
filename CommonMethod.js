



function requestMethod(par1,par2,par3,callback) {
    //第一步创建请求对象（负责去服务端要数据）
    var zhr = new XMLHttpRequest();

    //第二步建立与服务端的连接（找到那个服务器去要数据）
    zhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6573bd9c02ee803e6e3bfeab6e8007c/' + par2)

    //设置头信息，告诉数据以表单的形式传递过去
    zhr.setRequestHeader("content_type", "application/x-www-form-urlencoded");
    zhr.send(par3);

    //接受服务端返回的数据
    zhr.onreadystatechange = function () {
        //zhr.readyState==4代表数据请求完成，zhr.status==200代表数据返回成功
        if (zhr.readyState == 4 && zhr.status == 200) {
            var responseDate = JSON.parse(zhr.responseText);
            var returnstr = responseDate.data;
            callback(returnstr);
        }
    }
}