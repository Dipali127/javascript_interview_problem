// question:- write a javascript function to return the missing number from an array.
// appraoch:-
// as we have given numbers in a sequence from 1 to n with missing number in between.
// so, first calculate sum of all numbers from 1 to n (including missing number) using the sum formula: n*(n+1)/2.
// calculate the sum of numbers in the given array. 
// once, you have expectedSum and actualSum, find missing number which will be the difference between the expected sum and the actual sum.
// TC: O(N),where 'N' is the length of the array, as we iterate through the array to get the sum of all numbers.
// SC: O(1), as there is no additional space used.

let array = [1,2,4,5];
console.log(missing(array))
function missing(array){
    let n = array.length+1;
  const expectedSum = (n*(n+1))/2;
  let actualSum = 0;
  for(let i=0;i<array.length;i++){
      actualSum+= array[i];
  }
   
   return expectedSum - actualSum;
}
