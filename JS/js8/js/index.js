// Conditionals: Ternary Operator

//syntax
//condition ? ifTrue : ifFalse;

/*
let soup = "Chicken Noodle Soup";
let peperSoup = "Goat meat pepper";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
let response1 = peperSoup ? "Yes, we have goatmeat pepperSoup." : "Sorry, no soup today.";

console.log(response);
console.log(response1);
*/

/*
let soup = "Chicken Noodle Soup";
let isCustomerBanned = true;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : soup
  ? `Yes we have ${soup} today.`
  : "Sorry, no soup today.";
console.log(soupAccess);
*/

/*
let testScore = 69;
let myGrade = testScore > 69 ? "A"
  : testScore > 59 ? "B"
  : testScore > 49 ? "C"
  : testScore > 44 ? "D"
  : "F";
console.log(`My Exams Grade is ${myGrade}`);

*/


let playerOne = "paper";
let computer = "rock";
let result = playerOne === computer 
? "Tie Game!"
  :playerOne === "rock" && computer === "paper" ? "Computer won!"
  :playerOne === "paper" && computer === "scissors" ? "Computer won!"
  :playerOne === "scissors" && computer === "rock" ? "Computer won!"
  :"playerOne won!"
console.log(result);  






