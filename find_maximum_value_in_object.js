// question:- write a function to find maximum value from an object.
// approach:
// take a max variable intialised with zero value.
// iterate through the object to find the maximum value.
// TC: O(N), to iterate through the object to find the maximum value from an object.
// SC: O(1), as no additional space used apart from max variable.
const data = {
    a: 1,
    b: 3,  
    c: 5,
    d: 2
};

console.log(findMaxValue(data)); 
function findMaxValue(data){
    let max = 0;
    for(let key in data){
        if(data[key] > max){
            max = data[key];
        }
    }
    
    return max;
}