// Deep copy - indipendent value. it should have a different address in memory

//------------------ For Primitive Data Types --------------
let a = 10;
let b = a; // Deep Copy

a = 20;
console.log(a, b); // 20, 10

// -----------------------For Non-Primitive Data Types--------------------

let obj1 = {
    name: "Ajith",
    roll: "Developer"
}

/*
let obj2 = obj1; 
shoud not assinn like this. it will create a shallow copy. it affect the original object

*/

// correct way 

let obj2 = {...obj1}; // Deep Copy using spread operator
obj2.name = "Vijay";
obj2.age = 30; 

console.log(obj1);
console.log(obj2);
