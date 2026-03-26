let dabba= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newButton= document.querySelector("#newButton");
let msgContainer= document.querySelector(".msg-container");
let result= document.querySelector("#res");
let turn= "X";


let count = 0 ; // to track draw

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],


];

dabba.forEach((box) => {
    box.addEventListener("click", () => {
 console.log("Daba diya");
 if(turn == "X")
 {
    box.innerText = "X";
turn="O";
 }
 else{
    turn = "X";
    box.innerText = "O";
 }
 box.disabled = true; // button disabled so value can't be changed
count++;
let isWinner = check();

if(count === 9 && !isWinner){
    draw();
}
    });
});

const check = () => {
    for (pattern of winPatterns) {
        let val1  =   dabba[pattern[0]].innerText; 
        let val2  =   dabba[pattern[1]].innerText;
        let val3  =   dabba[pattern[2]].innerText;

        if(val1 != "" && val2 !="" && val3 !="")
        {
            if(val1 == val2 && val2== val3)
            {
            
                console.log("winner");

                shoWinner(val1);
                return true;
            }
        }

    }
};

const shoWinner = (winner) => {
    result.innerText = `Congratulations!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disBox();    

}

const resetGame = () =>{
     turn = "X";
     count = 0;
    enaBox();
    msgContainer.classList.add("hide");
};

const disBox = ()  =>{
for(let box of dabba)
{
    box.disabled = true;
}
};

const enaBox = ()  =>{
    for(let box of dabba)
    {
        box.disabled = false;
        box.innerText ="";
    }
    };

    newButton.addEventListener("click", resetGame);
    reset.addEventListener("click", resetGame);


    const draw = () => {
        result.innerText = `Match Draw!!`;
        msgContainer.classList.remove("hide");
        disBox();
      };
      