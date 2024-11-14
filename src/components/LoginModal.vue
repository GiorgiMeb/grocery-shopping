<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <h3>Login</h3>
        <form @submit.prevent="login">
          <div>
            <label for="username">Username</label>
            <input type="text" v-model="username" id="username" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" v-model="password" id="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true
    }
  });
  const emit = defineEmits();
  
  const username = ref('');
  const password = ref('');
  
  const login = () => {
    console.log("Logging in with", username.value, password.value);
    emit('close'); // Emit an event to close the modal
  };
  
  const closeModal = () => {
    emit('close'); // Emit an event to close the modal
  };
  </script>
  
  <style scoped>
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    max-width: 100% !important;
  }
  .modal-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 1000 !important; /* Added z-index */
}

.modal {
  display: flex;
  background-color: white;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center !important;
  align-items: center !important;
  border-radius: 10px;
  z-index: 1001 !important; /* Added z-index */
  flex-direction: column !important;
}
  </style>
  