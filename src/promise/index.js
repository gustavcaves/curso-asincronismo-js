const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Whoops!");
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        } else {
            const error = new Error("Woops!");
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log("Array of results", response);
    })
    .catch(err => {
        console.error(err);
    })



// let promesa12 = new Promise((response, reject) => {
//     console.log("Promesa pendiente");
//     setTimeout(() => {
//         response("Promesa Resuelta")
//     }, 2000);

//     setTimeout(() => {
//         reject("Promesa Rechazada")
//     }, 3000)
// });

// promesa12
//     .then((response) => {
//         console.log("Response", response);
//     })
//     .catch((error) => {
//         console.log("Error: ", error)
//     })