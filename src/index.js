module.exports = function reverse(n) {
    n = Math.abs(n);
    let arrow = String(n).split(''); 
    arrow = arrow.reverse();
    let newN = arrow.join('');
    return Number(newN);
}

