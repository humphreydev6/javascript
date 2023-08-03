//User input
//alert("Hello Nigeria");
//let myBoolean = confirm("Ok === True\nCancel === False");
//console.log(myBoolean);

let name = prompt("Please enter your full name.");
if (name){
  console.log(name.length)
  console.log(name.trim().length)
  console.log(name.trim()/* ?? "You didn't enter your name."*/);
}else{
  console.log("You didn't entr your name!");
}
