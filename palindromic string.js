// question: write a function to check if a string is a palindrome, considering only alphanumeric characters and ignoring cases.
// approach:
// initialize an empty string to store only alphanumeric characters from the original string.
// convert all characters of the original string to lowercase to ensure the comparison is case-insensitive.
// iterate through the string and append only alphanumeric characters to the new string, excluding any special characters.
// reverse the original string 'str' and compare it with the original cleaned string to check for palindrome property.
// if both original and reverse string are palindrome, return true otherwise return false.
// TC: O(N), Explanation:-
// O(N):- to convert all characters of string into lower case.
// O(N):- to iterate through the string 'string' to append only alphanumeric characters to 'str'.
// O(N):- to reverse the cleaned string and compare it with the original cleaned string.
// overall TC:- O(N) + O(N) + O(N) = O(3N) = O(N).
// SC:- O(N), as 'str' stores the cleaned string which could be up to the length of the input string.

let string = "A man, a plan, a canal: Panama";
console.log(ispalindrome(string));
function ispalindrome(string){
  let str = "";
  string=string.toLowerCase();
 for(let i=0;i<string.length;i++){
  if((string[i] >= 'a' && string[i] <= 'z') || (string[i] >= '0' && string[i] <= '9')){
    str+= string[i]
  }
 }

 let reverseStr = str.split('').reverse().join('');
 return  str === reverseStr;
}