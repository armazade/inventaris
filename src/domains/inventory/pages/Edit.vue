<script setup lang="ts">
import {ref, watchEffect} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {getProductById, updateProduct, type InventoryProduct} from '../store';
import ProductForm from '../../../components/forms/ProductForm.vue';

const route = useRoute();
const router = useRouter();

const product = ref<InventoryProduct>({
    id: 0,
    name: '',
    actualQuantity: 0,
    minimumQuantity: 0,
});

watchEffect(() => {
    const id = Number(route.params.id);
    const foundProduct = getProductById(id).value;
    if (foundProduct) {
        product.value = {...foundProduct};
    }
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
        <ProductForm :product="product" @save="onSave" />
    </div>
</template>

<style scoped></style>
