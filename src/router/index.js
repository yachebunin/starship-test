import { createRouter, createWebHistory } from 'vue-router';
import StarshipsList from '@/views/StarshipsList.vue';
import StarshipDetail from '@/views/StarshipDetail.vue';

const routes = [
    {
        path: '/starships',
        name: 'StarshipsList',
        component: StarshipsList,
    },
    {
        path: '/starship/:id',
        name: 'StarshipDetail',
        component: StarshipDetail,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
