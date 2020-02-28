<template>
  <v-card  fluid>
    <v-toolbar dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
          
        <router-link class="home" to="/">Tracker</router-link>
          
          </v-toolbar-title>
<v-spacer></v-spacer>

    <v-toolbar-items>
         <v-btn
         small
         dark
         :to="{name:'Songs'}">
         Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer> 
     <v-toolbar-items>
        <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        small
        dark
        color="success"
        :to="{
          name: 'Login'
        }">
        Login
      </v-btn>
        <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        dark
        color="primary"
        small
        :to="{
          name: 'Register'
        }">
        Sign Up
      </v-btn>

      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        dark
        small
        @click="logout"
        >
        Log Out
      </v-btn>
    </v-toolbar-items>
   
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods:{
    // navigateTo (route){
    //   this.$router.push(route)
    // },
    logout(){
      this.$store.dispatch('setToken', null),
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover{
    color:#D32F2F; 
}
</style>
