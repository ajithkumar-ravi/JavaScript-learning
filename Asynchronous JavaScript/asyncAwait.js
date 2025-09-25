let newPromise = new Promise((resolve, reject) => {
    let dataRecieved = true;

    if(dataRecieved){
        resolve("Data Recieved Successfully");
    }else{
        reject("Data Not Recieved");
    }
});

// newPromise.then((message) => console.log(message));


