const weapons = ['candlestick', 'lead pipe', 'revolver'];

/**
 * @param {string} item
 * @param {number} index
 * @param {string[]} list
 * @returns {string}
 */
const makeBroken = function (item, index, list) {
    return `broken ${item}`;
};

const _ = {
    /**
     * @param {string[]} list
     * @param {Function} callback
     * @returns {string[]}
     */
    map(list, callback) {
        const newList = [];

        for (let i = 0; i < list.length; i++) {
            newList.push(callback(list[i], i, list));
        }

        return newList;
    }
};

const brokenWeapons = _.map(weapons, makeBroken);
const evenMoreBrokenWeapons = brokenWeapons.map(makeBroken);

console.log(brokenWeapons);
console.log(evenMoreBrokenWeapons);
