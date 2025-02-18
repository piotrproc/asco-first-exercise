const itemRegex = /item (\d+)/g;
const itemNumberRegex = /(\d+)/g;

const hasNameProperty = (elem) => {
    return typeof elem.name !== "undefined";
}

const getItemsMaxNumber = (items) => {
    let max = 0;

    items.filter(elem => {
        return typeof elem.name !== "undefined";
    }).filter(elem => {
        return elem.name.match(itemRegex).length > 0;
    }).forEach((elem) => {
        const itemNumber = Number(elem.name.match(itemNumberRegex)[0]);

        if (max < itemNumber) {
            max = itemNumber;
        }
    });

    console.log("Hello World again 2!");
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