<script setup>
import { defineProps, ref } from 'vue';

import Footer from '../components/Footer.vue';



// Define the props being passed from App.vue
const props = defineProps({
  shoppingList: Array,
  addToCart: Function,
});

// Reactive array to store quantities for each item
const quantities = ref(props.shoppingList.map(() => 1));

// Function to increment the quantity for an item
function incrementQuantity(index) {
  quantities.value[index]++;
}

// Function to decrement the quantity for an item
function decrementQuantity(index) {
  if (quantities.value[index] > 1) {
    quantities.value[index]--;
  }
}

// Function to add an item to the cart with the selected quantity
function addToCartWithQuantity(item, index) {
  const itemWithQuantity = {
    ...item,
    quantity: quantities.value[index], // Selected quantity
    totalPrice: item.price * quantities.value[index], // Multiplying price by quantity
  };
  props.addToCart(itemWithQuantity);
  // Reset the quantity to 1 after adding to the cart (optional)
  quantities.value[index] = 1;
}
</script>

<template>
  <div class="landing-all d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-start p-5 flex-column flex-md-row">
      <div class="land-text d-flex flex-column w-100">
        <h1 class="w-75 m-0">Bringing You Fresh, Local, and Quality Groceries to Nourish Your Family Every Day!</h1>
        <p class="w-75 m-0 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dicta dolor ratione repellat exercitationem reiciendis! Est laudantium, sit nostrum dolorem omnis ducimus ipsa eos commodi a rerum architecto culpa? Vero.</p>
        <button class="d-flex mt-4 w-50 justify-content-center align-items-center m-0" @click.ctrl="onClick">VIEW OUR ASSORTMENT</button>
      </div>
      <div class="land-ph d-flex w-100">
        <img class="d-none d-md-flex w-100 rounded-5" src="../assets/landing.jpg" alt="">
      </div>
    </div>
  </div>

  <div class="products d-flex justify-content-center align-items-center ">
    <ul class="product-list d-flex justify-content-center align-items-center p-0">
      <li class="list-unstyled mx-3 p-4 border rounded-4" v-for="(item, index) in shoppingList" :key="index">
        <img class="product-image
        " :src="item.photo" :alt="item.title" />
        <p>{{ item.title }}</p>  <p>${{ item.price.toFixed(2) }}</p>
  
        <div class="d-flex flex-column justify-content-center align-items-start">
          <!-- Decrement Button -->
          <div class="inc m-0">
            <button @click="decrementQuantity(index)">-</button>
      
            <!-- Display the quantity -->
            <span class="px-2">{{ quantities[index] }}</span>
      
            <!-- Increment Button -->
            <button class="dec" @click="incrementQuantity(index)">+</button>
          </div>
    
          <!-- Add to Cart Button -->
          <button class="mt-2 px-2 rounded-3 mx-0" @click="addToCartWithQuantity(item, quantities[index])">Add to Cart</button>
        </div>
      </li>
    </ul>
  </div>
  <div class="ab-us d-flex justify-content-center align-items-center my-5">
    <div class="ab-all d-flex justify-content-center align-items-center flex-column flex-md-row">
      <div class="l mt-5">

        <div class="top d-flex">
          <div class="d-flex justify-content-center align-items-center flex-column text-center w-50">
            <img src="../assets/ab-us-1.png" alt="">
            <p>Only the best quality produce</p>
          </div>
  
          <div class="d-flex justify-content-center align-items-center flex-column text-center w-50">
            <img src="../assets/ab-us-2.png" alt="">
            <p>Ethically sourced and clean produce</p>
          </div>
        </div>

        <div class="bottom d-flex mt-5">
          <div class="d-flex justify-content-center align-items-center flex-column text-center w-50">
            <img src="../assets/ab-us-3.png" alt="">
            <p>Delivery in Tbilisi will be available soon</p>
          </div>
  
          <div class="d-flex justify-content-center align-items-center flex-column text-center w-50">
            <img src="../assets/ab-us-4.png" alt="">
            <p>Payment by credit card</p>
          </div>
        </div>
      </div>
      <div class="r">
        <h1>About Us</h1>
        <p>We strive to provide the highest quality and freshest produce from certified growers around the world. Quality is a state of mind at Fresh Culinair, with which we seek to discover, introduce and provide fresh produce that meet the highest standards. Our passion for fresh produce is only matched by our desire to share our products and knowledge with you. All with the purpose to delight and nourish our customers with healthy and delicious food.</p>
        <button>VIEW OUR ASSORTMENT</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 1400px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Space between boxes */
  margin: 0;
  width: 100%;
}
li {
  flex: 1 1 200px;
  max-width: 200px;
}
.product-image {
  width: 100px;
  aspect-ratio: 3/2;
  object-fit: contain;
  margin: 0;
}
button {
  outline: none;
  border: 1px solid black;
}
.product-list {
  font-size: 20px;
}
.inc button {
  width: 32px;
  border-radius: 50%;
}
.l {
  flex: 1 1 300px;
}
.l img {
  width: 70px;
  aspect-ratio: 3/2;
  object-fit: contain;
}
.l p {
  width: 57%;
}
.r {
  width: 50%;
}
</style>