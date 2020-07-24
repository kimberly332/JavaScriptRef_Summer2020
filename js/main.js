// this is an anonymous self invoking function
// also called an IIFE (immediately invoked function expression)
// also called a module (module programming pattern)

(() => {
  console.log("fried!");

  let theButton = document.querySelector('button'),
      theHeading = document.querySelector('h1');

  function sayHello(message) {
    console.log(message);
  }

  // get the ID of any element
  function retrieveId() {
    console.log(this.id);

    // pass the ID to another function as an argument
    displayTheId(this.id);
  }

  // display the ID of any clicked element on the page
  function displayTheId(theId) {
    document.querySelector('p').textContent = `You clicked on the element with ID of ${theId}`;
  }

  // this function will take a number, and operator, and a number
  // and log the result
  function sumNums(x, y) {
    console.log(x + y);
  }

  // pass an argument to the function
  sayHello("hi andres, i'm an argument.");

  sumNums(5, 6);
  sumNums(123, 67);

  // event handling here
  theButton.addEventListener("click", retrieveId);
  theHeading.addEventListener("click", retrieveId);
})();
