class EmployeeService {

    findAll() {
        return 'findAll'
    }
    save = () => {
        return 'save'
    }
}
let empService = new EmployeeService()
console.log(empService.findAll())
console.log(empService.save())
