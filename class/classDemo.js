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
let user1 = new User("Maruf Ahammed", 22);
user1.display();
//class object
//user1: Maruf ahammed, age: 22
//user1: Anisul Islam, age: 25
//# sourceMappingURL=classDemo.js.map