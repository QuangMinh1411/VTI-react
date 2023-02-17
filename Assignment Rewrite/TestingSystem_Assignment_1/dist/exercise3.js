export class Exercise3 {
    constructor() { }
    print() {
        const strs = ["a", "b", "c", "d", "e"];
        strs.forEach(str => {
            console.log(strs.indexOf(str), str);
        });
    }
}
