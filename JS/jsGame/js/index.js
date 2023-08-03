// First Interactive Game

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame){
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){

      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock" 
      : computerChoice === 2 ? "paper"
      : "scissors";
      let result = playerOne === computer 
        ? "Tie Game!"
        :playerOne === "rock" && computer === "paper" ? "Computer won!"
        :playerOne === "paper" && computer === "scissors" ? "Computer won!"
        :playerOne === "scissors" && computer === "rock" ? "Computer won!"
        :"playerOne won!"
      console.log(result);
    }else{
      alert("You didn't enter paper, rock, or scissors.");
    }
  }else{
    alert("I guess you change your mind. maybe next time.");
  }
}else{
  alert("Ok, maybe next time.")
}