const sumAll = function(numberOne, numberTwo) {
    if (numberOne < 0 || numberTwo < 0 || typeof numberOne !== "number" || typeof numberTwo !== "number") return "ERROR";
    let sum = 0;
    let biggestNumber, lowestNumber;
    if (numberOne < numberTwo) {
        biggestNumber = numberTwo;
        lowestNumber = numberOne
    } else {
        biggestNumber = numberOne;
        lowestNumber = numberTwo;
    }
    for (let i = lowestNumber; i <= biggestNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
