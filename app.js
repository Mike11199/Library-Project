const form = document.getElementById("myForm")
const AddCard =  document.getElementById("add_card")
const loginForm = document.getElementById("bookForm");
const cancelBookBtnForm = document.getElementById("cancelBookBtnForm");

const bookTitle = document.getElementById('bookTitle');
const authorName = document.getElementById('authorName');
const numPages = document.getElementById('numPages');
const bookCover = document.getElementById('bookCover');
const isReadChecked = document.getElementById('isRead');
let isRead = isReadChecked.checked;

let libraryCount=0;


let myLibrary = [];



loginForm.addEventListener("submit", addBooktoLibrary);
AddCard.addEventListener("click", ToggleForm);
cancelBookBtnForm.addEventListener("click",closeForm);




//This is the javascript constructor for the book object.  bookCover = 0 makes it optional
function Book(title, author, pages, isRead, bookCover = 0) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.isRead = isRead;
    this.bookCover = bookCover;
}




//This section gets all the inputs from the form entered by the user, and returns an object from the 'Book Class'.  
//What's entered into the form is passed into the object and can be accessed as its properties.
function addBooktoLibrary(e) {
    e.preventDefault();
    //adds variables from form to the book constructor
    const newBook = new Book(bookTitle.value, authorName.value, numPages.value, isRead.value, bookCover.value);
    closeForm();
    bookTitle.value="";
    authorName.value="";
    numPages.value="";
    //add new book object entered in form to myLibrary array of objects
    myLibrary.push(newBook);
    //Adds everything in the library to the grid
    addLibrarytoGrid();
}





//This will take all objects in the myLibrary array and add it to cards in the page grid.  It adds to the previous div, the AddCard div.
function addLibrarytoGrid () {

    //Loop through array of book objects in the library array --  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    // for 'const' book used instead of 'let as 'let' would require book++ at end of the 'for' statement
    for (let i = 0, l = myLibrary.length; i < l; i++)
    {
    AddCard.before(createLibraryCard(myLibrary[i]));
    }

}


const createLibraryCard = (book) => {

    // This sets up all of the nodes or elements for the card that stores book info.  It does not add them to the DOM yet.
    let libraryCard = document.createElement("div");
    let bookCover = document.createElement("img");
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let readButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    //this adds classes to each of the elements created above so that CSS can be applied to them.
    libraryCard.classList.add("libraryCard");
    bookCover.classList.add("bookCover");
    bookTitle.classList.add("bookTitle");
    bookAuthor.classList.add("bookAuthor");
    bookPages.classList.add("bookPages");
    readButton.classList.add("readButton");
    deleteButton.classList.add("deleteButton");


    //This take the book object passed into this function and assigns its properties (title, author, etc.) to the divs
    //and elements created for the library card.
    bookTitle.textContent = book.bookTitle;
    bookAuthor.textContent = book.bookAuthor;
    bookPages.textContent = book.bookPages;
    bookCover.src= book.bookCover;


   //This uses .appendChild to add all the elements to the main div libraryCard.  This is the Div added to the grid. 
    libraryCard.appendChild(bookCover)
    
    bookCover.appendChild(bookTitle)
    bookCover.appendChild(bookAuthor)
    bookCover.appendChild(bookPages)

    bookCover.appendChild(readButton)
    bookCover.appendChild(deleteButton)

    return libraryCard;

}









//This lets the add book button be able to open and close the form depending on its state
function ToggleForm() {
        
    if (form.style.display == "block") {
        form.style.display = "none";
        
    }
    else if (form.style.display != "block") {
        form.style.display = "block";
        
      
    }
    }
  


//Closes the form and resets everything
  function closeForm() {
        form.style.display = "none";
        bookTitle.value="";
        authorName.value="";
        numPages.value="";
  }