/**
 * Created by hardy on 2018/8/3.
 */
window.onload = function () {
    var save = document.getElementById("save");
    // IE
    if (/msie/i.test(navigator.userAgent)) {
        // save.onclick = function () {
        //     var path = prompt("输入保存路径和文件名", "C:\\test.txt");
        //     var content = document.getElementById("content").value;
        //     content = content.replace(/\n/g, "\r\n");
        //     var fso = new ActiveXObject("Scripting.FileSystemObject");
        //     var s = fso.CreateTextFile(path, true);
        //     s.WriteLine(content);
        //     s.Close();
        // };
    }
    // Firefox/Chrome/Safari/Opera
    else {
        // 鼠标经过 a 的时候就开始 base64 编码
        save.onmouseover = function () {
            var content = document.getElementById("content").value;
            this.setAttribute("href",
                "data:application/octet-stream;base64,"
                + Base64.encoder(content));
        };
    }
};