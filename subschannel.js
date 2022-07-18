let delay = 1; // the delay inbetween adds
let multiplier = 7; // increase to make faster
let startCount = 2000; // starting sub count
let endCount = 10000; // end sub count

const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() {
    var output = startCount;
    while (output < endCount) {
        output = output + multiplier;
        document.getElementById("subscriber-count").innerHTML = numberWithCommas(output) + ' subscribers';
        await timer(delay)
    }
    output = endCount;
    document.getElementById("subscriber-count").innerHTML = numberWithCommas(output) + ' subscribers';
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function isOdd(num) {
    return num % 2;
}

load();