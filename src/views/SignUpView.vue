<template>
    <div>
        <h2>Registro</h2>
        <input type="email" v-model="email" placeholder="Correo Electronico">
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click="register">Registrarse</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from '../auth'

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        }
    },
    methods: {
        async register() {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
                console.log("Usuario creado", userCredential)
                this.$router.push('/');  // Redirige al Home tras registrarse
            } catch (error) {
                this.errorMessage = error.message;  // Muestra mensaje de error si falla
            }
        }
    }
}
</script>