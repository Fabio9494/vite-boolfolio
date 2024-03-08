import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppMain from './pages/AppMain.vue';
import Project from './components/Project.vue';
import SingleProject from './pages/SingleProject.vue';
import AppContactUs from './pages/AppContactUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/Main',
            name: 'appMain',
            component: AppMain
        },
        {
            path: '/main/:slug',
            name: 'SingleProject',
            component: SingleProject
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: AppContactUs
        }
    ]
});

export { router }