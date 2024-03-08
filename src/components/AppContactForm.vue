<script>
import { store } from '../store.js';
import axios from 'axios';
    export default {
        name: 'contactForm',
        data(){
            return{
                store,
                name:"",
                surname:"",
                email:"",
                phone:"",
                content:"",
                success: false,
                
            }
        },
        methods:{
            sendForm(){
                const data = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    phone: this.phone,
                    content: this.content
                }

                axios.post(`${this.store.baseUrl}/api/contacts`,data).then((response) => {
                    if (response.data.success){
                        this.name = "";
                        this.surname = "";
                        this.email = "";
                        this.phone = "";
                        this.content = "";

                        this.success = true;
                    }
                });
            }
        }
    }
</script>
<template lang="">
    <div>
        <div class="row" v-if="success">
            <div class="col-12">
                <div class="alert alert-success">
                    Email inviata con successo
                </div>
            </div>

        </div>
        <form @submit.prevent="sendForm()" method="POST" class="mt-5">
            <div class="row">
                <div class="col-6">
                    <label for="name" class="control-label">Nome</label>
                    <input type="text" placeholder="Nome" id="name" class="form-control" v-model="name" required>
                </div>
                <div class="col-6">
                    <label for="surname" class="control-label">Cognome</label>
                    <input type="text" placeholder="Cognome" id="surname" class="form-control" v-model="surname" required>
                </div>
                <div class="col-6">
                    <label for="email" class="control-label">Email</label>
                    <input type="text" placeholder="Email" id="email" class="form-control" v-model="email" required>
                </div>
                <div class="col-6">
                    <label for="phone" class="control-label">Telefono</label>
                    <input type="text" placeholder="Telefono" id="phone" class="form-control" v-model="phone" required>
                </div>
                <div class="col-12">
                    <label for="content" class="control-label">Messaggio</label>
                    <textarea name="content" id="content" cols="50" rows="10" class="form-control" v-model="content" required></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-sm btn-success my-4" type="submit">Invia</button>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="">
    
</style>