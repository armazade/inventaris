<script setup lang="ts">
import {InventoryProduct} from '../../store';
import {RouterLink} from 'vue-router';

defineProps<{
    products: InventoryProduct[];
}>();

const emit = defineEmits<{
    delete: [id: number];
}>();

const onDelete = (id: number): void => {
    emit('delete', id);
};
</script>

<template>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Actual Quantity</th>
                    <th>Minimum Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.name">
                    <td>{{ product.name }}</td>
                    <td>
                        <input type="number" v-model.number="product.actualQuantity" min="0" />
                    </td>
                    <td>{{ product.minimumQuantity }}</td>
                    <td><RouterLink :to="`/product/edit/${product.id}`">Edit</RouterLink></td>
                    <td><button @click="onDelete(product.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
