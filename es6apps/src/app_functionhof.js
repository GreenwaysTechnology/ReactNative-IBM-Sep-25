
function add(a, b) {
    return a + b
}
//passing value
//via variable
let x = 10
let y = 20
console.log(add(x, y))

//via values directly
console.log(add(20, 30))
///////////////////////////////////////////////////////////////////////////////////////////

function connect(cb) {
    cb()
}
let hello = function () {
    console.log('hello')
}
connect(hello)

connect(function () {
    console.log('hai')
})