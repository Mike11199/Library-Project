const form = document.getElementById("myForm")
const addButton = document.getElementById("addBookBtnForm")
const AddButton =  document.getElementById("add_card")
const loginForm = document.getElementById("bookForm");
const cancelBookBtnForm = document.getElementById("cancelBookBtnForm");
const bookTitle = document.getElementById('bookTitle');
const authorName = document.getElementById('authorName');
const numPages = document.getElementById('numPages');


let myLibrary = [];



loginForm.addEventListener("submit", addBooktoLibrary);
AddButton.addEventListener("click", ToggleForm);
cancelBookBtnForm.addEventListener("click",closeForm);



function Book(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
}




//This section gets all the inputs from the form entered by the user, and returns an object from the 'Book Class'.  
//What's entered into the form is passed into the object and can be accessed as its properties.
function addBooktoLibrary(e) {
    e.preventDefault();
    const newBook = new Book(bookTitle.value, authorName.value, numPages.value);
    closeForm();
    bookTitle.value="";
    authorName.value="";
    numPages.value="";
    myLibrary.push(newBook);
    alert(myLibrary[0].bookPages);
}





//This will take the object created by the addBooktoLibrary function and add it to card in the page grid
function addLibrarytoGrid () {
    
    let card = document.createElement("div");
    let cardInfo = document.createElement("div");
    card.className += `book added bookNum_${index}`;



}





//This lets the add book button be able to open and close the form depending on its state
function ToggleForm() {
        
    if (form.style.display == "block") {
        form.style.display = "none";
        form.style.boxShadow = "0px 0px 1px 5000px rgba(0,0,0,0.4)";
    }
    else if (form.style.display != "block") {
        form.style.display = "block";
        form.style.boxShadow = "0px 0px 1px 5000px rgba(0,0,0,0.4)";
      
    }
    }
  


//Closes the form and resets everything
  function closeForm() {
        form.style.display = "none";
        bookTitle.value="";
        authorName.value="";
        numPages.value="";
  }