const bookForm = document.querySelector('#book-form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const booksList = document.querySelector('#book-list');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    const bookObj = { allbook: [] };
    if (JSON.parse(localStorage.getItem('books')) == null) {
      localStorage.setItem('books', JSON.stringify(bookObj));
    }

    const obj = JSON.parse(localStorage.getItem('books'));
    obj.allbook = [];

    if (this.title.value !== '' && this.author.value !== '') {
      obj.allbook.push({
        title: this.title,
        author: this.author,
      });
    }
    localStorage.setItem('books', JSON.stringify(obj));
  }

  static removeBook(title) {
    const books = Book.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
function display() {
  const obj = JSON.parse(localStorage.getItem('books'));
  obj.allbook.forEach((item) => {
    booksList.innerHTML += `
            <td>${'"'}${item.title}${'"'}${' '}${'By'}${' '}${item.author}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Remove</a></td>
            `;
  });
}
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBook = new Book(bookTitle.value, bookAuthor.value);
  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    newBook.add();
    bookTitle.value = '';
    bookAuthor.value = '';
    display();
  }
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  Book.deleteBook(e.target);

  Book.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

const d = new Date();
<<<<<<< HEAD

=======
>>>>>>> 06e15213a48bb43a8241ee3a92974eba1f5bd41e
document.getElementById('current_date').innerHTML = d;

const newBook = document.getElementById('newbookLi');
const myForm = document.getElementById('myForm');
const myBookList = document.getElementById('bookList');
const myList = document.getElementById('list');
const myHome = document.getElementById('home');
const myContact = document.getElementById('contacts');
const contactNavLink = document.getElementById('contactNavLi');

newBook.addEventListener('click', (e) => {
  e.preventDefault();
  myForm.classList.remove('d-none');
  newBook.classList.add('active');
  myList.classList.remove('active');
  myBookList.classList.add('d-none');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

myList.addEventListener('click', (e) => {
  e.preventDefault();
  myList.classList.add('active');
  myForm.classList.add('d-none');
  myBookList.classList.remove('d-none');
  newBook.classList.remove('active');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

myHome.addEventListener('click', (e) => {
  e.preventDefault();
  myList.classList.add('active');
  myForm.classList.add('d-none');
  myBookList.classList.remove('d-none');
  newBook.classList.remove('active');
  contactNavLink.classList.remove('active');
  myContact.classList.add('d-none');
});

contactNavLink.addEventListener('click', (e) => {
  e.preventDefault();
  contactNavLink.classList.add('active');
  myForm.classList.add('d-none');
  myList.classList.remove('active');
  myBookList.classList.add('d-none');
  newBook.classList.remove('active');
  myContact.classList.remove('d-none');
});

myForm.classList.add('d-none');
myContact.classList.add('d-none');
