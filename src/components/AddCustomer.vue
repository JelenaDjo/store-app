<template>
    <div>
        <h3> Add new customer </h3>
        <form @submit.prevent="addCustomer">
            <input v-model="newCustomer.firstName" type="text" placeholder="Enter your name" />
            <input v-model="newCustomer.lastName" type="text" placeholder="Enter your last name" />
            <input v-model="newCustomer.email" type="text" placeholder="Enter your email" />
            <button class="btn btn-primary" type="submit"> ADD </button>
        </form>
    </div>
</template>


<script>

import customerService from '../services/CustomerService'

export default {
    data(){
        return { newCustomer: {},}
    },
    methods: {
        addCustomer(){
            customerService.add(this.newCustomer)
            this.newCustomer = {}
            this.$router.push({ path: '/customers' })
        }
    }
}


</script>
