let turn = "X";
let winnerfound = false;

const h1 = document.querySelector("h1");
const btns = document.querySelectorAll(".btn button");
const board = document.querySelector(".btn");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const players = document.querySelector(".players");
const result = document.querySelector(".result");

function startbutton() {
    btns.forEach(btn => {
        btn.disabled = false;
});
}

function endbutton() {
    btns.forEach(btn => {
        btn.disabled = true;
    });
}

endbutton();

let winnerpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

start.addEventListener("click",() =>{

    startbutton();

    start.innerText = "Starting Game... "
    setTimeout(() => {
        board.classList.remove("none");
        start.classList.add("none")
        reset.classList.remove("none")
        players.classList.remove("none")
        h1.classList.remove("none")
    }, 1000);

    start.disabled = false;
});

btns.forEach(btn => {
    btn.addEventListener("click",() => {
        if(turn === "X"){    
            btn.innerText = turn;
            turn = "O";
        }else{
            btn.innerText = turn;
            turn = "X";
        }   
         btn.disabled = true
         checkWinner();
    });      
});

function checkWinner() {

    winnerfound = false;

    winnerpattern.forEach(pattern => {

        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if(pos1 === pos2 && pos2 === pos3) {
                winnerfound = true;

                btns[pattern[0]].style.backgroundColor = "green";
                btns[pattern[1]].style.backgroundColor = "green";
                btns[pattern[2]].style.backgroundColor = "green";

                result.innerText = `${pos1} Won!`;

                endbutton();
             }
        }
    });
            if(!winnerfound){
                let allfilled = true;

                btns.forEach(btn => {
                    if(btn.innerText === ""){
                        allfilled = false;
                    }
                });

                if(allfilled){
                    result.innerText = "Its a Draw"
                }
             }
}

reset.addEventListener("click",() => {
    btns.forEach(btn => {
        btn.style.backgroundColor = "white";
        btn.innerText = "";
    });
        turn = "X";
        result.innerText = "Its player 1's turn";
        winnerfound = false;
        startbutton();
})