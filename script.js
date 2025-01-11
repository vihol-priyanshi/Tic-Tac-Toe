// console.log("Welcome to Tic Tac Toe");
// let music=new Audio("")
let audioTurn=new Audio("turn.mp3");
let gameover=new Audio("winning.mp3");
let turn="X";
let isGameOver =false;

// Function to change the turn
const changeTurn=()=>{

    // return turn==="X"?"0": "X" ternary operator
    if(turn=="X"){
       
        return "0";
        
       
    }
    else{
        return "X";
    }
}

// Function to check for a win
const checkWin=()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText)===(boxtext[e[2]].innerText) && boxtext[e[0]].innerText !==''){
            let info=document.querySelector(".info");
            info.innerText =boxtext[e[0]].innerText + " WON ";
            boxtext[e[0]].style.fontSize=("10vw");
            boxtext[e[1]].style.fontSize=("10vw");
            boxtext[e[2]].style.fontSize=("10vw");
            
            if((boxtext[e[1]].innerText=="X")){
                info.style.textDecoration=("3px green underline");
               
            }

            else{
                info.style.textDecoration=("3px red underline");
            
                
            
            }
            info.style.fontSize=("29px");
            isGameOver=true;
            gameover.play();
            let img=document.querySelector("#win_gif");
            img.style.width="200px";
            let boxes=document.querySelectorAll(".box");



        }


    })

}

// My Game Logic 
let boxes=document.querySelectorAll(".box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if (boxtext.innerText===""){
            boxtext.innerText=turn;
            if(turn=="X"){
                boxtext.style.color=("green");
            }
            else{
                boxtext.style.color=("red");
            }
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                let info=document.querySelector(".info");
                info.innerText="Turn for "+ turn;
            
           
         }
           
           
        }
    })
})

let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
        
    })
   
    turn="X";
    isGameOver="false";
    let info=document.querySelector(".info");
    info.innerText="Turn for "+ turn;
    info.style.textDecoration="none";
    info.style.fontSize=("22px");
    let img=document.querySelector("#win_gif");
    img.style.width="0px";


})
//Harry's Game Logic
// let boxes=document.getElementsByClassName("box");
// Array.from(boxes).forEach(element =>{
//     let boxtext=element.querySelector('.boxtext');
//     element.addEventListener("click",()=>{
//         if(boxtext.innerText ===""){
//             boxtext.innerText=turn;
//             turn=changeTurn();
//             audioTurn.play();
//             checkWin();
//             if(!isGameOver){
//             document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
//             }

            

            
//         }
//     })
// })

