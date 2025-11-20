<script setup lang="ts">
import {computed} from 'vue';
import {getProducts} from '../store';
import InventoryTable from '../components/tables/InventoryTable.vue';

const products = computed(() => getProducts.value.filter(product => product.actualQuantity < product.minimumQuantity));
</script>

<template>
    <h1>Purchase</h1>
    <div class="container">
        <InventoryTable :products="products" />
    </div>
</template>

<style scoped></style>
