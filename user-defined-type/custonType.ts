
type User =  {username:string , userId?:number}
let users : User[];
users=[];

let user1 : User; 
user1 = {username:"Maruf", userId:101}
console.log(user1);
users.push(user1);

let user2 : User; 
user2 = {username:"Tamjid", userId:102}
console.log(user2);
users.push(user2);

let user3 : User; 
user3 = {username:"Jhankar", userId:103}
console.log(user3);
users.push(user3);

console.log(users)

type Request = "GET" | "POST";
let getRequest : Request;
getRequest="GET"


function requestHandler (requestType:Request){
    console.log(requestType)
}
requestHandler("GET");
