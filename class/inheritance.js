"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    //properties, methods, constructor
    username;
    age;
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }
    display() {
        console.log(`username: ${this.username}, age: ${this.age}`);
    }
}
class students extends User {
    studentId;
    constructor(useername, age, studentId) {
        super(useername, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username: ${this.username}, age: ${this.age}, id: ${this.studentId}`);
    }
}
let student1 = new students("Sadib", 22, 2222);
student1.display();
let user1 = new User("Maruf Ahammed", 22);
user1.display();
//# sourceMappingURL=inheritance.js.map