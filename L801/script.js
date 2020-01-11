let promise = new Promise((resolve, reject) => {
    setTimeout(
        () => {
            let date = new Date();
            let minutes = date.getMinutes();

            if((minutes) % 2 == 0) {
                resolve(minutes);
            }
            else
                reject(new Error('Incorrect time'));
        }, 
        10000
    )
})

promise.then(
    result => {
        alert(`Fulfilled: ${result}`);
    },
    error => {
        alert(`Rejected: ${error.message}`);
    }   
)



  