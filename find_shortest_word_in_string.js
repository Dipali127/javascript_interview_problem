// question: write a function to find the shortest word in a list of strings.
// approach:
// convert the given string into an array of words using the `split` method.
// initialize two variables: `minLength` with a value of Infinity, and `shortWord`, which will store the shortest word.
// iterate through the array of words and check if the length of the current word is less than `minLength`.
// if it is, update `minLength` to the length of the current word and set `shortWord` to the current word.
// finally, return the `shortWord` which contains the shortest word in the given string.
// TC: O(N), Explanation:-
// O(N) to convert the string into an array of words using 'split' method.
// O(N) to iterate through the array of words to get the shortWord.
// overall, TC: O(N) + O(N) = O(2N) = O(N).
// SC: O(N), to store the array of words created by the `split` method.

let string = "woke up early person";
console.log(small(string))
function small(string){
    string = string.split(" ")
    let minLength = Infinity;
    let shortWord;
    for(let i = 0;i<string.length;i++){
        if(string[i].length<minLength){
            minLength = string[i].length;
            shortWord = string[i]
        }
    }
    return shortWord;
}

