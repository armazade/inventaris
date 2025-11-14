<script setup>
import {ref, watchEffect} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {getProductById, updateProduct} from '../store.js';
import ProductForm from '../../../components/forms/ProductForm.vue';

const route = useRoute();
const router = useRouter();

const product = ref({name: '', actualQuantity: 0, minimumQuantity: 0});

watchEffect(() => {
    const id = route.params.id;
    const foundProduct = getProductById(id).value;
    if (foundProduct) {
        product.value = {...foundProduct};
    }
});

const onSave = updatedProduct => {
    const id = route.params.id;
    updateProduct(updatedProduct);
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
