// question:- How do you compare that two objects in JavaScript are identical (equal)?
// approach:-
// To ensure both objects are identical (equal), follow these steps:
// (1) check if either object1 or object2 is not of type 'object' or if either is null. If either condition is true, return false.
//  this is important because non-object types (like numbers, strings, etc.) or null cannot be compared as objects.
// (2) extract all keys of object1 and object2 using Object.keys(), which returns an array of keys for each object.
// (3) compare the length of the keys array for both objects. If they have a different number of keys, return false.
// (4) iterate through the keys of object1 and compare each key with the corresponding key in object2. If the keys are not in the same order, return false.
// (5) for each key, check if the values associated with that key in both objects are identical. If any value is different, return false.
// (6) if all checks pass, return true, indicating that the objects are identical.

const obj1 = { name: 'Alice', age: 25, city: 'New York' };
const obj2 = { name: 'Alice', age: 25, city: 'New York' };
const obj3 = { city: 'New York', age: 25, name: 'Alice' };

console.log(objectsEqual(obj1,obj2));
console.log(objectsEqual(obj2,obj3));

function objectsEqual(object1,object2){
  if(typeof object1 !== 'object' || typeof object2 !== 'object' || object1 === null || object2 === null){
    return false;
  }
  
  // extract all keys of object1 and object2 and it return all keys of object1 and object2 in array format.
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  
  if(key1.length !== key2.length){
    return false;
  }
  
  for(let i=0;i<key1.length;i++){
    if(key1[i] !== key2[i]){
      return false;
    }
  }
  
  for(let i=0;i<key1.length;i++){
    let key = key1[i];
    if(object1[key] !== object2[key]){
      return false;
    }
  }
  return true;
}