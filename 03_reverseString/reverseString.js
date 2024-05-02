const reverseString = function(string) {
    let strLength = string.length;
    let newStr = "";
    for (strLength--; strLength >= 0; strLength--) {
        newStr += string[strLength];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
