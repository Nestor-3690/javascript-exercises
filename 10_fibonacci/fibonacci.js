const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    let fibonacci = [0, 1, 1];
    for (let i = 3; i <= number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    };
    return fibonacci[number];

};

// Do not edit below this line
module.exports = fibonacci;
