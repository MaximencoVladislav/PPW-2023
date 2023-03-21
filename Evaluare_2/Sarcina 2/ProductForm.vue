<template>
  <form @submit.prevent="addProduct">
    <label for="product">Produs:</label>
    <select id="product" v-model="selectedProduct">
      <option v-for="product in products" :value="product">{{ product.name }}</option>
    </select>
    <label for="price">Preț:</label>
<input type="number" id="price" v-model.number="price" min="0" step="0.01">

<label for="quantity">Cantitate:</label>
<input type="number" id="quantity" v-model.number="quantity" min="1">

<button type="submit">Adaugă produs</button>
<button type="button" @click="resetForm">Reset</button>
