// Conditionals: If Statements

/*let customerIsBanned= false;
let soup = "Chicken noodle soup";
let crackers = true;
let reply;

//syntax
if (customerIsBanned){
  reply = "No soup for you";
}else if (soup && crackers){
  reply = `Here's your order of ${soup}`;
  //run some code 
}else{
  reply = "Sorry we're out of soup."
}
console.log(reply); */

/*
//Testscore & Grade 

let testScore = 40;
let grade;
let uniStudent = true;
if (testScore >= 80)
{
  grade = 'A';
}else if(testScore >= 70){
  grade = 'B'
}else if(testScore >= 60){
  grade = 'C'
}else if(testScore >= 50 ){
  grade = 'D'
}else{
  if(uniStudent){
    grade = "U";
  }else{
    grade = "F";
  }
}
console.log(grade);
*/


/*
//Decision tree!
let playerOne = "papper";
let computer = "papper"

if (playerOne === computer){
  //tie game!
}else if (playerOne === "rock"){
  if (computer === "paper"){
    // computer wins
  }else{
    //playerOne wins
  }
}else if (playerOne === "paper"){
  if (computer === "scissors"){
    // computer wins
  }else{
    //playerOne wins
  }
}else{
  if (computer === "rock"){
    //computer wins
  }else{
    //playerOne wins
  }
}
console.log(playerOne)
*/



//switch statement


//syntax
switch (Math.floor(Math.random() * 20 + 1)){

  case 1:
    console.log ("You match number is 1");
    //run this code
    break;
  
  case 2:
    console.log ("You match number is 2");
    //run this different code
    break;
    
  case 3:
    console.log ("You match number is 3");
    //run this different code
    break;
  
  case 4:
    console.log ("You match number is 4")
    //run this different code
    break;
    
  case 5:
    console.log ("You match number is 5")
    //run this different code
    break; 

  case 6:
    console.log ("You match number is 6")
    //run this different code
    break; 
  
      
  case 7:
    console.log ("You match number is 7")
    //run this different code
    break;    
  

  case 8:
    console.log ("You match number is 8")
    //run this different code
    break;


  case 9:
    console.log ("You match number is 9")
    //run this different code
    break; 


  case 10:
    console.log ("You match number is 10")
    //run this different code
    break;


  case 11:
    console.log ("You match number is 1")
    //run this different code
    break;


  // add as many cases as needed  
  default:
    console.log ("No match!");
  // run this code if no case matches
}


let playerOne = "scissors";
let computer = "rock";

switch(playerOne){
  case computer:
    console.log("Tie Game!");
    break;
  
  case "rock":
    if (computer === "paper"){
      console.log("computer won!");
    }else{
      console.log("playerOne won!");
    }
    break;
    
  case "paper":
    if (computer === "scissors"){
      console.log("computer won!");
    }else{
      console.log("playerOne won!");
    }
    break; 
    
  default:
    if (computer === "rock"){
      console.log("computer won!");
    }else{
      console.log("playerOne won!");
    }  
}


