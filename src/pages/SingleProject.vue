<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null
        }
    },
    created(){
        this.getSingleProject();
    },
    methods:{
        getSingleProject() {
            axios.get(`${this.store.baseUrl}/api/project/${this.$route.params.slug}`).then((response) => {
                /* console.log(response.data.results); */
                this.project= response.data.results;
            })
        }
    }
}
</script>

<template lang="">
  <h1>{{project.title}}</h1>
  <h2>{{project.date}}</h2>
  <h2>{{project.author}}</h2>
</template>

<style lang="scss"></style>