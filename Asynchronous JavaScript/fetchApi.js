fetch("https://fakestoreapi.com/products/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data is not Recieved");
    }
    else{
      console.log(response.ok); // ok property only return true and false value
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Data is not Recieved:", error.message);
  })

// console.log(fetchData);




//------------------------

//  .then((response) => {
//     if (!response.ok) {
//       throw new Error("Data is not Recieved");
//     } 
//     else {
//       console.log(response.ok); // ok property only return true and false value
//       return response.json().
//       then((data) => console.log(data)).
//       catch((error) => {
//         console.log(error.message)
//     });

//     }

//   })