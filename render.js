// import { currentBoard }  from './script.js';
import { Player } from './classes.js';
// function updateScore(prop, html) {
//     for(i = 0; i < prop.length; i++) {
//         html.innerHTML = prop[i];
//     }
// }
function renderCourses() {
    let courseDrop = document.getElementById('course-drop');
    let string = '';
    for(let i = 0; i < currentBoard.course.length; i++) {
        string = string + `<div id="${currentBoard.course[i].id}">${currentBoard.course[i].name}</div>`;
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
        //console.log(currentBoard[prop])
        if(currentBoard[prop]) {
            document.getElementById('name_'+prop).innerHTML = currentBoard[prop].name;
        }

    }
    function playerScore(player, prop, index, html) {
        if(player && player.holeScore) {
            document.getElementById(html).innerHTML = player.prop[index];
        }
    }
    console.log(currentBoard.p1.holeScore)
    for(let i = 0; i < 18; i++) {
            playerScore(currentBoard.p1, holeScore, i, "score_p1" + i+1)
            // playerScore(currentBoard.p2, i, "score_p2" + i+1)
            // playerScore(currentBoard.p3, i, "score_p3" + i+1)
            // playerScore(currentBoard.p4, i, "score_p4" + i+1)
        }
        // for(let i = 1; i <= 4; i++) {
        //     let prop = "p"+i;
        //     console.log(prop, currentBoard.p1, 'hello')
        //     if(currentBoard.prop!= null) {
        //         for(let x = 0; x < currentBoard[prop].holeScore.length; x++) {
        //             console.log(x);
        //             console.log(currentBoard.prop.holeScore[x])
        //             let holeString = `score_p${i}-${x}`;
        //             document.getElementById(holeString).innerHTML = currentBoard.prop.holeScore[x];
        //             console.log(currentBoard.players[i].holeScore[x]);
        //     }
            
        //     }
        // };

    let teeOrder = 0;

    for(let i = 0; i < 18; i++) {
        let parString = `par_${i+1}`;
        let yardString = `yard_${i+1}`;
        let hCapString = `hcap_${i+1}`;
        document.getElementById(parString).innerHTML = currentBoard.holes[i].teeBoxes[teeOrder].par;
        document.getElementById(yardString).innerHTML = currentBoard.holes[i].teeBoxes[teeOrder].yards;
        document.getElementById(hCapString).innerHTML = currentBoard.holes[i].teeBoxes[teeOrder].hcp;
    }
    //console.log(currentBoard.holes)
};
export { renderCourses, render };