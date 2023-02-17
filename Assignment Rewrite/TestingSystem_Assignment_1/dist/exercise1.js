class Department {
    constructor(name) {
        this.DepartmentID = ++Department.ct;
        this.DepartmentName = name;
    }
    get name() {
        return this.DepartmentName;
    }
    set name(n) {
        this.DepartmentName = n;
    }
}
Department.ct = 0;
var Title;
(function (Title) {
    Title["Dev"] = "DEV";
    Title["Test"] = "TEST";
    Title["Scrum_Master"] = "Scrum Master";
    Title["PM"] = "PM";
})(Title || (Title = {}));
class Position {
    constructor(PositionName) {
        this.PositionName = PositionName;
        this.PositionID = ++Position.ct;
    }
}
Position.ct = 0;
class Account {
    constructor(email, username, fullname, position, department, created) {
        this.email = email;
        this.username = username;
        this.fullname = fullname;
        this.Position = position;
        this.Department = department;
        this.createdDate = created;
    }
}
Account.ct = 0;
class Group {
    constructor(name, createdDate) {
        this.GroupID = ++Group.ct;
        this.GroupName = name;
        this.createdDate = createdDate;
    }
    setAccount(account) {
        this.account = account;
    }
}
Group.ct = 0;
class GroupAccount {
    constructor(join) {
        this.groups = new Set();
        this.accounts = new Set();
        this.joinDate = join;
    }
    addGroup(group) {
        this.groups.add(group);
    }
    addAccount(account) {
        this.accounts.add(account);
    }
}
export class Exercise1 {
    constructor() { }
    print() {
        let dept1 = new Department("Accounting");
        dept1.name = "Account";
        console.log(dept1);
        let dept2 = new Department("IT");
        console.log(dept2);
        let dept3 = new Department("Sale");
        console.log(dept3);
        let po1 = new Position(Title.Dev);
        console.log(po1);
        let po2 = new Position(Title.PM);
        console.log(po2);
        let po3 = new Position(Title.Test);
        console.log(po3);
        let mark = new Account('mark@yahoo.com', 'Mark', 'Mark Twain', po1, dept1, new Date());
        console.log(mark);
        let jack = new Account('jack@yahoo.com', 'Jack', 'Jack Sparrow', po2, dept2, new Date('2022-05-12'));
        console.log(jack);
        let rose = new Account('rose@yahoo.com', 'Rose', 'Rose Mary', po3, dept3, new Date('2021-05-16'));
        console.log(rose);
        let singing = new Group('sing', new Date());
        singing.setAccount(rose);
        console.log(singing);
        let dance = new Group('dancing', new Date());
        singing.setAccount(rose);
        console.log(dance);
        let football = new Group('football', new Date());
        singing.setAccount(jack);
        console.log(football);
        let ga1 = new GroupAccount(new Date('2020-11-12'));
        ga1.addAccount(rose);
        ga1.addAccount(jack);
        ga1.addGroup(dance);
        ga1.addGroup(football);
        console.log(ga1);
    }
}
