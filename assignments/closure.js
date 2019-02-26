// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function groceryStore() {
  console.log(`I am in the grocery store!`);
  const message = "we need clean up in aisle 5";
  
  function deliSection() {
    const deli = "I am the deli section of the grocery store and ";
    const deliMessage = "can somebody from produce come help in the deli?";
    console.log(`${deli}${message}`);
    
    function produceSection() {
      const produce = "I am in the produce section!"
      console.log(`${produce} ${message} and ${deliMessage}`);

    }
    produceSection();
  }
  deliSection();
}
groceryStore();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
let count = 0;
return function() {
  return ++count;
}
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
