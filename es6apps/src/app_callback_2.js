function sayHello(callback) {
    setTimeout(callback, 1000,'Hello from timer')
}

function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    sayHello(function (message) {
        console.log(message)
    })
    blockMe('end')
}
main()