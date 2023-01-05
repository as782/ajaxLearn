// http://www.liulongbin.top.3006/api/cmtlist
// get 
$(function () {

    $('#fo1').submit(function (e) {
        e.preventDefault()
        let data = $(this).serialize()

        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
            if (res.status != 201) {
                return alert('失败');
            }

            getCommitContent();
            $('#fo1')[0].reset();
        })

    });

    function getCommitContent() {
        // 发起请求
        // $.ajax({
        //     method: 'GET',
        //     url: 'http://www.liulongbin.top.3006/api/cmtlist',
        //     success: function (res) {
        //         if (res.status != 200) {
        //             return alert('失败');
        //         }
        //         console.log(res.data);
        //     }
        // });
        $.get('http://www.liulongbin.top:3006/api/cmtlist', function (res) {
            if (res.status != 200) {
                return alert('失败');
            }
            let rows = [];
            $.each(res.data, function (i, item) {
                rows.push(
                    `<li class="list-group-item d-flex justify-content-between align-items-center  ">
                         ${item.content}
                        <div>
                            <span class="badge badge-info badge-pill">评论人：${item.time}</span>
                            <span class="badge badge-warning badge-pill">评论时间：${item.username}</span>
                        </div>
                    </li>
                    `
                );
                $('#citList').empty().append(rows)
            });
        })

    }

    getCommitContent()

})
