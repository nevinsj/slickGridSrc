/**
 * Created by CCC on 2018/8/1.
 */
var anotherShoeMarket = {};
for (var i in shoeMark) {
    anotherShoeMarket[i] = shoeMark[i];
}

anotherShoeMarket.list = {};
anotherShoeMarket.sell = [];


anotherShoeMarket.listen('red', function (color, size) {
    var shoe = {'id': 0, 'size': color, 'size': size};
    console.log(shoe);
    this.sell.push(shoe);
});

anotherShoeMarket.listen('black', function () {
    var shoe = {'id': 1, 'size': arguments[0], 'size': arguments[1]};
    console.log(shoe);
    this.sell.push(shoe);
});


document.getElementById('submit').onclick = function () {
    anotherShoeMarket.sell = [];
    anotherShoeMarket.trigger('red', '41');
    anotherShoeMarket.trigger('black', '41');
    document.getElementById('screen').innerHTML = JSON.stringify(anotherShoeMarket.sell);
};


