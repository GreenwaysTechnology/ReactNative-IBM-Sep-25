function sayHello(cb) {
    setTimeout(cb, 1000, 'Hello from timer')
}

function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    sayHello(message => console.log(message))
    blockMe('end')
}
main()