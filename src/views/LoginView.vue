<template>
    <div>
        <h2>Inicio de Sesión</h2>
        <input type="email" v-model="email" placeholder="Correo Electronico">
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click="signIn">Iniciar Sesión</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <router-link to="/signin">¿No tienes cuenta? ¡Regístrate!</router-link>
    </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '../auth.js'

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        }
    },
    methods: {
        async signIn() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                const redirectPath = this.$route.query.redirect || '/'
                this.$router.push(redirectPath)
            } catch (error) {
                this.errorMessage = error.message;
            }
        }
    }
}
</script>