import Overview from './pages/Index.vue';
import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';

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
    {
        path: '/product/edit/:id',
        name: 'product-edit',
        component: Edit,
    },
];
