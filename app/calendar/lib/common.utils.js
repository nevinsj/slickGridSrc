/**
 * Created by hardy on 2018/8/6.
 */
var Utils = (function ($) {
    return {
        /**
         * 获取当前时间yy-MM-dd hh:mm:ss 日期的时分秒
         * @returns {string}
         * @memberOf Utils
         */
        getCurrentDate: function () {
            var date = new Date();
            var month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return date.getFullYear() + "-" + month + "-" + day;
        },
        /**
         * 获取当前时间yy-MM-dd hh:mm:ss 日期的时分秒
         * @returns {string}
         * @memberOf Utils
         */
        getCurrentTime: function () {
            var date = new Date();
            var month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            return date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        }

    }
})(jQuery);
