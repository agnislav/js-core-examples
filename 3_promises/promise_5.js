const p = new Promise(function (resolve, reject) {
    console.log(1)
    resolve();
})

p.then(() => {
    console.log(2)
    throw new Error('BIG BADA BOOM')
})
    .catch(() => console.log('AAAAAAAA WE GONNA DIIIIEEEEE'))
    .then(() => {
        console.log(3)
        throw new Error('BIG BADA BOOM')
    })
    .catch(() => console.log('AAAAAAAA WE GONNA DIIIIEEEEE AGAAAAAAAAIINNNNNNN'))
