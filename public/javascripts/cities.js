/**
 * Created by Administrator on 2016/5/14.
 */
/**
 * 页面加载完毕后发送AJAX获取当前存在的城市信息
 */
$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/cities',
        success: function (data) {
            appendToList(data);
        }
    });
});

/**
 * 将数据添加到列表中
 *
 * @param data
 */
function appendToList(data) {
    if(isArray(data)) {
        var list = [];
        for(var i=data.length;i > 0; i--) {
            var content = data[i-1];
            list.push($('<li>', {html: content}));
        }
        $('#cities').append(list);
    }
}

/**
 * 判断一个对象是不是数组
 *
 * @param data
 */
function isArray(data) {
    return "[object Array]" === Object.prototype.toString.call(data);
}
