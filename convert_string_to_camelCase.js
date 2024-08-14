// question:- write a javascript program that converts a string to camelCase.
// approach:-
// convert the given string into an array of words.
// since we have to convert the whole string into camelCase, convert the first word of the array 'arr' to lowercase.
// iterate through the array 'arr' and convert the first character of the current iterated word to uppercase
// and convert the remaining characters of the word to lowercase using the slice method, 
// which extracts the substring from the second character onward.
// once the array 'arr' is converted into camelCase, join it back into a string and return.
// TC: O(N), Explanation:
// O(N) - to convert the string into an array of words (split method).
// O(N) - to iterate through the array 'arr' to convert each word into camelCase.
// O(N) - to join the array 'arr' back into a string.
// Overall, TC: O(N) + O(N) + O(N) = O(3N) = O(N).
// SC: O(N) - to convert the string into an array, which creates a new array of length equal to the string.


let str = 'Click the button to convert to camelCase';
console.log(camelCase(str))
function camelCase(str){
    let arr = str.split(' ');
    arr[0] = arr[0].toLowerCase();
    for(let i=1;i<arr.length;i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    } 
    return arr.join('');
}