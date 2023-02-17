export class Exercise2 {
    constructor(){}
    private round(salary:number):number {
        return Math.round(salary);
    }
    public question1():void{
        console.log(this.round(5240.5));
        console.log(this.round(10970.055))
    }

    private numRand():string{
        let str = (Math.floor(Math.random()*10000+1)).toString();
        console.log(str)
        
        let res =str;
        if(str.length<5){
            for(let i=5;i>str.length;i--){
                
                res = '0'.concat(res);

            }
            return res;
        }
        return str;
    }
    public question2():void{
        console.log(this.numRand());
    }

    private twodigit():number{
        return Math.floor(Math.random()*10000+1)%100;
    }

    public question3():void{
        console.log(this.twodigit());
    }

}