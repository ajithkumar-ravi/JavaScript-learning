//Default Export
//   Can export only one default export in a file
let signUpData = {
    uName: "john",
    uRoll: "tester",
    age: 25
}

// export default signUpData;

export default function signUpInfo(){
    console.log(signUpData);
}
