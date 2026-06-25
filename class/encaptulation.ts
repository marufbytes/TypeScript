//public private protected

class User{
    public username: string;
    public age: number;
    constructor(username:string, age:number){
        this.username=username;
        this.age=age;
    }
    
    display():void{
        console.log("hid")
    };
}

class students extends User{
    studentId:number;

    constructor(useername: string, age:number, studentId:number){
        super(useername,age);
        this.studentId=studentId;
    }
    display():void{
    console.log(`username: ${this.username}, age: ${this.age}, id: ${this.studentId}`)
}
}
let student1 = new students("Sadib", 22, 2222);
student1.display();

let user1=new User("Maruf", 22);


