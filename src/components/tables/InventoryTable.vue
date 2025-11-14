<script setup>
const props = defineProps({
    products: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['delete']);

const onDelete = id => {
    emit('delete', id);
};
</script>

<template>
    <div class="container">
        <h1>Inventory</h1>

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
                    <td>{{ product.actualQuantity }}</td>
                    <td>{{ product.minimumQuantity }}</td>
                    <td><button @click="onDelete(product.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
