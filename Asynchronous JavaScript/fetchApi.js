fetch("https://fakestoreapi.com/products/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data is not Recieved");
    }
    console.log(response.ok); // ok property only return true and false value
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Data is not Recieved:", error.message);
  });

//-----------using async await-----------------

async function fetchData() {
  try {
    let response = await fetch("https://fakestoreapi.com/products/1");

    if (!response.ok) {
      throw new Error("DATA IS NOT RECIEVED");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    error.message;
  }
}

fetchData();
