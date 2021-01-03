// **********************************//获取用户
// 查接口文档
$.ajax({
    url: "http://ajax.frontend.itheima.net/my/userinfo",
    // type: 'get', //默认get  可不写
    // 语法设置请求头  带上token值
    headers: {
        Authorization: localStorage.getItem("token")
    },
    success: function (res) {
        // 如果有昵称 显示昵称  如果没有 显示用户名
        var name = res.data.nickname || res.data.username;
        $('.username').html(name);
        // 如果有头像  显示头像  如果没有 显示名字第一个字符 大写 然后显示在盒子内
        if (res.data.user_pic) {
            $('.layui-nav-img').show().attr('src', res.data.user_pic);
            $('.avatar').hide();
        } else {
            var first = name.substr(0, 1);
            // 大写
            first = first.toUpperCase();
            $('.layui-nav-img').hide();
            $('.avatar').show().html(first).css('display', 'inline-block');

        }
    }
});

// **********************退出事件
var layer = layui.layer;
$('#logout').on('click', function () {
    layer.confirm('退出？', function (index) {
        // index 数值用于关闭
        localStorage.removeItem('token');
        location.href = '../login.html';
        layer.close(index);
    })
})