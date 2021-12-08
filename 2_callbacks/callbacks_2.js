function doIt(doLater) {
    console.log(1)
    doLater()
}

function doSomething() {
    console.log(2)
}

setTimeout(() => doIt(doSomething), 0)

const a = new Promise((resolve, reject) => {
    console.log(3)
    resolve()
})
a.then(doSomething)
