<script>
import Project from '../components/Project.vue';
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'appMain',
    components: {
        Project
    },
    data() {
        return {
            store,
            projects: []
        }
    },
    created() {
        this.getProject();
    },
    methods: {
        getProject() {
            axios.get(`${store.baseUrl}/api/project`).then((response) => {
                /* console.log(response.data.results); */
                this.projects = response.data.results;
            })
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="project-container">
            <h1>PROGETTI</h1>
            <Project v-for="project, index in projects" :key="index" :project="project" />
        </div>
       
    </div>
</template>

<style lang="scss">
.project-container {
    background-color: rgb(82, 82, 82);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    h1 {
        width: 100%;
        padding: 20px 40px;
    }
}

header {
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>