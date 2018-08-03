/**
 * Created by hardy on 2018/8/3.
 */
function nondeterminacyFunc() {
    // document.getElementById('output').html('no arguments');
    // document.getElementById('output').innerHTML = 'no arguments';
    switch (arguments.length) {
        case 1:
            document.getElementById('output').innerHTML = '1 arguments';
            break;
        case 2:
            document.getElementById('output').innerHTML = '2 arguments';
            break;
        default:
            document.getElementById('output').innerHTML = 'nondeterminacy arguments';

    }
}

function reloadMethod() {
    
}

nondeterminacyFunc(1);
