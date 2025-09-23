//-------------------Object assign--------------------

let person = {
    Name: "ajith",
    age: "20"
}

Object.assign(person, { Dept: "CSE", Degree: "BE", Percentage: 80})
// console.log(person);


//---------------Object Entries
// Object.entries is used to convert object into arr

let employee = {
    eName: "Ak",
    eRoll : "Backend Dev"
}

console.log(employee);
let multiArr = Object.entries(employee)
let multiArrVal = console.log(multiArr);


//---------------Object FromEntries------------
// FromEntries is used for converting array into object

let narmalObj = Object.fromEntries(multiArr)
console.log(narmalObj);


//---------------Object.keys------------
//  It is used for separating keys only

let onlyKeys = Object.keys(person)
console.log(onlyKeys);

