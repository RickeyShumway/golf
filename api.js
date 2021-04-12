// import { currentBoard }  from './script.js';
import { Player } from './classes.js';
import { render, renderCourses } from './render.js';
import { currentBoard } from './stream.js';

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

async function getCourses () {
    try {
        const response = await httpReq('GET', 'https://golf-courses-api.herokuapp.com/courses');
        return response.courses
    } catch (err) {
        console.log('err')
    }
};
async function getHole (id) {
    try {
        const response = await httpReq('GET', 'https://golf-courses-api.herokuapp.com/courses/' + id);
        console.log('this is the name', response.data.name)
        currentBoard.selectedId = response.data.id;
        currentBoard.selectedCourseName = response.data.name;
        return response.data.holes;
    } catch (err) {
        console.log(err);
    }
};



export { httpReq, getCourses, getHole };

// function getCourses () {
//     httpReq('GET', 'https://golf-courses-api.herokuapp.com/courses').then(responseData => {
//     console.log(responseData.courses)    
//     return responseData.courses;
//     });
// };
// function getHole (id) {
//     httpReq('GET', 'https://golf-courses-api.herokuapp.com/courses/' + id).then(responseData => {
//         return responseData.data.holes;
//     });
// }

// function httpReq (method, url) {
//     let promise = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType ='json';
//         xhr.addEventListener('load', function () {
//             resolve(xhr.response);
//         })
//         xhr.send();
//     });
//     return promise;
// };
// async function getCourses () {
//     return httpReq('GET', 'https://golf-courses-api.herokuapp.com/courses').then(responseData => {
//         console.log("it it working", responseData.courses)
//         return responseData.courses;
//     }).catch(error => console.log('error')
//     );
// };
// async function getHole (id) {
//     return httpReq('GET', 'https://golf-courses-api.herokuapp.com/courses/' + id).then(responseData => {
//         console.log(responseData.data.holes)
//         return responseData.data.holes;
//     }).catch(error => console.log('error')
//     );
// }

// document.getElementById('course-btn').addEventListener('click', getCourses)