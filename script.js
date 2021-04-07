import { Player } from './classes.js';
import { render, renderCourses } from './render.js';
import { httpReq, getCourses, getHole } from './api.js'

// document.getElementById('h1').addEventListener('click', function() {
//     document.getElementById('test').style.display = 'flex';
//     document.getElementById('h1-score').style.display = 'none';
// })

// document.getElementById('row-p1').addEventListener('click', function(e) {
let currentBoard = {
    courseId: null,
    course: [],
    selectedCourse: {},
    players: [],
    holes: [],
    p1: null,
    p2: null,
    p3: null,
    p4: null,
    tee: null,
    
    addPlayer : function (name) {
        let newPlayer = new Player(name);
        this.players.push(newPlayer);
        },
    chooseTee : function (color) {
        this.tee = color;
    },
    
};

document.getElementById('table-contain').addEventListener('click', function(e) {

    let findId = function(id, symbol) {
        let newArr = id.split(symbol);
        return newArr;
    }

    let updateScore;
    let splitId = findId(e.target.id, "_")[1];
    let findSecondId = findId(splitId, "-")[0];
    // console.log("this is the first split: "+splitId, "this is the second split: " + findSecondId);
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

        // console.log("User input: " + userInput.value, 'Player and Hole: ' + x);
        player = findId(x, "-")[0];
        hole = findId(x,'-')[1]-1;
        inputValue = userInput.value;
        userInput.style.display = 'none';
        console.log(player)
        currentBoard[player].holeScore[hole] = inputValue;
        console.log("this is the score",currentBoard[player])
    }
    let getNameValue = function(x) {
        let userInput = document.getElementById('name-input_' + x);
        inputValue = userInput.value;
        userInput.style.display = 'none';
        document.getElementById('name_' + x).style.display = 'flex';
        if(currentBoard[x] == null) {
            currentBoard[x] = new Player(inputValue);
            console.log(currentBoard[x], currentBoard)
        } else {
            currentBoard[x].name = inputValue;
        }
    }

    if(e.target.className == 'name-value') {
        getNameValue(splitId);
        // console.log("this is second id")
    } else {
        getInputValue(splitId);
    }
    
    render();

}, true)
document.getElementById('course-btn').addEventListener('click', getCourses);
document.getElementById('tee-btn').addEventListener('click', ()=> {
    let teeDrop = document.getElementById('tee-drop');
    if(teeDrop.style.display == 'flex') {
        teeDrop.style.display = 'none';
    } else {
        teeDrop.style.display = 'flex';
    };
});
document.getElementById('course-drop').addEventListener('click', (e) => {
    
    let target = e.target.id;
    
    let chosenCourse;
    // console.log(currentBoard.courseId);
    for(let i = 0; i < currentBoard.course.length; i++) {
        if(currentBoard.course[i].id == target) {
            chosenCourse = currentBoard.course[i];
        }
    }
    currentBoard.selectedCourse = chosenCourse;
    currentBoard.courseId = target;
    
    let courseDrop = document.getElementById('course-drop');
    if(courseDrop.style.display == 'flex') {
        courseDrop.style.display = 'none';
    } else {
        courseDrop.style.display = 'flex';
    };
    currentBoard.holes = getHole(target);
})
document.getElementById('tee-drop').addEventListener('click', (e) => {
    currentBoard.tee = e.target.id;

    console.log(currentBoard.tee);
    let teeDrop = document.getElementById('tee-drop');
    if(teeDrop.style.display == 'flex') {
        teeDrop.style.display = 'none';
    } else {
        teeDrop.style.display = 'flex';
    };

})

export { currentBoard };
// let style = document.getElementById('course-drop');

// if(style.style.display == 'none') {
//     style.style.display = 'flex';
// } else {
//     style.style.display = 'none';
// };