//IPO
//Input Process Output

//1. Define Inputs - Constants & State Variables

const COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [2,5,8],
    [0,3,6],
];

const KEY = {
    '1':'X',
    '-1':'O',
    'null':''
};

//Things that change - turn, winner, gameboard

let turn, winner, gameboard;

// We need to cache element references

const squares = document.querySelectorAll('.square');

document.querySelector('#gameboard').addEventListener('click', handleClick);
document.querySelector('#reset').addEventListener('click',init);


init();
function init(){
    winner = false;
    turn = 1;
    gameboard = [null,null,null,null,null,null,null,null,null];
}


function handleClick(evt) {
    console.log(evt.target.dataset.index);
    const selectedIndex = parseInt(evt.target.dataset.index);
    gameboard[selectedIndex] = turn;
    turn *= -1;
    console.log(gameboard)
}

const message = document.getElementById('message');

