// this is an anonymous self invoking function
// also called an IIFE (immediately invoked function)

(() => {
  console.log("fried!");

  function sayHello() {
    console.log("sup?");
  }

})();
