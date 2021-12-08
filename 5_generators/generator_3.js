function* infinite() {
    console.log(8)
    let index = 0;

    while (true) {
        console.log(9)
        yield index++;
    }
}

const generator = infinite();

setTimeout(() => console.log(generator.next().value), 1000);
setTimeout(() => console.log(generator.next().value), 3000);