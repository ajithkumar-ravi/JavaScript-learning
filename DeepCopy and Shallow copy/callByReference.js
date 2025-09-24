/*  Call By Refrence Example

    1.primitive value stored in stack memory
    2.non-primitive value stored in heap memory

    Stack Memory

    | address | Variable           | value -> Reference/Pointer (Address) |
    |--------------------|---------------------|
    | 0x100   | obj1               | 0x001               |
    | 0x104   | arr1               | 0x002               |
    | 0x108   | obj2               | obj1 = 0x001               |
    | 0x112   | arr2               | arr1 = 0x002               |

    Heap Memory

    | Address | Object            |
    |---------|-------------------|
    | 0x001   | { name: 'Kesavan' }   |
    | 0x002   | [ 1,2,3 ]   |

*/
let obj1 = {
    name: "John"
}

let arr1 = [1, 2, 3];

let arr2 = arr1; // Shallow Copy
arr2.push(4);


let obj2 = obj1; // Shallow Copy

obj2.name = "Ajith";

console.log(obj1.name);
console.log(obj2.name);
// Both will print "Ajith" because obj1 and obj2 reference the same object in memory.

console.log(arr1, arr2);
