// question:- Create your own string method: `repeatify`(t)
// brute force approach:-
// approach:
// start by initializing an empty string `repeatString` to store the repeated sequence of the given string.
// handle the edge case where `times` is negative by immediately returning the empty string, as repeating a string a negative number of times is not valid.
// use a while loop to repeatedly append the given string to `repeatString` until `t` reaches 0.
// each iteration of the loop reduces `times` by 1.
// once the loop finishes, return the `repeatString` variable, which contains the given string repeated `times` number of times.
// TC: O(times), as we append the given string `t` times.
// SC : O(times * len(string)), as the space required for `repeatString` grows with the length of the given string and the number of repetitions.

let string = "*";
console.log(repeat(string, 3))
function repeat(string,t){
    let repeatString = "";
    if(t<0){
        return repeatString;
    }
    while(t>0){
        repeatString+=string;
        t--;
    }
    
    return repeatString;
}

// optimal approach:-
// approach:
// instead of taking any extra variable to store the repeated string, use the `repeat` method to repeat the given string `t` times and return it.
// if `t` is negative, return an empty string.
// TC: O(t), as we use the `repeat` method to repeat the given string `t` times.
// SC: O(1), as we do not use any extra space for storing the repeated string.

let string = "*";
console.log(repeat(string, 3))
function repeat(string,t){
    if(t>0){return string.repeat(t);
}else{
    return "";
}
}