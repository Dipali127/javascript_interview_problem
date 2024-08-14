// question:- write a function that takes an array of integers and returns the maximum product that can be obtained
// approach: brute-force approach.
// initialize a variable 'maxproduct' to store the maximum product found, starting with a very small number (e.g., -infinity).
// use three nested loops to consider each possible combination of three distinct numbers in the array.
// for each combination, calculate the product of the three numbers and update 'maxproduct' if this product is greater.
// after checking all combinations, return 'maxproduct' which contains the maximum product found.
// TC: O(N^3), as use of three nested loop which will iterate through the array.
// SC: O(1), as here is no additional space used.

let array = [1,2,3,4,5,6,7,8];
console.log(maximumProduct(array))
function maximumProduct(array){
  let maxProduct = -Infinity;
 for(let i=0;i<array.length-2;i++){
   for(let j=i+1;j<array.length-1;j++){
     for(let k=j+1;k<array.length;k++){
       let mul = array[i] * array[j] * array[k];
       maxProduct = Math.max(maxProduct, mul);
     }
   }
 }
// check if the array length is less than three. if it is, return 0 as there aren't enough elements to form a product of three numbers.
// sort the array in ascending order to access the largest numbers easily.
// return the product of the three largest numbers, which will be the last three elements in the sorted array.
// TC: O(NLOGN), to sort the array.
// SC: O(1),as no additional space is used. 

let array = [1,2,3,4,5,6,7,8];
console.log(maximumProduct(array))
function maximumProduct(array){
  if(array.length<3){
    return 0;
  }
  array.sort((a,b) => a-b)
 return array[array.length-1] * array[array.length-2] * array[array.length-3];
}