
//message,cb variables
//message = string
//cb =function
function connect(message, cb) {
    cb(message)
}
let hello = function (message) {
    console.log(message)
}
connect('hello', hello)

connect('hai',function (message) {
    console.log(message)
})

connect(12,90)