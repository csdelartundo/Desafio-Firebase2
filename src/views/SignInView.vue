<template>
    <div>
        <h2>Registro</h2>
        <input type="email" v-model="email" placeholder="Correo Electronico">
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click="register">Registrarse</button>

    </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from '../auth'

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async register() {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
                console.log("Usuario creado", userCredential)
                this.email = ''
                this.password = ''
            } catch (error) {
                console.error(error)
            }

        }
    }
}
</script>

<style scoped></style>