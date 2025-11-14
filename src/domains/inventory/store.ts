import {computed, ref, type Ref} from 'vue';

// Types
export interface InventoryProduct {
    id: number;
    name: string;
    actualQuantity: number;
    minimumQuantity: number;
}

// State
export const products: Ref<InventoryProduct[]> = ref([
    {id: 1, name: 'Item A', actualQuantity: 10, minimumQuantity: 5},
    {id: 2, name: 'Item B', actualQuantity: 20, minimumQuantity: 10},
    {id: 3, name: 'Item C', actualQuantity: 15, minimumQuantity: 7},
    {id: 4, name: 'Item D', actualQuantity: 30, minimumQuantity: 15},
    {id: 5, name: 'Item E', actualQuantity: 25, minimumQuantity: 12},
    {id: 6, name: 'Item F', actualQuantity: 5, minimumQuantity: 3},
    {id: 7, name: 'Item G', actualQuantity: 12, minimumQuantity: 6},
]);

// Getters
export const getProducts = computed<InventoryProduct[]>(() => products.value);
export const getProductById = (id: number) =>
    computed<InventoryProduct | undefined>(() => products.value.find(product => product.id === id));

// Actions
export const addProduct = (product: InventoryProduct): void => {
    products.value.push(product);
};

export const updateProduct = (updatedProduct: InventoryProduct): void => {
    const index = products.value.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
        products.value[index] = updatedProduct;
    }
};

export const deleteProduct = (id: number): void => {
    const index = products.value.findIndex(product => product.id == id);
    if (index !== -1) {
        products.value.splice(index, 1);
    }
};
