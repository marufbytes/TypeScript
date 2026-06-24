"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users;
users = [];
let user1;
user1 = { username: "Maruf", userId: 101 };
console.log(user1);
users.push(user1);
let user2;
user2 = { username: "Tamjid", userId: 102 };
console.log(user2);
users.push(user2);
let user3;
user3 = { username: "Jhankar", userId: 103 };
console.log(user3);
users.push(user3);
console.log(users);
let getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
//# sourceMappingURL=custonType.js.map