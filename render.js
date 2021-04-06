import { currentBoard }  from './script.js';
import { Player } from './classes.js';

function renderCourses() {
    let courseDrop = document.getElementById('course-drop');
    let string = '';
    for(let i = 0; i < currentBoard.courses.length; i++) {
        string = string + `<div id="${currentBoard.courses[i].id}">${currentBoard.courses[i].name}</div>`;
        //console.log(currentBoard.courses[i].id, currentBoard.courses[i].name);
    }
    if(courseDrop.style.display == 'flex') {
        courseDrop.style.display = 'none';
    } else {
        courseDrop.style.display = 'flex';
    };
    courseDrop.innerHTML = string;
   
}

function render () {
    document.getElementById('course').innerHTML = currentBoard.selectedCourse.name;
    for(let i = 1; i < 5; i++) {
        let prop = 'p'+i;
        console.log(currentBoard[prop])
        if(currentBoard[prop]) {
            document.getElementById('name_'+prop).innerHTML = currentBoard[prop].name;
        }
        // console.log(currentBoard.prop)

    }
};
export { renderCourses, render };