class User{
    //properties, methods, constructor
    username: string;
    age: number;
    constructor(username:string, age:number){
        this.username=username;
        this.age=age;
    }
    
    display():void{
    console.log(`username: ${this.username}, age: ${this.age}`)
}
}

let user1 = new User("Maruf Ahammed", 22);
user1.display();

//class object
//user1: Maruf ahammed, age: 22
//user1: Anisul Islam, age: 25