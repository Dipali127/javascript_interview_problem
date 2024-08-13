// question:- write a javascript program that takes an array of objects and returns an object containing the frequency of
// each property across all objects.
// approach:-
// take an empty object 'frequency' to store the count of each key across all objects of data array.
// iterate through the array of objects, and for each object, iterate through each key of the current object.
// increment the count of each key in the 'frequency' object if it exists; otherwise, initialize it to 1.
// once all key's frequencies are stored, return the 'frequency' object.
// TC: O(N * M), where N is the number of objects in the array, and M is the average number of properties in each object.
// SC: O(K), where K is the number of unique keys across all objects in the data array.

const data = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', city: 'Los Angeles' },
    { name: 'Dave', age: 22, country: 'USA' }
];

console.log(frequencyCount(data))
function frequencyCount(data){
  let frequency = {};
  data.forEach((object) => {
    Object.keys(object).forEach((key) => {
      if(frequency[key]){
        frequency[key]++;
      }else{
        frequency[key] = 1;
      }
    })
  })
  
  return frequency;
}