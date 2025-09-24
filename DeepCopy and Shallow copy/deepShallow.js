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

// console.log(obj1);
// console.log(obj2);





//--------------------- Shallow Copy --------------------

let person1 = {
    name: "Suriya",
    roll: "Actor",
    address: {
        city: "Chennai",
        pincode: 600001
    }
}

// how to create a independent copy for reference type

let person2 = {...person1, address: {...person1.address}}; // Shallow Copy using spread operator
person2.roll = "Producer"; 


person2.address.city = "Mumbai";
person2.address.pincode = 400001;

console.log(person1);
console.log(person2);




/* 
    premitive and non premitive both data types should have a different address in memory is called "Deep copy"

    */