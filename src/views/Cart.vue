<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  cart: Array,
  removeFromCart: Function,
});

function removeItem(index) {
  props.removeFromCart(index);
}
</script>

<template>
 <ul>
    <li v-for="(item, index) in cart" :key="index">
      <img class="product-image" :src="item.photo" :alt="item.title" />
      {{ item.title }} - ${{ item.totalPrice.toFixed(2) }} 
      <button @click="removeItem(index)">Remove</button>
    </li>
  </ul>
</template>

<style>
.product-image {
  display: flex;
}
</style>