let turn = "X";

const btns = document.querySelectorAll(".btn button");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const players = document.querySelector(".players");

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
    start.disabled = true;
    startbutton();

    start.innerText = "Starting Game... "
    setTimeout(() => {
        start.classList.add("none")
        reset.classList.remove("none")
        players.classList.remove("none")
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
    });      
});

btns.forEach(btn => {
    btn.addEventListener("click",() => {
        btn.disabled = true
    })
});

winnerpattern.forEach(pattern => {

    let pos1 = btns[pattern[0]].innerText;
    let pos2 = btns[pattern[1]].innerText;
    let pos3 = btns[pattern[2]].innerText;
    
});