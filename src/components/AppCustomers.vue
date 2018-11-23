<template>
<div>
    <h1>Customers</h1>
    <table border=1>
        <thead>
            <th>Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th> Remove Customer</th>
        </thead>
        <tbody>
            <tr v-for="customer in customers" :key="customer.id">
                <th> {{customer.id}} </th>
                <th> {{customer.firstName}} </th>
                <th> {{customer.lastName}} </th>
                <th> {{customer.email}} </th>
                <th>
                    <button class="btn btn-danger" 
                    @click.prevent="removeCustomer(customer)"> Remove this customer </button> 
                </th>
            </tr>
        </tbody>
    </table>
</div>
</template>



<script>

import customerService from '../services/CustomerService.js'

export default {
    data () {
        return {
            customers: customerService.list(),
        }
    },
    methods: {
        removeCustomer(customer){
            customerService.remove(customer)
        }
    },
    computed: {

    }
}
</script>

