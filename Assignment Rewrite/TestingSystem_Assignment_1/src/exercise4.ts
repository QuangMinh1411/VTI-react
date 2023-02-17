import { parseIsolatedEntityName } from "typescript";

export class Exercise4 {
    constructor(){}
    public question1(){
        let fullname:string = 'Mark Athur';
        console.log('Global scope:' + fullname);
        let block = ()=>{
            let fullname = 'Andy Inch';
            console.log('Block scope: ' + fullname)
        }
        block();
        let lexical = ()=>{
            console.log('Lexical scope: ' + fullname);
        }
        lexical();
    }

    public question2(){
        let myName = (name:string)=>console.log('Your name: ' + name);
        myName('John Wich');
    }

    public question3() {
        let getGreeting = (fName:string,lName:string)=>{
            function greeting(): string{
                return fName +" "+lName;
            }
            console.log(greeting());

        }
    }

    public question4(num:number) {

        setInterval(()=>{
            let i = 0;
            for(i=0;i<num;i++){
                console.log(i);
                if(i===num)
                    i=0
            }
        },1000)
    }

    public question5(){
        function setSql(num:number){
            return {
                num,
                result: num*num
            }
        }
        console.log(setSql(5));
    }

    public question6(){
        var person = function(name:string,id:number=0) {
            
            return {
                id:id++,
                name,      
                getId: ()=>id,
                setId: (num:number)=>{
                    id=num
                },
                setName: (name:string)=>{
                    name=name
                },
                getName:()=>name
                
            }
        }
        let p1 = person('John');
        let p2 = person('Mark');
        console.log(p1.getId() +":"+ p1.getName());
        console.log(p2.getId() +":"+ p2.getName());
    }

}