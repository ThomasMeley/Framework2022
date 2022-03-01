import {

createRouter
createWebhistory
}
from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
    {path: '/', name: 'home',component: HomeView},
    {path : '/about', name: 'about',compenent : About}
    ]
})

export default