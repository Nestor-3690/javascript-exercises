const removeFromArray = function(array) {
    const values = [];
    let counter = 0;
    for (let i = 1; i < arguments.length; i++) {
        values[counter] = arguments[i];
        counter++;
    }
    for (value of values) {
        for (let i = 0; i < array.length; i++) {
            if (value === array[i]) {
                const index = array.indexOf(array[i]);
                array.splice(index, 1);
                i--;
            }
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
