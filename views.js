let delay = 1; // the delay inbetween adds
let multiplier = 1; // increase to make faster
let startCount = 2000; // starting sub count
let endCount = 10000; // end sub count

const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() {
    var i;
    var output;
    for (i = 0; i < (endCount - startCount + 1); i = i + (123 * multiplier)) {
        output = (i + startCount);
        document.getElementsByClassName("owner-sub-count")[0].innerHTML = numberWithCommas(output) + ' subscribers';
        await timer(delay); // then the created Promise can be awaited
    }
    while (output != endCount) {
        output++;
        document.getElementsByClassName("owner-sub-count")[0].innerHTML = numberWithCommas(output) + ' subscribers';
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function isOdd(num) {
    return num % 2;
}

load();