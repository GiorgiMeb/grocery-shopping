<script setup>

</script>

<template>
    <div class="f-all d-flex justify-content-center align-items-center">
        <img class="logo d-flex" src="../assets/logo.webp" alt="">
        <div class="links">
        <li class="nav-item d-flex">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        </div>
        <div class="contact w-25">
            <img class="media" src="../assets/facebook.png" alt="">
            <img class="media" src="../assets/instagram.png" alt="">
            <img class="media" src="../assets/whatsup.png" alt="">
        </div>
        <div class="num">
            <p>+995 599 70 94 87</p>
            <p>+995 599 40 56 93</p>
            <button>E-MAIL US</button>
        </div>
    </div>
</template>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 1400px;
}
.f-all {
    flex: 1 1 300px;
}
.logo {
    width: 10%;
}
.media {
    width: 30%;
    aspect-ratio: 3/2;
    object-fit: contain;
    margin: 0;
}
li {
    list-style: none;
}
</style>