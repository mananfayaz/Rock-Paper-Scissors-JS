let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userScoreID=document.querySelector("#user-score");
const compScoreID=document.querySelector("#computer-score");



const genCompChoice=()=>{
    //rock,paper,scissors
    let options=["rock","paper","scissors"];
    let randChoice=options[Math.floor(Math.random()*3)];
    return randChoice;
}

    

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
         const userChoice=choice.getAttribute("id");
         console.log("user's choice is:",userChoice);
         let compChoice=genCompChoice();
         console.log("computer's choice is:",compChoice);
         generateWinner(userChoice,compChoice);

    })
}
)
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
       { userScore++;
        userScoreID.innerText=userScore;
    document.querySelector("#msg").innerText=  `YOU WIN! Your ${userChoice} beats Computer's ${compChoice}`;
    msg.style.backgroundColor="green"
       }
    else {
        compScore++;
        compScoreID.innerText=compScore;
    document.querySelector("#msg").innerText=`YOU LOSE! Your ${userChoice} loses to Computer's ${compChoice}`;
    msg.style.backgroundColor="red";
}
}


const generateWinner = (userChoice,compChoice)=>{
    if(userChoice===compChoice)
       { console.log("It's a draw");
       document.querySelector("#msg").innerText="GAME WAS A DRAW";
       msg.style.backgroundColor="blue";
       }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true; //userwine is false if comp wins else true
           
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors"?false:true;
        }
        else
        {
          userWin=compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
}
}