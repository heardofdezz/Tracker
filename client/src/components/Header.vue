<template>
  <v-card >
    <v-toolbar dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
          
        <router-link class="home" to="/">Tracker</router-link>
          
          </v-toolbar-title>
<v-spacer></v-spacer>

    <!-- <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <router-link to="register">
            <v-btn raised dark>Sign Up</v-btn>
        </router-link>
        <router-link to="login">
            <v-btn raised dark>Login</v-btn>
        </router-link>
    </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {

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
