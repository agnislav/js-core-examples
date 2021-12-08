const f1 = async () => 'I wanna rock'

async function f2() {
    const text = await f1()
    console.log(text)
}

f2()