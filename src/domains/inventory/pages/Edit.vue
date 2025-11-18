<script setup lang="ts">
import {computed} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {getProductById, updateProduct, type InventoryProduct} from '../store';
import ProductForm from '../../../components/forms/ProductForm.vue';

const route = useRoute();
const router = useRouter();

const product = computed(() => {
    const id = Number(route.params.id);
    return getProductById(id).value;
});

const onSave = (updatedProduct: InventoryProduct): void => {
    const id = Number(route.params.id);
    updateProduct({...updatedProduct, id});
    router.push('/index');
};
</script>

<template>
    <div>
        <h2>Edit Product Item</h2>
        <ProductForm v-if="product" :product="product" @save="onSave" />
    </div>
</template>

<style scoped></style>
