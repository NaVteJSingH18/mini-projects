let userScore = 0;
let compScore = 0;
 
const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")
const draw=()=>{
    
    msg.innerText="Game was draw,play again"; 
    msg.style.backgroundColor="blue";
}
const showresult=(userwin,userchoice,CompChoice)=>{
    if (userwin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! your ${userchoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore
        msg.innerText=`You lost. ${CompChoice} beats your ${userchoice}`;;
        msg.style.backgroundColor="red";
    }
}

const genCompChoice =() => {
    const options =["arrow","shield","sword"];
   const randIdx= Math.floor(Math.random()*3);
   return options [randIdx];
}

const playgame = (userchoice) =>{
    const CompChoice = genCompChoice();
    if(userchoice==CompChoice){
        draw();
    }else{
        let userwin=true;
        if(userchoice=="arrow"){
            //scissor,paper
            userwin = CompChoice==="shield" ? false :true;
        }else if(userchoice=="shield"){
            //scissor,rock
            userwin= CompChoice==="sword"?false:true;
        }
        else{
            //rock,paper
           userwin= CompChoice==="arrow"?false:true;
        }
        showresult(userwin,userchoice,CompChoice);
    }
    
}
choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id")
        playgame(userchoice)
    })
} );