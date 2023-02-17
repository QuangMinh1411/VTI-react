export class Exercise4 {
    constructor() { }
    question1() {
        let fullname = 'Mark Athur';
        console.log('Global scope:' + fullname);
        let block = () => {
            let fullname = 'Andy Inch';
            console.log('Block scope: ' + fullname);
        };
        block();
        let lexical = () => {
            console.log('Lexical scope: ' + fullname);
        };
        lexical();
    }
    question2() {
        let myName = (name) => console.log('Your name: ' + name);
        myName('John Wich');
    }
    question3() {
        let getGreeting = (fName, lName) => {
            function greeting() {
                return fName + " " + lName;
            }
            console.log(greeting());
        };
    }
    question4(num) {
        setInterval(() => {
            let i = 0;
            for (i = 0; i < num; i++) {
                console.log(i);
                if (i === num)
                    i = 0;
            }
        }, 1000);
    }
    question5() {
        function setSql(num) {
            return {
                num,
                result: num * num
            };
        }
        console.log(setSql(5));
    }
    question6() {
        var person = function (name, id = 0) {
            return {
                id: id++,
                name,
                getId: () => id,
                setId: (num) => {
                    id = num;
                },
                setName: (name) => {
                    name = name;
                },
                getName: () => name
            };
        };
        let p1 = person('John');
        let p2 = person('Mark');
        console.log(p1.getId() + ":" + p1.getName());
        console.log(p2.getId() + ":" + p2.getName());
    }
}
