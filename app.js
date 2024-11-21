let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userScorePrint = document.querySelector("#user-score");
let compScorePrint = document.querySelector("#comp-score");



const genCompChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissor"];
    return options[randomIndex];
};


const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const draw = () =>{
        msg.innerHTML = "Game was Draw. Play Again";
        msg.setAttribute("style", "background-color: gray;");

};

const userWin = () =>{
        msg.innerHTML = "Congratulations! you win. Play Again";
        msg.setAttribute("style", "background-color: green;");
        userScorePrint.innerHTML = ++userScore;


};

const compWin = () =>{
        msg.innerHTML = "You lost. Play Again ";
        msg.setAttribute("style", "background-color: red;");
        compScorePrint.innerHTML = ++compScore;

};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);
    if (userChoice === compChoice) {
        console.log("match draw");
        draw();
    } else if ((userChoice === "rock" && compChoice === "scissor") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissor" && compChoice === "paper")) {
        console.log("user wins");
        userWin();
    } else {
        console.log(" computer wins");
        compWin();
    }
};