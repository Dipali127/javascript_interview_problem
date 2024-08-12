// question:- write a javascript program to group items of an array by category
// approach:-
// iterate through items array using forEach.
// for each item in the array, destructure it to extract the category and value properties.
// check if the category already exists as a key in the groupItems object. 
// if it exists, push the value to the array associated with that category.
// if it does not exist, initialize a new array with the value as its first element.
// after iterating through all items, return the groupItems object, which contains the items grouped by category.
// TC: O(N), to iterate through the items array.
// SC: O(N), to use an object to store items an array by its category.
const items = [
    { category: 'fruits', value: 'apple' },
    { category: 'fruits', value: 'banana' },
    { category: 'vegetables', value: 'carrot' },
    { category: 'fruits', value: 'orange' },
    { category: 'vegetables', value: 'broccoli' }
];

console.log(groupItemsbyCategory(items));

function groupItemsbyCategory(items) {
    const groupItems = {};

    items.forEach((item) => {
        const { category, value } = item;
        
        // Check if the category already exists in the groupItems object
        if (groupItems[category]) {
            groupItems[category].push(value);
        } else {
            // If the category does not exist, initialize it with an empty array
            groupItems[category] = [value];
        }
    });

    return groupItems;
}
