<template>

<div>

<h1>Register</h1>
<input
v-model="email"
type="email" 
name="email" 
placeholder="Enter your emaill" /> <br>
<input 
v-model="password"
type="password" 
name="password" 
placeholder="Password"/>
<br>
<button
@click="register"
>Register</button>
</div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
        email:'',
        password: ''
    }
  },
  methods: {
    async register() {
        const response = await AuthService.register({
            email: this.email,
            password: this.password
        })
        console.log('register button has been clicked', this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
