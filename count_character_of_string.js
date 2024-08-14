// question: write a function to find the number of characters in a string
// approach:
// initialize a count variable to 0.
// iterate through the given string, character by character, including spaces.
// increment the count variable for each character encountered.
// return the count variable once all characters of the given string have been processed.
// TC: O(N), where N is the length of the string. this is because we iterate through the string once.
// SC: O(1), as no additional space is used apart from the count variable.


let string = "Hello world";
console.log(countChars(string))
function countChars(string){
	let count = 0;
	for(let i = 0; i<string.length; i++){
		count++;
	}

	return count;
}


