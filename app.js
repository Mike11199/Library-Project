const form = document.getElementById("myForm")
const AddCard =  document.getElementById("add_card")
const loginForm = document.getElementById("bookForm");
const cancelBookBtnForm = document.getElementById("cancelBookBtnForm");

const libraryGrid = document.getElementById("grid-container");
const bookTitle = document.getElementById('bookTitle');
const authorName = document.getElementById('authorName');
const numPages = document.getElementById('numPages');
const bookCover = document.getElementById('bookCover');
const isRead = document.getElementById('isRead');


isRead.addEventListener("click",function(event){

 

    if (isRead.value == "yes") {
        isRead.value = "no";
        isRead.style.backgroundColor="rgb(20, 20, 20)";
    }
    else if (isRead.value == "no") {
        isRead.value = "yes";
        isRead.style.backgroundColor="rgb(46, 92, 168)";
    }

})



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
    bookCover.value="";
    //add new book object entered in form to myLibrary array of objects ONLY IF the object's title is not already in the 
    //myLibrary array.
    if (!containsDuplicate(newBook, myLibrary))
    {
        myLibrary.push(newBook);
         //Adds the LAST object in the library to the grid only
        AddCard.before(createLibraryCard(myLibrary[myLibrary.length-1]));
        saveLibrarytoLocalStorage();
    }
    
   
}


function containsDuplicate(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].bookTitle === obj.bookTitle) {
            return true;
        }
    }

    return false;
}



//This will take all objects in the myLibrary array and add it to cards in the page grid.  It adds to the previous div, the AddCard div.
function addEntireLibrarytoGrid () {

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

    deleteButton.innerHTML = "Delete Book";

   
    if (book.isRead == "no") {
        readButton.value = "no";
        readButton.innerHTML = "Not Read";
        readButton.style.backgroundColor = "darkgray"
    }
    else if (book.isRead == "yes") {
        readButton.value = "yes";
        readButton.innerHTML = "Read";
        readButton.style.backgroundColor = "darkgreen"
    }

    

    readButton.addEventListener("click", function(event) {
        if (readButton.value == "no") {
           
            readButton.value = "yes";
            readButton.innerHTML = "Read";
            readButton.style.backgroundColor = "darkgreen"
        }
        else if (readButton.value == "yes") {
            readButton.value = "no";
            readButton.innerHTML = "Not Read";
            readButton.style.backgroundColor = "darkgray"
        }
    })

    deleteButton.addEventListener("click", function(e) {
        
        //this deletes from webpage
        deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
        
        //this deletes from local storage also using findLibrarybyBookTitle Function
        test = deleteButton.parentNode.childNodes
        console.log(test[1].innerHTML);
        myLibrary.splice(findLibraryBookbyBookTitle(test[1].innerHTML),1);
        saveLibrarytoLocalStorage();

    })


    isRead.value = "no";
    isRead.style.backgroundColor="rgb(20, 20, 20)";


    //This take the book object passed into this function and assigns its properties (title, author, etc.) to the divs
    //and elements created for the library card.
    bookTitle.textContent = book.bookTitle;
    bookAuthor.textContent = book.bookAuthor;
    bookPages.textContent = book.bookPages;
    


   
   

    bookCover.src= book.bookCover;
    libraryCard.appendChild(bookCover)


    //hide the image if the URl is bad
    bookCover.addEventListener('error', function handleError() {
        
        bookCover.style.display = 'none';
        libraryCard.style.backgroundColor= "darkgray";
    })


    //This uses .appendChild to add all the elements to the main div libraryCard.  This is the Div added to the grid. 
    libraryCard.appendChild(bookTitle)
    libraryCard.appendChild(bookAuthor)
    libraryCard.appendChild(bookPages)

    libraryCard.appendChild(readButton)
    libraryCard.appendChild(deleteButton)


    
    //on mouseover hide the book cover and show the title, book pages, isread, etc.
    libraryCard.addEventListener("mouseover", function(event)  {
        bookCover.style.opacity= "10%";
        readButton.style.opacity= "70%";
        deleteButton.style.opacity= "70%";
        bookTitle.style.opacity= "70%";
        bookAuthor.style.opacity= "70%";
        bookPages.style.opacity= "70%";

    });

    libraryCard.addEventListener("mouseout", function(event)  {
        bookCover.style.opacity= "100%";
        readButton.style.opacity= "0%";
        deleteButton.style.opacity= "0%";
        bookTitle.style.opacity= "0%";
        bookAuthor.style.opacity= "0%";
        bookPages.style.opacity= "0%";
    });

   

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
        isRead.value = "no";
        isRead.style.backgroundColor="rgb(20, 20, 20)";
  }





// Local Storage
//   https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

const saveLibrarytoLocalStorage = () => {
    //setItem allows storing data to local store.  JSON.stringify converts the myLibrary array into a JSON string
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
    console.log("Stored into array" + JSON.parse(localStorage.getItem("myLibrary")))
  }
  




//https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

const pullLibraryfromLocalStorage = () => {
    let StoredLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    console.log("This is what was retrieved from local storage " + StoredLibrary[0].bookAuthor);
    
    for(i = 0; i < StoredLibrary.length; i++){
        JSONToBook(StoredLibrary[i]);
         }
         addEntireLibrarytoGrid();
}



//This 
//Do NOT use .value here after book.bookTitle.
const JSONToBook = (book) => {
        
    const newBook2 = new Book(book.bookTitle, book.bookAuthor, book.bookPages, book.isRead, book.bookCover);
    myLibrary.push(newBook2);

  }

// pullLibraryfromLocalStorage();


function findLibraryBookbyBookTitle (title)  {

    for(i = 0; i < myLibrary.length; i++)
        {
            if (myLibrary[i].bookTitle == title)
            {
            return i
            }
        }
 
}




pullLibraryfromLocalStorage();


function loadSampleLibrary (){


    myLibrary.splice(0,myLibrary.length);

    let book1 = new Book('Foundation', 'Issac Asimov', '343', 'yes', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg') 
    let book2 = new Book('The Universe in a Nutshell', 'Stephen Hawking', '332', 'yes', 'https://images-na.ssl-images-amazon.com/images/I/81bKX7EA4cL.jpg') 
   
    let book4 = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', '281', 'yes', 'https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL.jpg') 
    let book5 = new Book('Eiger Dreams', 'Jon Krauker', '323', 'yes', 'https://images-na.ssl-images-amazon.com/images/I/51P8Hpa264L._SX331_BO1,204,203,200_.jpg') 
    
    let book7 = new Book('Outliers', 'Malcom Gladwell', '453', 'no', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1271440150l/7630041.jpg')
    let book8 = new Book('1984', 'George Orwell', '263', 'yes', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1984first.jpg/220px-1984first.jpg')

    myLibrary.push(book1);
    myLibrary.push(book2);
    
    myLibrary.push(book4);
    myLibrary.push(book5);
    
    myLibrary.push(book7);
    myLibrary.push(book8);

    addEntireLibrarytoGrid();
    saveLibrarytoLocalStorage();


}