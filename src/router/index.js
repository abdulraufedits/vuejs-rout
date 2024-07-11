import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/Home.vue'
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})

export default router