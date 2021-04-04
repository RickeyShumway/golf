
class Player {
    constructor(name, teeColor) {
        this.name = name;
        this.teeColor = teeColor;
        this.strokes = this.out + this.in;
        this.out = 0;
        this.in = 0;
        this.hole = [];
    }

    score (hole, score) {
        let out = 0;
        let inn = 0;
        this.hole[hole] = score;
        for(let i = 1; i <=18; i++) {
            if(i <= 9) {
                out+=this.hole[i];
            } else {
                inn+=this.hole[i];
            }
        }
        this.out = out;
        this.in = inn;
    }

    editPlayer(prop, newProp) {
        this[prop] = newProp;
    }
}

let rickey = new Player("rickey", "white", 10);
rickey.score(1, 4);
rickey.editPlayer('teeColor', "red")
export { rickey, Player };