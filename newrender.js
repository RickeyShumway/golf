import { Player } from './classes.js';
import { render, renderCourses } from './render.js';
import { httpReq, getCourses, getHole } from './api.js';
import { currentBoard } from './stream.js';
// function renderCourses() {
// }
function reduceStuff(arr, id) {
    let slice1 = arr.slice(0,9);
    let slice2 = arr.slice(9,18);
    let reduction1 = slice1.reduce((a, b) => a+ b, 0);
    document.getElementById(id+'out').innerHTML = reduction1;
    document.getElementById(id+'in').innerHTML = slice2.reduce((a, b) => a+ b, 0);
    let totalTotal = document.getElementById(id+'total').innerHTML = arr.reduce((a, b) => a+ b, 0);
}
function reduceMore(arr, thing, id2) {
        let slice1 = arr.slice(0,9);
        let slice2 = arr.slice(9,18);
        document.getElementById(thing) = slice1.reduce((a, b) => a+ b, 0);
        document.getElementById(id2) = slice2.reduce((a, b) => a+ b, 0);
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
async function renderHoleInfo() {
    let parArr=[];
    let yardsArr = [];
    let hcpArr = [];
    //Par Yards and HCP
    for(let i = 0; i < 18; i++) {
        let parString = `par_${i+1}`;
        let yardString = `yard_${i+1}`;
        let hCapString = `hcap_${i+1}`;
        let par = currentBoard.selectedCourse[i].teeBoxes[currentBoard.tee].par;
        parArr.push(par);
        document.getElementById(parString).innerHTML = par;
    let yards = currentBoard.selectedCourse[i].teeBoxes[currentBoard.tee].yards;
        yardsArr.push(yards);
        document.getElementById(yardString).innerHTML = yards;
    let hcp = currentBoard.selectedCourse[i].teeBoxes[currentBoard.tee].hcp;
        hcpArr.push(hcp);
        document.getElementById(hCapString).innerHTML = hcp;
    }
    //Course Name
    document.getElementById('course').innerHTML = currentBoard.selectedCourseName;
    //In and OUt Par and Yards
    reduceStuff(parArr, 'par_');
    reduceStuff(yardsArr, 'yard_');
    currentBoard.parTotal = parArr.reduce((a, b) => a+ b, 0);
    let yardStyle = document.getElementById('tee-color').style;
    switch(currentBoard.tee) {
        case 0:
            yardStyle.borderColor = "black";
            document.getElementById('yard_head').style.backgroundColor = "lightgray"
            break;
        case 1:
            yardStyle.borderColor = "blue";
            document.getElementById('yard_head').style.backgroundColor = "lightblue"
            break;
        case 2:
            yardStyle.borderColor = "white";
            document.getElementById('yard_head').style.backgroundColor = "white"
            break;
        case 3:
            yardStyle.borderColor = "red";
            document.getElementById('yard_head').style.backgroundColor = "pink"
            break;

    }
}

function hideeDiv(id, style) {
    let divId = document.getElementById(id);
    divId.style.display = 'none';

}
// function showMessage(total) {
//     let parTotal = 0;
//     for(let i = 0; i < 18; i++) {
//         let par = currentBoard.selectedCourse[i].teeBoxes[currentBoard.tee].par;
//         parTotal+=par[i];

//     }
//     console.log('parTotal - this.total', parTotal - this.total);
    
//     return parTotal - this.total;
// }
function renderScore() {
    console.log("this is a score render");
    // Name
    let bigArr = [];
    for(let i = 1; i < 5; i++) {
        let scoreArr = [];
        let prop = 'p'+i;
        let hide = "name-input_"+prop;
        let out = 'out_'+ prop;
        let inn = 'in_'+ prop;
        let total = 'total_'+prop;
        let show = "name_"+prop;
        document.getElementById(out).innerHTML = currentBoard.players[i].out;
        document.getElementById(inn).innerHTML = currentBoard.players[i].in;
        document.getElementById(total).innerHTML = currentBoard.players[i].total;
        console.log(currentBoard.players[i].name)
        document.getElementById('name_'+prop).innerHTML = currentBoard.players[i].name;
        for(let x = 1; x < 19; x++) {
            let prop2 = 'score_'+prop+"-"+x;
            let prop3 = 'input_'+prop+'-'+x;
            if(currentBoard.players[i].holeScore[x-1]) {
                scoreArr.push(parseInt(currentBoard.players[i].holeScore[x-1]));
                document.getElementById(prop2).innerHTML = currentBoard.players[i].holeScore[x-1];
                document.getElementById(prop2).style.display = 'flex';
                document.getElementById(prop3).style.display = 'none';
                hideeDiv(prop3);
            } else {
                document.getElementById(prop2).style.display = 'none';
                document.getElementById(prop3).style.display = 'none';
            }
        } bigArr.push(scoreArr);
    } 
    currentBoard.finishedHoles();
  
}
export { renderHoleInfo, renderScore }