import { Player } from './classes.js';
import { render, renderCourses } from './render.js';
import { httpReq, getCourses, getHole } from './api.js';
import { currentBoard } from './stream.js';
import { renderHoleInfo, renderScore } from './newrender.js';

function splitTarget(id, symbol) {
    let newArr = id.split(symbol);
    return newArr;
}
function revealDiv(id, style) {
    let divId = document.getElementById(id);
    if(divId?.style?.display == style) {
        divId.style.display = 'none';
    } else {
        divId.style.display = 'flex';
    }
}
function hideDiv(id, style) {
    let divId = document.getElementById(id);
    divId.style.display = 'none';

}
function focusDiv(id) {
    document.getElementById(id).focus();
}
//Input Reveals
document.getElementById('container').addEventListener('click', async function(e) {
    let target = e.target.id;
    //dropdown menus
    if(e.target.className === 'button') {
        let arr = splitTarget(target, '-');
        let id = arr[0] + "-drop";
        //Course Dropdowb
        if(id == 'course-drop') {
            console.log(target, 'secondlog');
            currentBoard.courseList = await getCourses();
            console.log('currentBoard', currentBoard);
            let string = '';
            for(let i = 0; i < currentBoard.courseList.length; i++) {
                string = string + `<div class='course drop-item' id="${currentBoard.courseList[i].id}">${currentBoard.courseList[i].name}</div>`;
            }
            document.getElementById('course-drop').innerHTML = string;
        }
        revealDiv(id, 'flex');
        //Tee DropDown
    } else {
        hideDiv('tee-drop');
        hideDiv('course-drop')
    }
   //Player Input Reveal
    if(e.target.className === 'p-name') {
        let arr = splitTarget(target, '_')
        let inputId = arr[0]+"-input_"+arr[1];
        let displayId = arr[0]+'_'+arr[1];
        console.log("this is the name", displayId)
        revealDiv(inputId, 'flex');
        hideDiv(displayId);
        focusDiv(inputId);
    }
    //Score Input Reveal
    if(e.target.className === 'box cell' || e.target.className ==='score-cell') {
        let arr = splitTarget(target, '_');
        let inputId = 'input_'+arr[1];
        let scoreId = 'score_'+arr[1];
        hideDiv(scoreId);
        revealDiv(inputId);
        focusDiv(inputId);
        console.log('this is the score cell', arr)
    }
    //Get Tee
    if(e.target.className == 'tee drop-item') {
        console.log('drop item')
        currentBoard.changeTee(target);
        console.log(currentBoard.tee)
        if(currentBoard.selectedCourse) {
            currentBoard.selectCourse(currentBoard.selectedId);
        }
    }
    if(e.target.className == 'course drop-item') {
        currentBoard.selectCourse(target);
        console.log('renderCourse info function here')

    }
})

//Submit Text Input
document.getElementById('table-contain').addEventListener('blur', function(e) {
    let target = e.target.id;
   
    //Name Input
    if(e.target.className === 'name-value' ) {
        let userInput = document.getElementById(target).value;
        let arr = splitTarget(target,'_');
        let playerNum = arr[1][1];
        currentBoard.players[playerNum].editName(userInput);
        console.log("player1 name",currentBoard.players[playerNum] )
        renderScore();
        hideDiv("name-input_p"+playerNum, 'none');
        revealDiv("name_p"+playerNum)
    } else {
        //Score Input
        let userInput = document.getElementById(target).value;
        console.log(target, userInput);
        let arr = splitTarget(target, '_');
        console.log(arr)
        let playerNum = arr[1][1];
        let secondSplit = splitTarget(arr[1], '-');
        currentBoard.players[playerNum].score(secondSplit[1], userInput)
        console.log(currentBoard.players)
        renderScore();
        // hideDiv("input_p"+playerNum, 'none');
    }
}, true)
document.getElementById('table-contain').addEventListener('keypress', function(e) {
    let target = e.target.id;
    if(e.key == "Enter") {
        console.log(e.target.id)
        if(e.target.className === 'name-value' ) {
            let userInput = document.getElementById(target).value;
            let arr = splitTarget(target,'_');
            let playerNum = arr[1][1];
            currentBoard.addPlayer(userInput, playerNum);
            renderScore();
            hideDiv("name-input_p"+playerNum, 'none');
            revealDiv("name_p"+playerNum)
        } else {
            let userInput = document.getElementById(target).value;
            console.log(target, userInput);
            let arr = splitTarget(target, '_');
            console.log(arr)
            let playerNum = arr[1][1];
            let secondSplit = splitTarget(arr[1], '-');
            currentBoard.players[playerNum].score(secondSplit[1], userInput)
            console.log(currentBoard.players)
            renderScore();
        }
    }
})
