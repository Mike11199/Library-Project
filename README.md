# Library-Project


A tracker that allows books to be stored in a grid format and marked as read, or deleted from the list.  Supports book cover images if an URL is added in the add book dialog form pop up.

<br />

[<img alt="alt_text" width="2000px" src="https://user-images.githubusercontent.com/91037796/181883690-6ab88fbe-78f2-47e2-acef-e5dad36d7444.png" />](https://mike11199.github.io/Library-Project/)


<br />
<h2>Concepts learned from this project</h2>

-Adding a form in a div that is not visible when the page first loads but can toggle visibility later on.  </br></br>
-Adding e.preventDefault() so that values can be grabbed from the form and stored in variables ovverriding default form behavior.  </br></br>
-Using a constructor so that variables from the form can be saved in a new object created from that constructor. </br></br>
-Using document.createElement and the .classList.add or .classList.remove to create/remove HTML elements such as divs, buttons, p tags, and add classes to them.</br></br>
-Using document.appendChild to add a created element to the HTML DOM.</br></br>
-Using relative positioning, event listeners to trigger opacity, and z-index so that the book title, pages, and author and buttons are only displayed when you hover over the book card's thumbnail.</br></br>
-Learned how to save an array of objects to local storage by stringifying an array of objects into a JSON file.  Then learned how to retrieve that JSON file and parse it back into an array, and then back into an array of objects by looping over the array and calling the object constructor. This is so that users' books are loaded when returning to the website. </br></br>
-Added a button to clear all local storage, made delete buttons on cards also delete from local storage and card div itself with parentNode.removeChild, and added a button to load a sample library of books.</br></br>




<br />



<h2>Additional Screenshots</h2>

<br />
<br />

![2](https://user-images.githubusercontent.com/91037796/154173234-d30d9a95-3cc6-47ea-8d0d-c971abdfc85c.png)

[<img alt="alt_text" width="800px" src="https://user-images.githubusercontent.com/91037796/181884475-db7aca26-edcc-4731-a9cc-fdff48f1cee4.png" />](https://mike11199.github.io/Library-Project/)
