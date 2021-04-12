// import { Player } from './classes.js';
// import { render, renderCourses } from './render.js';
// import { httpReq, getCourses, getHole } from './api.js';
// import { currentBoard } from './stream.js';

//Reveal the input for the cells
// document.getElementById('container').addEventListener('click', function(e) {
//     console.log(e.target.id);
// })
// document.getElementById('table-contain').addEventListener('click', function(e) {

//     let findId = function(id, symbol) {
//         let newArr = id.split(symbol);
//         return newArr;
//     }

//     let updateScore;
//     let splitId = findId(e.target.id, "_")[1];
//     let findSecondId = findId(splitId, "-")[0];
//     // console.log("this is the first split: "+splitId, "this is the second split: " + findSecondId);
//     let showInput = function(x) {
//         document.getElementById('input_' + x).style.display = 'flex';
//         document.getElementById('score_' + x).style.display = 'none';
//         document.getElementById('input_' + x).focus();
//     }
//     let showNameInput = function(x) {
//         document.getElementById('name-input_' + x).style.display = 'flex';
//         document.getElementById('name_' + x).style.display = 'none';
//         document.getElementById('name-input_' + x).focus();
//     }
//     if(e.target.className == 'p-name') {
//         showNameInput(findSecondId);
//     } else {
//         showInput(splitId);
//     }
// }, true)
// //Get info when cell is clicked off
// document.getElementById('table-contain').addEventListener('blur', function(e) {
//     let findId = function(id, symbol) {
//         let newArr = id.split(symbol);
//         //console.log(newArr)
//         return newArr;
//     }
//     let player;
//     let hole;
//     let inputValue;
//     let splitId = findId(e.target.id, '_')[1];
//     let getInputValue = function(x) {
//         let userInput = document.getElementById('input_' + x);

//         // console.log("User input: " + userInput.value, 'Player and Hole: ' + x);
//         player = findId(x, "-")[0];
//         hole = findId(x,'-')[1]-1;
//         inputValue = userInput.value;
//         userInput.style.display = 'none';
//         document.getElementById('score_' + x).style.display = 'flex';
//         //console.log(player)
//         currentBoard[player].holeScore[hole] = inputValue;
//         //console.log("this is the score",currentBoard[player])

//     }
//     let getNameValue = function(x) {
//         let userInput = document.getElementById('name-input_' + x);
//         inputValue = userInput.value;
//         userInput.style.display = 'none';
//         document.getElementById('name_' + x).style.display = 'flex';
//         if(currentBoard[x] == null) {
//             currentBoard[x] = new Player(inputValue);
//             console.log(currentBoard[x], currentBoard)
//         } else {
//             currentBoard[x].name = inputValue;
//         }
//     }

//     if(e.target.className == 'name-value') {
//         getNameValue(splitId);
//         // console.log("this is second id")
//     } else {
//         getInputValue(splitId);
//     }
//     render();
// }, true)
// //Gets Course API info and puts it in the list
// document.getElementById('course-btn').addEventListener('click', getCourses);
// //Reveals the Tee List
// document.getElementById('tee-btn').addEventListener('click', ()=> {
//     let teeDrop = document.getElementById('tee-drop');
//     if(teeDrop.style.display == 'flex') {
//         teeDrop.style.display = 'none';
//     } else {
//         teeDrop.style.display = 'flex';
//     };
// });
// //Course Selection
// document.getElementById('course-drop').addEventListener('click', (e) => {
//     let target = e.target.id;
//     let chosenCourse;
//     // console.log(currentBoard.courseId);
//     for(let i = 0; i < currentBoard.course.length; i++) {
//         if(currentBoard.course[i].id == target) {
//             chosenCourse = currentBoard.course[i];
//         }
//     }
//     currentBoard.selectedCourse = chosenCourse;
//     currentBoard.courseId = target;
//     let courseDrop = document.getElementById('course-drop');
//     if(courseDrop.style.display == 'flex') {
//         courseDrop.style.display = 'none';
//     } else {
//         courseDrop.style.display = 'flex';
//     };
//     currentBoard.holes = getHole(target);
// })
// //Tee selection
// document.getElementById('tee-drop').addEventListener('click', (e) => {
//     currentBoard.tee = e.target.id;

//     console.log(currentBoard.tee);
//     let teeDrop = document.getElementById('tee-drop');
//     if(teeDrop.style.display == 'flex') {
//         teeDrop.style.display = 'none';
//     } else {
//         teeDrop.style.display = 'flex';
//     };

// })

// export { currentBoard };
