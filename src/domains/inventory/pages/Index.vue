<script setup>
import InventoryTable from '../../../components/tables/InventoryTable.vue';
import {getProducts, deleteProduct} from '../store.ts';

const products = getProducts;

const handleDelete = id => {
    deleteProduct(id);
};
</script>

<template>
    <div class="container">
        <InventoryTable :products="products" @delete="handleDelete" />
    </div>
</template>

<style scoped></style>
