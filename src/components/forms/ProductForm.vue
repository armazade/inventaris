<script setup lang="ts">
import {useRouter} from 'vue-router';
import {InventoryProduct} from '../../domains/inventory/store';

const {product} = defineProps<{product: InventoryProduct}>();

const emit = defineEmits(['save']);
const router = useRouter();

const onSubmit = () => {
    emit('save', product);
};

const onCancel = () => {
    router.push({name: 'inventory.index'});
};
</script>

<template>
    <div>Add and Edit Product Item</div>
    <form @submit.prevent="onSubmit">
        <div>
            <label for="name">Product Name:</label>
            <input id="name" v-model="product.name" type="text" required />
        </div>
        <div>
            <label for="quantity">Quantity:</label>
            <input id="quantity" v-model.number="product.actualQuantity" type="number" required />
        </div>
        <div>
            <label for="minimumQuantity">Minimum Quantity:</label>
            <input id="minimumQuantity" v-model.number="product.minimumQuantity" type="number" required />
        </div>
        <button type="submit">Save</button>
        <button type="button" @click="onCancel">Cancel</button>
    </form>
</template>

<style scoped></style>
