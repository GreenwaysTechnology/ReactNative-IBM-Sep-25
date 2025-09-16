// function printEmployee(employee) {
//     console.log(`Id : ${employee.id}`)
//     console.log(`Name : ${employee.name}`)
//     console.log(`City : ${employee.address.city}`)
// }

//print object properties using object destructuring

// function printEmployee(employee) {
//     const { id, name, address } = employee
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${address.city}`)
// }
// function printEmployee(employee) {
//     const { id, name, address: { city } } = employee
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }

// function printEmployee({ id, name, address: { city } }) {
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }
const printEmployee = ({ id, name, address: { city } }) => {
    console.log(`Id : ${id}`)
    console.log(`Name : ${name}`)
    console.log(`City : ${city}`)
}
printEmployee({
    id: 1, name: 'Subramanian', address: {
        city: 'Coimbatore'
    }
})