let list = [1, 2, 3, 4, 5, 6, 7, 8]
// list.forEach(function (item) {
//     console.log(item)
// })
list.forEach(item => console.log(item))
let names = ['A', 'B', 'C']
names.forEach(item => console.log(item))

//object array
let employees = [
    {
        id: 1,
        name: 'a',
        address: {
            city: 'c1'
        }
    },
    {
        id: 2,
        name: 'b',
        address: {
            city: 'c2'
        }
    },
    {
        id: 3,
        name: 'c',
        address: {
            city: 'c3'
        }
    }
]

employees.forEach(employee=>{
    // console.log(employee)
    console.log(employee.id,employee.name,employee.address.city)
})