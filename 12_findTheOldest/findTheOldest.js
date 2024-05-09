const findTheOldest = function(array) {
    let oldest = 0;
    let index = -1;
    const newArray = array.map((item, itemIndex) => {
        if (item.yearOfDeath) {
            if (item.yearOfDeath - item.yearOfBirth > oldest) {
                oldest = item.yearOfDeath - item.yearOfBirth;
                index = itemIndex;
            }
        } else {
            item.yearOfDeath = new Date().getFullYear();
            if (item.yearOfDeath - item.yearOfBirth > oldest) {
                oldest = item.yearOfDeath - item.yearOfBirth;
                index = itemIndex;
            }
        } return item;
    })
    return newArray[index];
};

// Do not edit below this line
module.exports = findTheOldest;
