let search = document.getElementById('search-books');
let bookList = document.getElementById('book-list');

console.log(search, bookList);

Array.from(titles).forEach(function(title){
  console.log(title);
});