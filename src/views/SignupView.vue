<script>
    import { createUserWithEmailAndPassword, auth } from '../auth.js';
    
    export default {
      data(){
        return{
          email:'',
          password:''
        };
      },
      methods: {
        async register(){
          try{
            const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
            
            console.log("Usuario creado", userCredential);
            
            this.email = '';
            this.password = '';
          }
          catch(error){
            console.error(error);
          }
        }
      },
    }
</script>

<template>
    <div>
        <h2>Registrarse</h2>
        <input v-model="email" type="email" placeholder="Correo Electrónico">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button @click="register">Registrarse</button><br>
        <!-- <label>(La contraseña debe incluir al menos 6 caracteres)</label> -->
    </div>
</template>