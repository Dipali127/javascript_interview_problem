// question:- write a function to remove  all occurrence of specified characters from the string.
// brute force approach:-
// approach:-
// convert the string into array of characters.
// iterate through the array's of characters and check that if currently iterated character is a removed character,
// if it is then remove that character using splice method which will modify the original array.
// after removing all occurrence of the removed character from the given string join back array's of character into string.
// TC: O(N^2), Explanation:
// O(N) :- to convert the string into array of characters.
// O(N^2) :- to iterates over each character in the array of characters and removed occurrence of specified character
// from the string using splice method which modifies the array and shifts elements after the removed element.
// O(N):- to join back the array of character into string.
// overall, TC: O(N^2) + O(N) + O(N) = O(N^2), as we consider high order time complexity.
// SC: O(N), to convert the string into an array of characters
let str = "Geeks-for-Geeks";
let charToRemove = "-";
console.log(removeSpecifiedChar(str, charToRemove));
function removeSpecifiedChar(str,charToRemove){
    str = str.split('');
    for(let i = 0; i<str.length;i++){
        if(str[i] === charToRemove){
            str.splice(i,1);
        }
    }
    
    return str.join("");
}

// optimal approach:-
// approach:-
// convert the string into array of characters.
// filter out the removed character from the array of character.
// Note:- The filter method takes a function as a parameter, which performs the specified operation on the given 
// array and creates a new array.
// The filter method iterates through all the characters of the character array and checks if the current iterated 
// character is equal to the specified character to be removed. If it is, it does not add that character to the new array.
// and once iterate through all character of character array then join back new arra into string and returned.
// TC: O(N), Explantion:-
// O(N):- to convert the string into array of characters.
// O(N):- to filter out specified character from given string using filter method.
// O(N):- to join back the array of characters into string.
// overall, TC: O(N) + O(N) + O(N) =  O(3N) = O(N).
// SC: O(N), Explanation:-
// O(N):- to convert string into array of character take space equals to length of string.
// O(N):- to create new array using filter method to only push characters not equal to removed character.
// overall SC:- O(N) + O(N) = O(2N) = O(N).

let str = "Geeks-for-Geeks";
let charToRemove = "-";
console.log(removeSpecifiedChar(str, charToRemove));
function removeSpecifiedChar(str,charToRemove){
    str = str.split('');
   let newarr = str.filter((itrt) => itrt !== charToRemove)
    return newarr.join("");
}
