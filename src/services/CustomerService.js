const customers = [
    {id: 1, firstName: 'Jack', lastName: 'Dany', email: 'example@email.com'},
    {id: 2, firstName: 'Sofi', lastName: 'Hook', email: 'example@email.com'},
    {id: 3, firstName: 'Jane', lastName: 'Heart', email: 'example@email.com'},
    {id: 4, firstName: 'Simon', lastName: 'Vaid', email: 'example@email.com'},
    {id: 5, firstName: 'Tara', lastName: 'Doo', email: 'example@email.com'},
];

let nextId = 6;

class CustomerService {
    list() {
        return customers;
    }
   
    remove (customer){
        customers.splice(customers.indexOf(customer), 1)
    }
    add(customer){
        customer.id = nextId
        customers.push(customer)
        nextId++
    }
}

const customerService = new CustomerService()
export default customerService

