<script setup lang="ts">
import InventoryTable from '../../../components/tables/InventoryTable.vue';
import {getProducts, deleteProduct} from '../store';

const products = getProducts;

const handleDelete = (id: number) => {
    deleteProduct(id);
};
</script>

<template>
    <div class="container">
        <InventoryTable :products="products" @delete="handleDelete" />
    </div>
</template>

<style scoped></style>
