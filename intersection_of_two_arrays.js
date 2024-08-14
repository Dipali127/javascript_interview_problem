// question:- write a function to find the intersection of two arrays.
// brute force approach:-
// initialize an empty result array to store common elements.
// iterate through the first array and for each element, check if it exists in the second array using the `includes`
// methods. also check if the element is not already included in the result array to avoid duplicates.
// if both conditions are met, add the element to the result array.
// return the result array containing the intersection of both arrays.
// TC:- o(N^2), explanation:-
// O(N): to iterate through the first array.
// O(N): to check for each element's existence in the second array using `includes`, which takes O(M) time for each check.
// overall, TC:- o(N*N) O(N^2), which can be less efficient for large arrays compared to the set-based approach.
// SC:- O(N), to store the result array which contains the intersection of both arrays, in the worst case when all elements of the first array are in the second array.

let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7];

console.log(intersection(array1, array2));

function intersection(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) && !result.includes(array1[i])) {
      result.push(array1[i]);
    }
  }

  return result;
}


// optimal approach:-
// take a set and store all values of array in it. 
// this allows for efficient average time complexity checks for the presence of elements.
// use the filter method on the second array to keep only those elements that are present in the set. 
// the filter method iterates through the second array and checks if each element is in the set.
// this ensures that only elements present in both arrays are retained in the result.
// TC:- O(N +M), Explanation:-
// O(N):- to store all values of the first array in the set.
// O(N):- to iterate through the second array and filter elements based on the set.
// overall, TC:- O(N) + O(N) = O(2N) = O(N).
// SC:- O(N + M), Explanation:-
// O(N):- to store all values of the first array in the set.
// O(N):- to store the result array which contains the intersection of both arrays.
// overall, SC:- O(N) + O(N) = O(2N) = O(N). 

let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7];
console.log(intersection(array1,array2))
function intersection(array1,array2){
  let set = new Set(array1);
  let result = array2.filter((element) => set.has(element));
  return result;
}