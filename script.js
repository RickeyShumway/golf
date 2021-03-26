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

    let findId = function(id) {
        let newArr = id.split('_');
        return newArr[1];
    }
    let updateScore
    let splitId = findId(e.target.id);
    console.log(splitId)
    let showInput = function(x) {
        document.getElementById('input_' + x).style.display = 'flex';
        document.getElementById('score_' + x).style.display = 'none';
       
    }
    showInput(splitId);

})
// console.log(rickey);
