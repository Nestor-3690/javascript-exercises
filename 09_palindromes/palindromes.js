const palindromes = function (string) {
    let array = string.split('');
    
    let lettersArray = []
    array.forEach((char) => {
        if (char.match(/^[a-zA-Z0-9]+$/) !== null) {
            lettersArray.push(char);
        }
    })
    lettersArray.reverse();

    let getLettersString = string.split('');
    let lettersString = []
    getLettersString.forEach((char) => {
        if (char.match(/^[a-zA-Z0-9]+$/) !== null) {
            lettersString.push(char);
        }
    })

    if (lettersString.join('').toLowerCase() === lettersArray.join('').toLowerCase()) {
        return true;
    } return false;
};

// Do not edit below this line
module.exports = palindromes;
