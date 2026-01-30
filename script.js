// Book constructor with title, author, pages, read status
// Array to store all books
// Display books on the page (table or cards)
// Form to add new books
// Button to remove books
// Button to toggle read status

const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info() {
    return `${this.id} ${this.title} ${this.author} ${this.pages} ${this.read}`;
  };
}



const coolBook = new Book("Cool Title", "Cool Author", "10", true);

console.log(coolBook.info());
