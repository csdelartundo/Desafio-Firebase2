<template>
    <div>
        <h2>Inicio de Sesion</h2>
        <input type="email" v-model="email" placeholder="Correo Electronico">
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click="signIn">Iniciar Sesion</button>
        <router-link to="/registro">No tienes cuenta? Registrate!</router-link>
    </div>
</template>
<script>
import { auth, signInWithEmailAndPassword } from '../auth.js'

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async signIn() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                const redirectPath = this.$route.query.redirect || '/'
                this.$router.push(redirectPath)
            } catch (e) {
                console.error("Error al iniciar sesion", e)
            }
        }
    }
}
</script>