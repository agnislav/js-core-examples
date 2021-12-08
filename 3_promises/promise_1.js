const p = new Promise(function (resolve, reject) {
    console.log(1)
    resolve();
})

p.then(() => console.log(2))