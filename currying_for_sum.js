// question:- write a program to implement currying which gives the sum of three numbers.
// currying function working:-
//  curryingSum(x) :- This function takes the first argument x and returns a new function that takes the second argument y.
// function(y) :- This returned function takes the second argument y and returns another function that takes the third argument z.
// function(z) :- This function take the third argument z and returns the computed sum `x + y + z`.
 
console.log(curryingSum(2)(3)(4))
function curryingSum(x){
   return function(y){
    return function(z){
        return x + y + z;
    }
   }
}
