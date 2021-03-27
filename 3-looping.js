const game = {
    'suspects': [
        {
            name: 'Rusty',
            color: 'orange',
        },
        {
            name: 'Miss Scarlet',
            color: 'red',
        },
    ],
};

{
    console.log("for");
    for (let i = 0; i < game.suspects.length; i++) {
        displaySuspectInformation(game.suspects[i]);
    }
}

{
    console.log("\ndo...while");
    let i = 0;
    do {
        displaySuspectInformation(game.suspects[i]);
        i++;
    } while (i < game.suspects.length);
}

{
    console.log("\nwhile");
    let i = 0;
    while (i < game.suspects.length) {
        displaySuspectInformation(game.suspects[i]);
        i++;
    }
}

{
    console.log("\nfor...of");
    for (const suspect of game.suspects) {
        displaySuspectInformation(suspect);
    }
}

{
    console.log("\nforEach");
    game.suspects.forEach(suspect => displaySuspectInformation(suspect));
}

function displaySuspectInformation(suspect) {
    console.log('---');
    for (const key in suspect) {
        console.log(key + ': ' + suspect[key]);
    }
}

console.log("\nDestructuring color names");
const [{color: orange}, {color: red}] = game.suspects;
console.log(orange, red);
