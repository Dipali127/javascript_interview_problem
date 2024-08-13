// question:- Collect books from an array of objects and return a collection of books as an array.
// approach:-
// initialize an empty array 'bookCollection' to store all the books collected from the given array of objects.
// iterate through each object in the 'data' array.
// for each object, check if it has a 'books' property and whether 'books' is an array.
// if the 'books' property exists and is an array, concatenate its elements to 'bookCollection'.
// once all objects have been processed, return the 'bookCollection' array containing all the books.
// TC: O(N*M), where 'N' is the number of objects in the data array, and 'M' is the average number of books in each object.
// so, to concat new books from object.books with original bookCollection array will take O(N) time complexity as concat will create new 
// array of object.books and combine them with original bookCollection array.
// SC: O(K), where 'K' is the total number of books collected in the 'bookCollection' array.

const data = [
  { name: 'Alice', age: 25, books: ['Book A', 'Book B'] },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', books: ['Book C'] },
  { name: 'Dave', age: 22, books: ['Book D', 'Book E', 'Book F'] }
];

console.log(collectBooks(data));
function collectBooks(data){
  let bookCollection = [];
  data.forEach((object) => {
    if(object.books && Array.isArray(object.books)){
      bookCollection = bookCollection.concat(object.books);
    }
  })
  
  return bookCollection;
}