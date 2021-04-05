// console.log('this is a test')
// $.getJSON("https://golf-courses-api.herokuapp.com/courses", function() {

// })
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
        console.log(responseData);
    });
};

function getHole (id) {
    httpReq('GET', 'https://golf-courses-api.herokuapp.com/courses/' + id).then(responseData => {
        console.log(responseData)
    });
}

document.getElementById('course-btn').addEventListener('click', ()=> {getHole(11819)})