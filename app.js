
let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is Started");
        started=true;

        levelUp();
    }
});

function GameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    } ,250)
}
function userfalsh(btn){
    btn.classList.add("userfalsh");
    setTimeout(function() {
        btn.classList.remove("userfalsh")
    } ,250)
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;

    //random button
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    GameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,1000);
        }
    }
    else{
         h2.innerHTML= ` Game Over! Your Score Was <b>${level} </b> <br> Press any key to start.`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },500)
         reset();
    }
}

function btnpress(){
//    console.log(this);
   let btn=this;
   userfalsh(btn);

   userColor=btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}



let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
