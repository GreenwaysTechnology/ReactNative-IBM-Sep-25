import { firstName, lastName, skills, status, address } from "./lib/mylib.js"
// import { CustomerService } from "./services/customer.service.js"
import CustomerService, { data } from "./services/customer.service.js"

function main() {
    console.log(firstName, lastName, skills, status, address)
    let cust = new CustomerService()
    console.log(cust.findAll(),data)
}
main()