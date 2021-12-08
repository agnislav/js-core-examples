const p = new Promise(function (resolve, reject) {
    console.log(1)
    reject();
})

p.then(() => console.log(2))