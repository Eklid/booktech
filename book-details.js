//Nje vektor me emra librash
//Nje vektor me emra fotosh
let booksNames = [
  "The name of the wind",
  "The Thousand Eyes",
  "The Ruin of Kings",
];

let photoNames = [
  "books/the name of the wind.jpg",
  "books/the thousand eyes.jpg",
  "books/the ruin of kings.jpg",
];
let numberOfBooks = 3;

var url = new URL(window.location.href);
var bookname = url.searchParams.get("bookname");

let counter;
let position = 0;
for (counter = 0; counter < numberOfBooks; counter = counter + 1) {
  if (bookname == booksNames[position]) {
    console.log("found");
    let bookTitleElement = document.getElementById("book-title");
    bookTitleElement.innerText = booksNames[position];
    let bookImageElement = document.getElementById("book-image");
    bookImageElement.src = photoNames[position];
    //Change description and other books details.-
  }
  position = position + 1;
}
