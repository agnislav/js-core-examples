function doIt(doLater) {
    console.log(1)
    doLater()
}

function doSomething() {
    console.log(2)
}

doIt(doSomething)

doIt(() => console.log(3))