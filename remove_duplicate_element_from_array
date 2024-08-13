// question:- write a javascript program to remove duplicate elements from an array in different ways. 
// approach-1: brute force appraoch
// take a temporary array to store unique elements of the given array.
// iterate through the array and check if the current iterated element of the array doesn't exist in the result array.
// if the element does not exist in the result array (i.e., indexOf() returns -1), push it into the result array.
// after processing all elements, return the result array containing only unique elements.
// TC: O(N^2), Explanation:
// O(N^2): to iterate through the array and for each element, check its existence in the result array using indexOf().
// SC: O(N), Explanation:
// O(N): to store all unique elements of the array. In the worst case, when all elements are unique, the result array will have a size of N.
let array = [1, 2, 2, 3, 4, 4, 5,9];
console.log(removeDuplicate(array))
function removeDuplicate(array){
  let result = [];
  for(let i=0;i<array.length;i++){
    if(result.indexOf(array[i]) === -1){
      result.push(array[i]);
    }
  }
  
  return result;
}
// approach-2: optimal approach 
// take a set which doesn't allow duplicate in it.
// return set of unique values by converting it into array.
// TC: O(N), Explanation:-
// O(N):- to store all values in set
// O(N):- to convert set object into array using `Array.from`.
// overall, TC:- O(N) + O(N) = O(2N) = O(N)
// SC:- O(N), Explanation:-
// O(N):- to store all values of array into set.
// O(N):- to store all values of set into array by creating new array.
// overall, SC: O(N) +  O(N) = O(2N) = O(N).

let array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicate(array))
function removeDuplicate(array){
  return Array.from(new Set(array))
}

