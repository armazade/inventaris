<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {addProduct, InventoryProduct} from '../store';
import ProductForm from '../components/forms/ProductForm.vue';

const router = useRouter();

const product = ref<InventoryProduct>({id: 0, name: '', actualQuantity: 0, minimumQuantity: 0});

const onSave = (newProduct: InventoryProduct): void => {
    addProduct(newProduct);
    router.push('/index');
};
</script>

<template>
    <div>
        <h2>Create Product</h2>
        <ProductForm :product="product" @save="onSave" />
    </div>
</template>

<style scoped></style>
