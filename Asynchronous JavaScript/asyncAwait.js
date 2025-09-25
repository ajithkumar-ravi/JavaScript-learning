let newPromise = new Promise((resolve, reject) => {
    let dataRecieved = false;

    if(dataRecieved){
        resolve("Data Recieved Successfully");
    }else{
        reject("Data Not Recieved");
    }
});

// newPromise.then((message) => console.log(message));

async function executePromise(){
    try{
        let response = await newPromise;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Promise is Settled");
    }

}

executePromise()
console.log("last");
