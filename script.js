// document.getElementById('h1').addEventListener('click', function() {
//     document.getElementById('test').style.display = 'flex';
//     document.getElementById('h1-score').style.display = 'none';
// })

document.getElementById('row-p1').addEventListener('click', function(e) {
    let findId = function(id) {
        let newArr = id.split('_');
        return newArr[1];
    }
    let splitId = findId(e.target.id);
    let showInput = function(x) {
        document.getElementById('input_' + x).style.display = 'flex';
        document.getElementById('score_' + x).style.display = 'none';
        console.log("this is gonna show " + x);
    }
    showInput(splitId);
})
// console.log(rickey);
