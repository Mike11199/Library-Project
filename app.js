const form = document.getElementById("myForm")

let myLibrary = [];

function Book(bookTitle) {

    this.bookTitle = bookTitle;


}


function addBooktoLibrary () {
    // add something here
}

const Book1 = new Book('The Odyssey');

console.log(Book1.bookTitle);




function ToggleForm() {
        
    if (form.style.display == "block") {
        form.style.display = "none"
    }
    else if (form.style.display != "block") {
        form.style.display = "block";
    }
    

        
  }
  
  function closeForm() {
        form.style.display = "none";
  }