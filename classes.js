
class Player {
    constructor(name) {
        this.name = name;
        this.holeScore = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        this.out = 0;
        this.in = 0;
        this.total = 0;
        this.finished = false;
    }
    editName(change) {
        if(change !== '') {
            this.name = change;
        }
    }
    score(hole, score) {
        let value;
        if(score == "") {
            value = 0;
        } else {
            value = parseInt(score);
        }
            this.holeScore[hole-1] = value;
            this.out = 0;
            this.in = 0;
            this.total = 0;
            for(let i = 0; i < this.holeScore.length; i++) {
                if(this.holeScore[i]) {
                    if(i < 8) {
                        this.total += parseInt(this.holeScore[i]);
                        this.out += parseInt(this.holeScore[i]);
                        this.finished = true;
                    } else {
                        this.total += parseInt(this.holeScore[i]);
                        this.in += parseInt(this.holeScore[i]);
                        this.finished = true;

                    }
                } else {
                    this.finished = false;
                }
            }
    }

    out () {
        let out = this.holeScore.slice(0, 9)
        return out.reduce((a, b) => a + b, 0);
    }
    in () {
        let inScore= this.holeScore.slice(9, 18)
        return inScore.reduce((a, b) => a + b, 0);
    }
    total() {
        let reduction =  this.holeScore.reduce((a, b) => a + b, 0);
        return reduction;
    }
}
export { Player };