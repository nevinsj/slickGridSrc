/**
 * Created by hardy on 2018/8/3.
 */
var topClass = {
    // fn: function () {
    //     document.getElementById('output').innerHTML = 'no arguments';
    // }
};

function reloadFn(obj, prop, newFn) {
    var fn = obj[prop];
    obj[prop] = function () {
        if (newFn.length == arguments.length) {
            return newFn.apply(this, arguments);
        } else {
            if (isFunc(fn)) {
                return fn.apply(this, arguments);
            }
        }
    }
}

function isFunc(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
}

reloadFn(topClass, 'fn', function () {
    document.getElementById('output').innerHTML = '0 arguments';
});

reloadFn(topClass, 'fn', function (a) {
    document.getElementById('output').innerHTML = '1 arguments';
});

reloadFn(topClass, 'fn', function (a, b) {
    document.getElementById('output').innerHTML = '2 arguments';
});
setTimeout(topClass['fn'](), 9999999999999999);
// setTimeout(topClass['fn'](1), 100000000);
// setTimeout(topClass['fn'](1, 2), 100000000);