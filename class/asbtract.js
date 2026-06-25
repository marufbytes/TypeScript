"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    username;
    age;
    constructor(username, age) {
        this.username = username;
        this.age = age;
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
//# sourceMappingURL=asbtract.js.map