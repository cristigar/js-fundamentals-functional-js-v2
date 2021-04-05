const from = arr => {
    const result = [];
    for (const element of arr) {
        result.push(element);
    }

    return result;

    // Alternative 1
    // return Array.prototype.slice.call(arr);

    // Alternative 2, ES6
    // return Array.from(arr);
};

function testFunction() {
    console.log(Array.isArray(from(arguments)));
}

testFunction(1, 2, 3, '4', 'five');
