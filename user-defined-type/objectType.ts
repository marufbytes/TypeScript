let users : object[];
users=[];

let user1 : {username:string , userId?:number};  //? means optional 
user1 = {username:"Maruf", userId:101}
console.log(user1);
users.push(user1);

let user2 : {username:string , userId?:number};  //? means optional 
user2 = {username:"Tamjid", userId:102}
console.log(user2);
users.push(user2);

console.log(users)