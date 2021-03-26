// document.getElementById('h1').addEventListener('click', function() {
//     document.getElementById('test').style.display = 'flex';
//     document.getElementById('h1-score').style.display = 'none';
// })

// document.getElementById('row-p1').addEventListener('click', function(e) {
let playerList = [];
addPlayer = function (name, teeColor, hCap, position) {
    let newPlayer = new Player(name, teeColor, hCap, position);
    playerList[position] = newPlayer;

    }
document.getElementById('table-contain').addEventListener('click', function(e) {

    let findId = function(id, symbol) {
        let newArr = id.split(symbol);
        return newArr;
    }

    let updateScore;
    let splitId = findId(e.target.id, "_")[1];
    let findSecondId = findId(splitId, "-")[0];
    console.log("this is the first split: "+splitId, "this is the second split: " + findSecondId);
    let showInput = function(x) {
        document.getElementById('input_' + x).style.display = 'flex';
        document.getElementById('score_' + x).style.display = 'none';
        document.getElementById('input_' + x).focus();
    }
    let showNameInput = function(x) {
        document.getElementById('name-input_' + x).style.display = 'flex';
        
        document.getElementById('name_' + x).style.display = 'none';
        document.getElementById('name-input_' + x).focus();
    }
    if(e.target.className == 'p-name') {
        showNameInput(findSecondId);
    } else {
        showInput(splitId);
    }
    
    

}, true)
document.getElementById('table-contain').addEventListener('blur', function(e) {
    let findId = function(id, symbol) {
        let newArr = id.split(symbol);
        console.log(newArr)
        return newArr;
    }
    let player;
    let hole;
    let inputValue;
    let splitId = findId(e.target.id, '_')[1];
    let getInputValue = function(x) {
        let userInput = document.getElementById('input_' + x);

        console.log("User input: " + userInput.value, 'Player and Hole: ' + x);
        player = findId(x, "-")[0];
        hole = findId(x,'-')[1];
        inputValue = userInput.value;
        userInput.style.display = 'none';
    }
    let getNameValue = function(x) {
        let userInput = document.getElementById('name-input_' + x);
        inputValue = userInput.value;
        userInput.style.display = 'none';
        document.getElementById('name_' + x).style.display = 'flex';
    }

    if(e.target.className == 'name-value') {
        getNameValue(splitId);
        console.log("this is second id")
    } else {
        getInputValue(splitId);
    }
    
    console.log(player, hole, inputValue)


}, true)
// console.log(rickey);
