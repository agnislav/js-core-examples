async function f1() {}
const f2 = async () => 'I wanna rock'

f1().then(() => console.log('a'))
f2().then(value => console.log(value))