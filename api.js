import { currentBoard }  from './script.js';
import { Player } from './classes.js';
import { render, renderCourses } from './render.js';


function httpReq (method, url) {
    let promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType ='json';
        xhr.addEventListener('load', function () {
            resolve(xhr.response);
        })
        xhr.send();
    });
    return promise;
};
 
function getCourses () {
    httpReq('GET', 'https://golf-courses-api.herokuapp.com/courses').then(responseData => {
        currentBoard.course = responseData.courses;
        //console.log(currentBoard.course)
        renderCourses();
    });
};

function getHole (id) {
    httpReq('GET', 'https://golf-courses-api.herokuapp.com/courses/' + id).then(responseData => {

        currentBoard.holes = responseData.data.holes;
        //console.log(responseData.data.holes)
        render();
        
    });
}

document.getElementById('course-btn').addEventListener('click', getCourses)

export { httpReq, getCourses, getHole };