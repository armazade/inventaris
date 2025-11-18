<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
    <div>
        <nav>
            <RouterLink to="/index">Inventory</RouterLink>
            <RouterLink to="/product/create">Create Product</RouterLink>
            <RouterLink to="/purchase">Purchase</RouterLink>
        </nav>
    </div>
    <RouterView />
</template>

<style scoped>
nav {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
}

nav a {
    text-decoration: none;
    color: #42b883;
    padding: 0.5rem 1rem;
}

nav a:hover {
    background: #f0f0f0;
    border-radius: 4px;
}

nav a.router-link-active {
    font-weight: bold;
    background: #e8f5f0;
    border-radius: 4px;
}
</style>
