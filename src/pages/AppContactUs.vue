<script>
import AppContactForm from '../components/AppContactForm.vue';
    export default {
        name: 'Contacts',
        components: {
            AppContactForm,

        },
    }
</script>
<template lang="">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div>
                        Contatti
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <strong>Indirizzo:</strong> <br><br>
                            <strong>Città</strong>
                        </div>
                        <div class="col-12">
                            <strong>Telefon:</strong> 651651651<br><br>
                            <strong>Email</strong> ver@mail.com
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <AppContactForm/>
                </div>
            </div>
        </div>
</template>
<style lang="">
    
</style>