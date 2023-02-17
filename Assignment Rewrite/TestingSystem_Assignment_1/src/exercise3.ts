export class Exercise3 {
    constructor(){}
    public print():void {
        const strs = ["a","b","c","d","e"];
        strs.forEach(str=>{
            
            console.log(strs.indexOf(str),str);
        });

    }
}