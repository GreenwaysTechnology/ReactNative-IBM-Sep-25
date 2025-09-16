function sayHello() {
    return Promise.resolve('hello Promise')
}

function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    sayHello().then(result=>console.log(result))
    blockMe('end')
}
main()