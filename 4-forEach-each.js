function displayName(name) {
    console.log(name);
}

const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

_ = {
    each(collection, callback) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                callback(collection[i], i, collection);
            }
        } else {
            for (const collectionKey in collection) {
                callback(collection[collectionKey], collectionKey, collection);
            }
        }
    },
};

// _.each
_.each(suspects, displayName);

// .forEach
suspects.forEach(displayName);
