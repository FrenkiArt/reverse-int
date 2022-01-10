module.exports = function reverse(n) {
    let strN;

    if (n < 0) {
        strN = String(n * -1);
        return Number(strN.split("").reverse().join(""));
    } else {
        strN = String(n);
        return Number(strN.split("").reverse().join(""));
    }
};
