import {createRouter, createWebHistory} from 'vue-router';
import {inventoryRoutes} from '../domains/inventory/routes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...inventoryRoutes],
});

export default router;
