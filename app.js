const form = document.getElementById("myForm")
const addButton = document.getElementById("addBookBtnForm")

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
        form.style.display = "none";
        form.style.boxShadow = "0px 0px 1px 5000px rgba(0,0,0,0.4)";
    }
    else if (form.style.display != "block") {
        form.style.display = "block";
        form.style.boxShadow = "0px 0px 1px 5000px rgba(0,0,0,0.4)";
      
    }
    

        
  }
  
  function closeForm() {
        form.style.display = "none";
  }