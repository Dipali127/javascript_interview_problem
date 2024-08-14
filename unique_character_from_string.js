// question:- write a function that return unique characters from a string.
// approach:-
// convert the string into array of character to iterate through it.
// take an empty object freq to store all character's frequency.
// iterate through array of characters and while iterating through it, check if current iterated character exist
// if it exist, increment its count and if the character does not exist, initialize its count to 1.
// once, iterate through given string, return result array which contain unique characters.
// TC: O(N), Explanation:-
// O(N) - to convert the string into an array of characters.
// O(N) - to iterate through each character of the string to store its count in the 'freq' object.
// Overall Time Complexity: O(N) + O(N) = O(2N) = O(N).
// SC: O(N), Explanation:-
// O(N) - to store the frequency of each character in the 'freq' object.
// O(N) - to store unique characters in the 'result' array. In the worst case, all characters are unique.
// Overall Space Complexity: O(N) + O(N) = O(2N) = O(N).

  
let string = "engineer"
console.log(uniqueCharacter(string))
function uniqueCharacter(string){
  string = string.split("");
  let freq = {};
  string.forEach((char) => {
    if(freq[char]){
      freq[char]++;
    }else{
      freq[char] = 1;
    }
  })
  
  let result = [];
  for(let key in freq){
    if(freq[key] === 1){
      result.push(key)
    }
  }
  return result;
}