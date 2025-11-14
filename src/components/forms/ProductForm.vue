<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['save']);

const onSubmit = () => {
    emit('save', props.product);
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
    </form>
</template>

<style scoped></style>
