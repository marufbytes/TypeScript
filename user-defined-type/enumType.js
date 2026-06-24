"use strict";
//no duplicate value is allowed
//types: numaric, sting, herergenous
Object.defineProperty(exports, "__esModule", { value: true });
//Numaric
var userRequestType;
(function (userRequestType) {
    userRequestType[userRequestType["readData"] = 1] = "readData";
    userRequestType[userRequestType["saveData"] = 3] = "saveData";
    userRequestType[userRequestType["deleteData"] = 4] = "deleteData";
})(userRequestType || (userRequestType = {}));
console.log(userRequestType);
//Sring
var requestType;
(function (requestType) {
    requestType["readData"] = "Read Data";
    requestType["deleteData"] = "Delete data";
})(requestType || (requestType = {}));
//# sourceMappingURL=enumType.js.map