import Overview from './pages/Index.vue';
import Create from './pages/Create.vue';

export const inventoryRoutes = [
    {
        path: '/index',
        name: 'inventory-index',
        component: Overview,
    },
    {
        path: '/create',
        name: 'product-create',
        component: Create,
    },
];
