let myLibrary = [];

function Book(bookTitle) {

    this.bookTitle = bookTitle;


}


function addBooktoLibrary () {
    // add something here
}

const Book1 = new Book('The Odyssey');

console.log(Book1.bookTitle);




function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }