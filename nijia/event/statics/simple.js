var shoeMark = {};
shoeMark.list = [];
shoeMark.sell = [];

shoeMark.listen = function (fn) {
    this.list.push(fn);
};

shoeMark.trigger = function () {
    for (var i = 0; i < this.list.length; i++) {
        var fn = this.list[i];
        fn.apply(this, arguments);
    }
};

shoeMark.listen(function (color, size) {
    var shoe = {'id': 0, 'color': color, 'size': size};
    console.log(shoe);
    this.sell.push(shoe);
});

shoeMark.listen(function () {
    var shoe = {'id': 1, 'color': arguments[0], 'size': arguments[1]};
    console.log(shoe);
    this.sell.push(shoe);
});


document.getElementById('submit').onclick = function () {
    shoeMark.trigger('red', '41');
    shoeMark.trigger('black', '41');
    // document.getElementsByClassName('screen').innerHTML = JSON.stringify(shoeMark.sell);
    document.getElementById('screen').innerHTML = JSON.stringify(shoeMark.sell);
};
