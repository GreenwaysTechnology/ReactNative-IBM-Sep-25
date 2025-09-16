
// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 23.78
//     }
// }
// function getStock(id = 1, symbol = 'OpenAI', qty = 1, price = 8000) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// function getStock(id = 1, symbol = 'OpenAI', qty = 1, price = 8000) {
//     //if left : right , key: value if same , remove any one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// const getStock = (id = 1, symbol = 'OpenAI', qty = 1, price = 8000) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
const getStock = (id = 1, symbol = 'OpenAI', qty = 1, price = 8000) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStock(1, 'google', 100, 1000))
console.log(getStock())