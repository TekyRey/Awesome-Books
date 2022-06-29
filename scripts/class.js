const bookForm = document.querySelector("#book-form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const booksList = document.querySelector("#book-list");

//create a class book with add remove add display methods
  class Store {
    static getBooks() {
      let books;
      if (localStorage.getItem("books") === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem("books"));
      }

      return books;
    }

    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(title) {
      const books = Store.getBooks();

      books.forEach((book, index) => {
        if (book.title === title) {
          books.splice(index, 1);
        }
      });

      localStorage.setItem("books", JSON.stringify(books));
    }
  }


class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  add() {
    const bookObj = { allbook: [] };
    if (JSON.parse(localStorage.getItem("books")) == null) {
      localStorage.setItem("books", JSON.stringify(bookObj));
    }

    const obj = JSON.parse(localStorage.getItem("books"));
    //set obj to empty
      obj.allbook = [];
      //push new book to obj

      
      if (this.title.value !== "" && this.author.value !== "") {
          obj.allbook.push({
              title: this.title,
              author: this.author,
          });
      }
    localStorage.setItem("books", JSON.stringify(obj));
  }
  static removeBook(title) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
  display() {
    const obj = JSON.parse(localStorage.getItem("books"));
    obj.allbook.forEach((item, index) => {
      booksList.innerHTML += `
            <td>${item.title}</td>
        <td>${item.author}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Remove</a></td>
            <hr>`;
    });
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
}
//add event listener to the form
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = new Book(bookTitle.value, bookAuthor.value);
    newBook.add();
    author.value = ""
    title.value = ""
    newBook.display();
}
);

  document.querySelector("#book-list").addEventListener("click", (e) => {
    Book.deleteBook(e.target);

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  });
//add event listener to the remove button
const removeBtn = document.querySelectorAll(".remove-btn");


//add event listener to the display button
// const displayBtn = document.querySelector("#display-btn");
// displayBtn.addEventListener("click", () => {
//     const obj = JSON.parse(localStorage.getItem("books"));
//     obj.allbook.forEach((item, index) => {
//         booksList.innerHTML += `
//         <p>${item.title}</p>
//         <p>${item.author}</p>
//         <button type="button" class="remove-btn" id="${index}">Remove</button>
//         <hr>`;
//     });
// }
// );
//add event listener to the clear button