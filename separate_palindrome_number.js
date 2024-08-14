// question:- write a javascript function to separate palindrome numbers from an array.
// approach:-
// take an empty array to store all palindrome numbers from an array.
// traverse through the given array 'numbers' to check if a number is a palindrome or not using the function isPalindrome,
// where the current iterated number of the given 'numbers' array is passed.
// the function 'isPalindrome' will first convert the number to a string so that we can reverse the string easily,
// and then join the reversed string to check if the original string is equal to the reversed string. If it is, 
// add that number to the palindromeArray.
// TC: O(N * M), Explanation:-
// O(N):- to iterate through the given array (where N is the number of elements in the array).
// O(M):- to reverse and compare the string representation of each number (where M is the average number of digits in the numbers).
// Overall, TC: O(N * M), as the string reversal and comparison operation takes O(M) time and is done for each of the N elements.
// SC: O(N + M), Explanation:-
// O(N):- to store all palindrome numbers in the palindrome array. In the worst case, all numbers could be palindromes.
// O(M):- to store the string representation of the number and its reversed version (temporary space for the string operations).
// Overall, SC: O(N + M).
const numbers = [121, 123, 454, 567, 676, 789];
console.log(separatePalindromeNumber(numbers));
function separatePalindromeNumber(numbers){
    let palindromeArray = [];
    numbers.forEach((num) => {
        if(isPalindrome(num)){
            palindromeArray.push(num);
        }
    })
    
    return palindromeArray;
}

function isPalindrome(number){
    let str = number.toString();
    return str === str.split('').reverse().join('');
}