//  if function receives input, the function returns the input without any mutation...

//this function is called pure function
// function Hello(message) {
//     return message
// }

//this function is impure function
function Hello(message) {
    return message.toUpperCase()
}
console.log(Hello('hello'))