<script>
    import { auth, signInWithEmailAndPassword } from '../auth.js';

    export default {
        name: 'LoginView',
        data(){
            return{
                email:'',
                password:''
            };
        },
        methods: {
            async signIn(){
                try{
                    await signInWithEmailAndPassword(auth, this.email, this.password);
                    const redirectPath = this.$route.query.redirect || '/';
                    this.$router.push(redirectPath);
                }
                catch(error){
                    console.error("Error al iniciar sesión", error.message);
                }
            }
        },
    }
</script>
    
<template>
    <div>
        <h2>Iniciar Sesión</h2>
        <input v-model="email" type="email" placeholder="Correo Electrónico">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button @click="signIn">Iniciar Sesión</button>
    </div>
</template>