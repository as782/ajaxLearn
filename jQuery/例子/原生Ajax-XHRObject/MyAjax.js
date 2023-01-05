function MyAjax(options) {

    //   options{
    //     url: '',
    //     method: '',
    //     data: {},
    //     success:function(){}
    // }
    let xhr = new XMLHttpRequest();
    //转换query参数
    let queryStr = transfromQuery(options.data);
    //判断请求方式
    if (options.method.toUpperCase() === 'GET') {

        xhr.open(options.method, options.url + '?' + queryStr);
        xhr.send();
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url);
        //设置请求头
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(queryStr);
    }
    //监听状态
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //将返回的josn数据转化为对象
            let result = JSON.parse(xhr.responseText);
            //调用对象方法传递数据
            options.success(result);
        }
    }
}

function transfromQuery(data) {
    // data{
    //     id:'23',
    //     name:'wangzhi'
    // }
    let sur = [];
    for (let item in data) {
        sur.push(item + '=' + data[item]);
    }
    return sur.join('&');
}
// let f = transfromQuery({ id: '9', name: '张三' });
// console.log(f);
