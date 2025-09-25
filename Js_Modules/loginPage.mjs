//Named Export
//  Can export multiple named exports in a file

// export let loginData = {
//     uName: "ajith",
//     uRoll: "developer"
// }

export let newEmployeeId = "Q123"

let loginData = {
    uName: "ajith",
    uRoll: "developer"
}


export function loginInfo(){
    console.log("Login Successful");
     
}
// export {loginData}