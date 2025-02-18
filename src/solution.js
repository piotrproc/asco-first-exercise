const ITEM_REGEX = /^item (\d+)$/;

const hasNameProperty = (elem) => {
    return typeof elem.name !== "undefined";
}

const getRegexFromElem = (elem) => {
    return elem.name.match(ITEM_REGEX);
}

const hasStrictNameValue = (elem) => {
    const hasStrictNameRegex = getRegexFromElem(elem);

    return hasStrictNameRegex ? hasStrictNameRegex.length > 1 : false;
}

const getItemNumber = (elem) => {
    return Number(getRegexFromElem(elem)[1]);
}

const getItemsMaxNumber = (items) => {
    let max = 0;

    items
        .filter(hasNameProperty)
        .filter(hasStrictNameValue)
        .forEach((elem) => {
            const itemNumber = getItemNumber(elem);

            if (max < itemNumber) {
                max = itemNumber;
            }
        });

    return max;
};

const items = [
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 11'},
    {name: 'item 3'},
    {name: 'item 10'}
];

console.log(getItemsMaxNumber(items));