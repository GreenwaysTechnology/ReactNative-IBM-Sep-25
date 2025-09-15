let multiply = () => {
    console.log('multiply')
}
multiply()

//arrow with params
multiply = (a = 0, b = 0) => {
    console.log(a, b)
}
multiply()
//if function body has only one line , we can remove {}
multiply = (a = 0, b = 0) => console.log(a, b)

multiply()

//return value and arrow
multiply = (a = 0, b = 0) => {
    return a * b
}
console.log(multiply(2, 3))

//if function has only return value, we can remove {} and return statement/word
multiply = (a = 0, b = 0) => a * b
console.log(multiply(2, 3))