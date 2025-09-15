
function connect(cb) {
    cb('hello')
}
let hello = function (message) {
    console.log(message)
}
connect(hello)

connect(function (message) {
    console.log(message)
})