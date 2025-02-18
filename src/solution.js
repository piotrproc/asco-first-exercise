const ITEM_REGEX = /^item (\d+)$/;

const hasNameProperty = (elem) => {
    return typeof elem.name !== "undefined";
}

const hasStrictNameValue = (elem) => {
    const hasStrictNameRegex = elem.name.match(ITEM_REGEX);

    return hasStrictNameRegex ? hasStrictNameRegex.length > 1 : false;
}

const getItemNumber = (name) => {
    return Number(ITEM_REGEX.exec(name)[1]);
}

const getItemsMaxNumber = (items) => {
    let max = 0;

    items
        .filter(hasNameProperty)
        .filter(hasStrictNameValue)
        .forEach((elem) => {
            const itemNumber = getItemNumber(elem.name);

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