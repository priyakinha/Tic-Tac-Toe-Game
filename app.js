let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//player x,player Y
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
      turnO=true;
      enableBoxes();
     msgContainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=false;//we cant click on thar box again
        checkWinner();
    });
});
//for disable when 1 is winner
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//when new game starts
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations!, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        //   console.log(pattern[0],pattern[1],pattern[2]);
        //   console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !=""&& pos2val!=""&& pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
               
                showWinner(pos1val);
            }
        }
    }
} ;
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

