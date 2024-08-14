// write a function to return the first non-repeating character in a string. If not available, return -1.
// approach:
// take a map to store the frequency of each character in the string.
// convert the given string into an array of characters to iterate through them.
// store each character's frequency in the map by checking if the current iterated character exists in the map.
// if the character exists, increment its frequency by 1. If it does not exist, set its frequency to 1 in the map.
// iterate through the map entries to find the first character with a frequency of 1.
// return the first non-repeating character found. If no such character exists, return -1.
// TC: O(N), Explanation:-
// O(N):- to convert the string into array of characters.
// O(N):- to iterate through the string and update the frequency count in the map.
// O(N):- to iterate through the map to find the first non-repeating character..
// overall TC: O(N) + O(N) + O(N) = O(3N) = O(N).
// SC:- O(N), due to the space used by the map to store frequencies of characters.

let string = "ddppeeaak";
console.log(firstNonrepeatChar(string));
function firstNonrepeatChar(string){
  let map = new Map();
  string = string.split('')
  for(let i=0;i<string.length;i++){
    if(map.has(string[i])){
      map.set(string[i], map.get(string[i])+1);
    }else{
      map.set(string[i],1);
    }
  }
  
 for(let [key,value] of map.entries()){
   if(value === 1){
     return key;
   }
 }
 
 return -1;
}