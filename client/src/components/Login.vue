<template>
<div id="register">
  <v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="black" dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-text-field
          v-model="email"
          name="input1"
          label="Email"
          value="Input text">
        </v-text-field>
        <v-text-field
          v-model="password"
          name="input2"
          label="Password"
          value="Input text"> 
        </v-text-field>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
        class="blue"
        @click="login"
        >Login</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</div>

</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
        email:'',
        password: '',
        error: null
    }
  },
  methods: {
    async login() {
     try{
        const response = await AuthService.login({
            email: this.email,
            password: this.password
        })
     } catch (error){
       this.error = error.response.data.error
     }
       
        console.log('login button has been clicked', this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red
}
#register{
  margin-top: 40px;
  padding-right: 50px; 
  padding-left: 0px; 
  margin-right: 50px; 
  position: center;
}
</style>
