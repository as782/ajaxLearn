$(function () {
    //定义一个时间过滤器
    template.defaults.imports.TimesGuolv = function (str) {
        let dt = new Date(str);
        let y = dt.getFullYear();
        let m = dt.getMonth();
        let dd = dt.getDate();
        let hh = dt.getHours();
        let mm = dt.getMinutes();
        let ss = dt.getSeconds();

        return `${y}-${m}-${dd} ${hh}:${mm}:${ss}`
    }
    function getNewsList() {
        $.ajax({
            method: 'GET',
            data: {},
            url: 'http://www.liulongbin.top:3006/api/news',
            success: function (res) {
                if (res.status != 200) {
                    return alert('失败！');
                }
                // 使用模板
                res.data.forEach(item => {
                    item.tags = item.tags.split(',');
                });
                console.log(res);
                let strp = template('tep-news', res);
                $('#list-box').html(strp);
            }
        })
    };
    getNewsList();

    // cmtcount: 99
    // id: 1
    // img: "/images/0.webp"
    // source: "新京报经济新闻"
    // tags: "三大运营商,中国移动,5G商用"
    // time: "2019-10-28T03:50:28.000Z"
    // title: "中秋快乐！回家干饭！"
});