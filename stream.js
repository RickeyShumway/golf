import { Player } from './classes.js';
import { httpReq, getCourses, getHole } from './api.js'
import { renderHoleInfo, renderScore } from './newrender.js';

let currentBoard = {
    players: [],
    courseList:[],
    selectedCourse: [],
    selectedId: null,
    parTotal: null,
    selectedCourseName: null,
    tee: 0,
    addPlayer: function (name, num) {
        let newPlayer = new Player(name);
        this.players[num] = newPlayer;
    },
    changeTee (color) {
        let teeOrder;
        switch (color) {
            case 'black':
                teeOrder = 0;
                break;
            case 'blue':
                teeOrder = 1;
                break;
            case 'white':
                teeOrder = 2;
                break;
            case 'red':
                teeOrder = 3;
                break;
        }
        this.tee = teeOrder;
        console.log('did this chang it')
    },
    async findProp(prop) {
        let holder = [];
        let tee = this.tee;
        for(let i = 0; i < 18; i++) {
            await holder.push(this.selectedCourse[i].teeBoxes[tee].prop);
        }
        return holder;
    },
    async addTotal(prop) {
        let temp = findProp(prop);
        let reduction =  temp.reduce((a, b) => a + b, 0);
        return reduction;
    },
    async selectCourse(id) {
        let course = await getHole(id);
        this.selectedCourse = course;
        let render = await renderHoleInfo();
        // console.log("these are teh holes", this.selectedCourse)
    },
    
    finishedHoles() {
        let spread;
        for(let i=0; i<5; i++) {
            if(this.players[i]) {
                if(this.players[i].finished) {
                    console.log('finished')
                    let spread = this.players[i].total-this.parTotal;
                    console.log('partotal', this.parTotal, spread);
                    if (spread < 0) {
                        document.getElementById(i +'message').innerHTML = `${currentBoard.players[i].name}, you scored ${spread} under par. PGA tour here we come!`;
                         } else if(spread == 0) {
                            document.getElementById(i+'message').innerHTML = `${currentBoard.players[i].name}, you scored par ${spread}`;
                        } else {
                            document.getElementById(i+'message').innerHTML = `${currentBoard.players[i].name}, you scored ${spread} above par. Keep working!`;
                        }
                        document.getElementById(i+'message').style.display = 'flex';
                    
                }
                console.log('finished!',this.players[i].finished)
            }
        }
    }
}
//     finishedHoles() {
//         let spread;
//         for(let i=0; i<4; i++) {
//             if(this.players[i].finished == true) {
//                 spread = this.parTotal - this.players[i];
//             }
//             if (spread < 0) {
//                 return "You got" + spread +"! Next stop, PGA tour!"
//             } else if(spread == 0) {
//                 return "Par" + spread;
//             } else {
//                 return "Keep working!" + spread;
//             }

//         }
//     }
// }
currentBoard.addPlayer("Player 1", 1)
currentBoard.addPlayer("Player 2", 2)
currentBoard.addPlayer("Player 3", 3)
currentBoard.addPlayer("Player 4", 4)
renderScore();
// currentBoard.addPlayer('rickey');
// currentBoard.addPlayer('rickey');

// currentBoard.changeTee('black');
// currentBoard.players[0].score(1,3)
// currentBoard.players[0].score(2,3)
// currentBoard.players[0].score(3,3)
// currentBoard.players[0].score(4,3)
// currentBoard.players[0].score(5,3)
// currentBoard.players[0].score(6,3)
// currentBoard.players[0].score(7,3)
// currentBoard.players[0].score(8,3)
// currentBoard.players[0].score(9,3)
// currentBoard.players[0].score(10,3)
// currentBoard.players[0].score(11,3)
// currentBoard.players[0].score(12,3)
// currentBoard.players[0].score(13,3)
// currentBoard.players[0].score(14,3)
// currentBoard.players[0].score(15,3)
// currentBoard.players[0].score(16,3)
// currentBoard.players[0].score(17,3)
// currentBoard.players[0].score(18,3)

// console.log(currentBoard.players[0].out())
// console.log(currentBoard.players[0].in())
// console.log(currentBoard.players[0].total())
// console.log(currentBoard.players)
export { currentBoard }