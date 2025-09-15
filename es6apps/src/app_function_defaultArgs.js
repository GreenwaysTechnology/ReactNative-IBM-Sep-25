//default args
function add(a = 0, b = 0) {
    let c = a + b
    console.log(`a ${a} b ${b} ${c}`)
}
add(10, 10)
//undefined
add()