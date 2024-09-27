<template>
  <div>
    <h1>Esta es mi App con Firebase</h1>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <router-link v-if="!isLoggedIn" to="/signup">Registro</router-link>
    <router-link v-if="isLoggedIn" to="/">Home</router-link>
    <button v-if="isLoggedIn" @click="logout">Cerrar Sesion</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { auth, signOut, onAuthStateChanged } from './auth.js'

export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created(){

    onAuthStateChanged(auth, (user) =>{
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
      //otras dos formas mas cortas de hacer lo mismo
      //this.isLoggedIn = user ? true : false;
      //this.isLoggedIn = !!user
    })
  },
  methods: {
    async logout(){
      await signOut(auth);
      this.isLoggedIn = false;
      this.$router.push('/login');  // redireccionar a la página principal al cerrar sesion
    }
  }
}
</script>

<style scoped></style>