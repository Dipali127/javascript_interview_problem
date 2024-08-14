// question:- write a function to flatten an array.
// approach:-
// initialize an empty array 'result' to store all elements of array after flatten it.
// loops through each element of the input array and check:-
// If the element is not an array, it's directly added to the result array.
// If the element is an array, the function calls itself recursively on that array to flatten it
// and the returned flattened array is concatenated with the result.
// Once all elements are processed, the fully flattened result array is returned.
// TC:- O(N), where N is the total number of elements in the array, to recursively flatten the array.
// SC:- O(N), to store the flattened array in the result array.
let array = [[1,2,3],[4,5],[6,[7,8]]];
console.log(flattenArray(array))
function flattenArray(array){
    let result = [];
    array.forEach((iterator) => {
      if(Array.isArray(iterator)){
        result = result.concat(flattenArray(iterator))
      }else{
        result.push(iterator);
      }
    })
    
    return result;
  }

  // short solution of above solution:-
  // the below solution flatten the array recusively up to any depth.
  // TC:- O(N), where N is the total number of elements in the array, to recursively flatten the array.
  // SC:- O(N), to store the flattened array. 
  function flattenArray(array){
    return array.flat(Infinity);
  }