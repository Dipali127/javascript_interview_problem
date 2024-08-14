// question:- write a function to reverse each word of string
// Leetcode (Problem_Number:- 151)

// brute force approach:
// approach:
// convert the given string into an array using the split method.
// initialize an empty string 'result' to store the reversed words of the string.
// iterate from the end of the array to the beginning of the array.
// while iterating through the array, if the current element is an empty string (i.e., a result of multiple spaces in the original string), skip it.
// if the current element is a word, add it to the 'result' string followed by a space.
// after the loop completes, trim any leading and trailing spaces from the 'result' string and return the trimmed string.
// Note: 'trailing spaces' means removing spaces from the beginning and end of the string.
// TC: O(N),Explanation:
// O(N): to iterate through the given string to convert it into an array.
// O(N): to iterate through the array of words to build the result string.
// overall TC: O(N) + O(N) = O(2N) = O(N).
// SC: O(N), Explanation:
// O(N): to create a new array that contains all the words (and empty strings for multiple spaces).
// O(N): the result string accumulates words with a space in between. in the worst case, the length of the result string is proportional to the length of the input string.
// overall, SC: O(N) + O(N) = O(2N) = O(N).

var reverseWords = function(s) {
   s = s.split(" ");
   let result = "";
   for (let i = s.length - 1; i >= 0; i--) {
       if (s[i] === '') {
           continue;
       } else {
           result += s[i] + ' ';
       }
   }

   return result.trim();
};

// optimal approach: using two pointers
// approach:
// convert the given string into an array using the split method.
// apply the filter method on the array of words after converting the string into an array of words to remove empty strings.
// use two pointers 'i' and 'j' to reverse the array by swapping the word at index 'i' with the word at index 'j' until the pointer 'i' is less than pointer 'j'.
// after reversing the array of words, join the array back into a string as we have to return the reversed string.
// TC: O(N), Explanation:
//  O(N): to iterate through the given string to convert it into an array.
//  O(N): to iterate through the array to remove empty strings using the filter method.
//  O(N): to reverse the array using the swapping method.
//  O(N): to join back the array of reversed words into a string using the join method.
// overall, TC: O(N) + O(N) + O(N) + O(N) = O(4N) = O(N).
// SC: O(N), to create a new array that contains all the words (and excludes empty strings).

var reverseWords = function(s) {
    s = s.split(" ").filter(word => word !== "");
    let i = 0, j = s.length-1;
    while(i < j){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s.join(" ");
};
