let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let newbtn=document.querySelector("#newbtn");
msgcontainer.classList.add("show");
let turn0=true;
let count=0;
const winpattern=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        
        console.log("box was clicked!!");
        if(turn0)
            {
                box.innerText="0";
                box.style.color="blue";
                turn0=false;
            }
            else 
            {
                box.innerText="X";
                box.style.color="green";
                turn0=true;
            }
            box.disabled=true;
            count++;

            let isWinner=checkWinner();
            if(count===9 && !isWinner)
            {
                gameDraw();
            }
    }
        
    );
});
const gameDraw=()=>
{
    msgcontainer.classList.add("show");
    msg.innerText="Oops!! Game was a draw";
    msgcontainer.classList.remove("show");
    disableBoxes();
}
const checkWinner=() =>
{
    for(pattern of winpattern)
    {
        let p1Val=boxes[pattern[0]].innerText;
        let p2Val=boxes[pattern[1]].innerText;
        let p3Val=boxes[pattern[2]].innerText;
        if(p1Val!=="" && p2Val!=="" & p3Val!=="")
        {
            if(p1Val===p2Val && p2Val===p3Val)
            {
                showWinner(p1Val);
                return true;
            }

        }
    }
}
const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }
const showWinner=(winner)=>
{
    msgcontainer.classList.remove("show");
  msg.innerText=`Congratulations, the Winner is ${winner}!!`;
  disableBoxes();
  
}
const resetGame=()=>
{
    count=0;
    msgcontainer.classList.add("show");
 turn0=true;
 enableBoxes();
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

