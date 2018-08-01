/**
 * Created by CCC on 2018/8/1.
 */
shoeMark.list = {};
shoeMark.listen = function (key, fn) {
    if (!this.list[key]) {
        this.list[key] = [];
    }
    this.list[key].push(fn);
};
shoeMark.trigger = function () {
    // var key = Array.prototype.shift.call(arguments);
    var key = arguments[0];
    var listenHandlers = this.list[key];
    if (!listenHandlers) {
        return;
    }
    for (var i = 0; i < listenHandlers.length; i++) {
        var fn = listenHandlers[i];
        fn.apply(this, arguments);
    }
};

shoeMark.list = {};


shoeMark.listen('red', function (color, size) {
    var shoe = {'id': 0, 'color': color, 'size': size};
    console.log(shoe);
    this.sell.push(shoe);
});

shoeMark.listen('black', function () {
    var shoe = {'id': 1, 'color': arguments[0], 'size': arguments[1]};
    console.log(shoe);
    this.sell.push(shoe);
});


document.getElementById('submit').onclick = function () {
    shoeMark.trigger('red', '41');
    shoeMark.trigger('black', '41');
    document.getElementById('screen').innerHTML = JSON.stringify(shoeMark.sell);
};