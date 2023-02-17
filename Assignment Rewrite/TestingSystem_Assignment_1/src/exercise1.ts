class Department {
        private static ct = 0
        private DepartmentID:number
        private DepartmentName:string
    
        constructor(name:string){
            this.DepartmentID = ++Department.ct
            this.DepartmentName = name
        }
    
        get name(){
            return this.DepartmentName;
        }
    
        set name(n:string){
            this.DepartmentName = n
        }
        
    }
    
    enum Title {
        Dev='DEV',Test='TEST',Scrum_Master='Scrum Master',PM = 'PM' 
    }
    
    class Position {
        private static ct = 0
        private PositionID :number
        constructor(private PositionName:Title){
            this.PositionID = ++Position.ct;
        }
    }
    
    class Account {
        private static ct = 0
        private email:string
        private username:string
        private fullname:string
        private Position: Position
        private Department:Department
        private createdDate: Date
        constructor(email:string,username:string,fullname:string,position:Position,department:Department,created:Date){
            this.email = email;
            this.username = username;
            this.fullname = fullname;
            this.Position = position;
            this.Department = department;
            this.createdDate = created;
        }
        
    }
    
    class Group {
        private static ct = 0
        private GroupID:number
        private GroupName:string
        private account: Account | undefined
        private createdDate :Date
        constructor(name:string,createdDate:Date){
            this.GroupID = ++Group.ct;
            this.GroupName = name;
            this.createdDate = createdDate
        }
        public setAccount(account:Account){
            this.account = account
        }
    
    }
    
    class GroupAccount {
        private groups:Set<Group> = new Set()
        private accounts:Set<Account> = new Set()
        
        private joinDate: Date
        constructor(join:Date){
            this.joinDate=join
        }
    
        public addGroup(group:Group){
            this.groups.add(group)
        }
    
        public addAccount(account:Account){
            this.accounts.add(account)
        }
    
    }

export class Exercise1 {
    constructor(){}
    public print():void{
        let dept1 = new Department("Accounting");
dept1.name = "Account";
console.log(dept1)
let dept2 = new Department("IT");
console.log(dept2)
let dept3 = new Department("Sale");
console.log(dept3);

let po1 = new Position(Title.Dev);
console.log(po1);

let po2 = new Position(Title.PM);
console.log(po2)

let po3 = new Position(Title.Test);
console.log(po3)


let mark = new Account('mark@yahoo.com','Mark','Mark Twain',po1,dept1,new Date());
console.log(mark)

let jack = new Account('jack@yahoo.com','Jack','Jack Sparrow',po2,dept2,new Date('2022-05-12'));
console.log(jack)

let rose = new Account('rose@yahoo.com','Rose','Rose Mary',po3,dept3,new Date('2021-05-16'));
console.log(rose)


let singing = new Group('sing',new Date());
singing.setAccount(rose);
console.log(singing)

let dance = new Group('dancing',new Date());
singing.setAccount(rose);
console.log(dance)

let football = new Group('football',new Date());
singing.setAccount(jack);
console.log(football)

let ga1 = new GroupAccount(new Date('2020-11-12'));
ga1.addAccount(rose);
ga1.addAccount(jack);
ga1.addGroup(dance);
ga1.addGroup(football);
console.log(ga1)

    }
}

