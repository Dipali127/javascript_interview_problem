// question:-  write a function which return the count of each character in a string.

let string = "sky is blue and sun is yellow in color";
console.log(countChar(string))
function countChar(string){
    let countCharacter = {}
    for(let i=0;i<string.length;i++){
        if(countCharacter[string[i]]){
            countCharacter[string[i]]++;
        }else{
            countCharacter[string[i]] = 1;
        }
    }
return countCharacter;
}