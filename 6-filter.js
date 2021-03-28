const _ = {
    /**
     * @param {number[]} list
     * @param {Function} callback
     */
    filter: function (list, callback) {
        const newList = [];

        for (let i = 0; i < list.length; i++) {
            if (callback(list[i], i, list)) {
                newList.push(list[i]);
            }
        }

        return newList;
    },
};

/**
 * @param number
 * @returns {boolean}
 */
const isOdd = function (number) {
    return number % 2 === 1;
};

const isEven = function (number) {
    return number % 2 === 0;
};

const numbers = [1,4,2,3,5,7,3,4,8];

const oddNumbers = _.filter(numbers, isOdd);
console.log(oddNumbers);

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
