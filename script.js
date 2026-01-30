let myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

const bookshelf = document.getElementById("bookshelf");

function displayBooks() {
  bookshelf.innerHTML = "";
  myLibrary.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("book", book.read ? "read" : "unread");
    div.dataset.bookId = book.id;

    const h2 = document.createElement("h2");
    h2.textContent = book.title;

    const h3 = document.createElement("h3");
    h3.textContent = book.author;

    const span = document.createElement("span");
    span.textContent = `${book.pages} pages`;

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Read";
    toggleButton.addEventListener("click", () => {
      book.toggleRead();
      displayBooks();
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      myLibrary = myLibrary.filter((b) => b.id !== book.id);
      displayBooks();
    });

    div.append(h2, h3, span, toggleButton, removeButton);
    bookshelf.appendChild(div);
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readInput = document.getElementById("read");

  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked,
  );

  form.reset();
});
