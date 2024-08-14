// question:- write a javascript program to move all zeros to the end of the array while maintaining the relative order of the non-zero elements
// approach:-
// initialize a pointer 'nonZeroIndex' with 0. this pointer will track the position where the next non-zero element should be placed.
// iterate through the given array and move all non-zero elements to the front by checking if the current
// iterated element is not equal to 0. if it's not zero, place it at the 'nonZeroIndex' and increment 'nonZeroIndex'.
// after placing all non-zero elements, fill the remaining positions in the array with zeros, starting from 'nonZeroIndex'.
// finally, return the modified array.

let array = [0, 1, 0, 3, 12];
console.log(moveZeroToEnd(array));

function moveZeroToEnd(array){
  let nonZeroIndex = 0;
  
  for(let i = 0; i < array.length; i++){
    if(array[i] !== 0){
      array[nonZeroIndex++] = array[i];
    }
  }
  
  for(let i = nonZeroIndex; i < array.length; i++){
    array[i] = 0;
  }
  
  return array;
}
