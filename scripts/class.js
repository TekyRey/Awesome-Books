const bookForm = document.querySelector("#book-form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const booksList = document.querySelector("#book-list");

//create a class book with add remove add display methods
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
        obj.allbook.push({
            title: this.title,
            author: this.author,
        });
        localStorage.setItem("books", JSON.stringify(obj));
    }
    remove() {
removeBtn.forEach((item) =>
  item.addEventListener("click", () => {
    console.log("item clicked");
    const removeId = parseInt(item.id, 10);
    const obj = JSON.parse(localStorage.getItem("books"));
    booklist = obj.allbook;
    booklist = booklist.filter((element, index) => index !== removeId);
    obj.allbook = booklist;
    localStorage.setItem("books", JSON.stringify(obj));
    window.location.reload();
  })
);
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
//add event listener to the remove button
const removeBtn = document.querySelectorAll(".remove-btn");
function deleteBook (){
    
}

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