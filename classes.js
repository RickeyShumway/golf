
class Player {
    constructor(name) {
        this.name = name;
        this.strokes = this.out + this.in;
        this.out = 0;
        this.in = 0;
        this.holeScore = [];
    }

    score (hole, score) {
        let out = 0;
        let inn = 0;
        this.holeScore[hole] = score;
        for(let i = 1; i <=18; i++) {
            if(i <= 9) {
                out+=this.holeScore[i];
            } else {
                inn+=this.holeScore[i];
            }
        }
        this.out = out;
        this.in = inn;
    }

    editName(prop, value) {
        this[prop] = value;
    }
}

export { Player };