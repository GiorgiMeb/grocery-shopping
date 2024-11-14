<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';


import LoginModal from './components/LoginModal.vue';
import breadImage from './assets/bread.webp';
import eggsImage from './assets/eggs.webp';
import grapeImage from './assets/grape.jpg';
import potatoImage from './assets/potato.webp';
import tomatoImage from './assets/tomato.jpg';

const shoppingList = ref([
  { 
    title: "Bread",
    photo: breadImage,
    price: 1.99
  },
  { 
    title: "Eggs",
    photo: eggsImage,
    price: 5.89 
  },
  { 
    title: "Grape",
    photo: grapeImage,
    price: 3.59 
  },
  { 
    title: "Potato",
    photo: potatoImage,
    price: 2.89 
  },
  { 
    title: "tomato",
    photo: tomatoImage,
    price: 7.89 
  },
  
]);


const cart = ref([]);

function addToCart(item) {
  const existingItem = cart.value.find(cartItem => cartItem.title === item.title);

  if (existingItem) {
    existingItem.quantity++;
    existingItem.totalPrice += item.price;
  } else {
    cart.value.push({ ...item, quantity: 1, totalPrice: item.price });
  }
}

function removeFromCart(index) {
  cart.value.splice(index, 1);
}

const showLoginModal = ref(false); // Control modal visibility

</script>

<template>
  <nav class="navbar navbar-expand-lg  d-flex justify-content-center ">
  <div class="container-fluid justify-content-between align-items-center m-0 p-0 mx-5">
    <a class="navbar-brand m-0" href="#"><img class="logo" src="./assets/logo.webp" alt=""></a>
    <button class="navbar-toggler m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav p-3 m-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <div class="d-flex m-0">
          <div class="d-flex">
            <li class="nav-item">
              <router-link to="/cart">Cart ({{ cart.length }})</router-link>
            </li>
          </div>
          <div class="log-in">
            <button @click="showLoginModal = true">Login</button>
            <LoginModal 
            :isVisible="showLoginModal" 
            @close="showLoginModal = false" 
            />
          </div>
        </div>
      </ul>
    </div>
  </div>
</nav>
<RouterView :shoppingList="shoppingList" :cart="cart" :addToCart="addToCart" :removeFromCart="removeFromCart" />
</template>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 1400px;
}
 a {
  text-decoration: none;  
}
li {
  list-style: none;
}
ul {
  width: 100%;
}
nav {
  width: 100% !important;
}
.nav-item a {
  color: black;
  padding: 20px;
  font-size: 20px;
}
.logo {
  width: 130px;
}
</style>

