const p = new Promise(function (resolve, reject) {
    console.log(1)
    reject();
})

p.then(() => console.log(2))
.catch(() => console.log('AAAAAAAA WE GONNA DIIIIEEEEE'))
