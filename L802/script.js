let p1 = new Promise ((resolve) => {
    setTimeout(
        () => {
            let date = new Date();
            let sec = date.getSeconds();
            resolve(sec);
        },
        10000
    )
});

let p2 = new Promise ((resolve) => {
    setTimeout(
        () => {
            let date = new Date();
            let min = date.getMinutes();
            resolve(min);
        },
        20000
    )
});

let p3 = new Promise ((resolve) => {
    let date = new Date();
    let hr = date.getHours();
    resolve(hr);
});

Promise.all([p1, p2, p3]).then(
    values => {
        let sum = values.reduce((total, num) => total + num);
        alert(sum);
    }   
)

