import { createRouter, createWebHistory } from "vue-router";
import ExampleComponent from "../components/ExampleComponent.vue";
import SignIn from "../auth/SignIn.vue";

const routes = [
    {
        path: '/',
        component: SignIn
    },
    {
        path: '/dashboard',
        component: ExampleComponent 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;