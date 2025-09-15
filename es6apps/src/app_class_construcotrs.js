class Employee {
    //instance variables
    id 
    name
    salary
    //constructors
    constructor(id=0, name='Subramanian', salary=0) {
        this.id = id
        this.name = name
        this.salary = salary
    }
}
let emp = new Employee(12, 'Ram', 10000)
console.log(emp.id, emp.name, emp.salary)

emp = new Employee()
console.log(emp.id, emp.name, emp.salary)