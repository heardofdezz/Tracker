<template>
<div id="register">
  <v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="black" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <form name="tracker-signup-form" autocomplete="off">
        <v-text-field
          v-model="email"
          name="input1"
          label="Email"
          value="Input text">
        </v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          name="input2"
          label="Password"
          autocomplete="new-password"
          value="Input text"> 
        </v-text-field>
        </form>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
        class="blue"
        @click="register"
        >Register</v-btn>
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
    async register() {
     try{
        const response = await AuthService.register({
            email: this.email,
            password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
     } catch (error){
       this.error = error.response.data.error
     }    
        console.log('register button has been clicked', this.email, this.password)
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
