export class Exercise2 {
    constructor() { }
    round(salary) {
        return Math.round(salary);
    }
    question1() {
        console.log(this.round(5240.5));
        console.log(this.round(10970.055));
    }
    numRand() {
        let str = (Math.floor(Math.random() * 10000 + 1)).toString();
        console.log(str);
        let res = str;
        if (str.length < 5) {
            for (let i = 5; i > str.length; i--) {
                res = '0'.concat(res);
            }
            return res;
        }
        return str;
    }
    question2() {
        console.log(this.numRand());
    }
    twodigit() {
        return Math.floor(Math.random() * 10000 + 1) % 100;
    }
    question3() {
        console.log(this.twodigit());
    }
}
