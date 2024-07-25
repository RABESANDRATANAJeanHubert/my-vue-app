<template>
    <div id="chatbot" class="chatbot">
        <div v-if="!chatbotVisible" @click="toggleChatbot" class="chatbot-icon">
            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m-5 8l-3 3V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H7z"/>
</svg>
</div>
      <div v-if="chatbotVisible" class="chatbot-window">
        <header class="chatbot-header">
          <h3 class="text-black">Chat with me!</h3>
          <button @click="toggleChatbot">X</button>
        </header>
        <div class="chatbot-messages">
          <div class="pr-4 h-[474px]" style="min-width: 100%; display: table;">
      <!-- Chat Message AI -->
      <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
          class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="1.5"
              viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
              </path>
            </svg></div>
        </span>
        <p class="leading-relaxed"><span class="block font-bold text-gray-700">AI </span>Hello! Unfortunately, our live chat service is temporarily unavailable at the moment. We apologize for any inconvenience this may cause
        </p>
      </div>
    </div>
        </div>
        <footer class="chatbot-footer">
          <input v-model="message" @keyup.enter="sendMessage" placeholder="Type a message...">
          <button @click="sendMessage" class="text-black">Send</button>
        </footer>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
const chatbotVisible = ref(false)
const message = ref('')
const messages = ref([])
const toggleChatbot = ()  =>   chatbotVisible.value = !chatbotVisible.value
const sendMessage = () => {
 if (message.value.trim()) {
    messages.value.push({ text: message.value, fromUser: true })
     message.value = ''
 }
  }
  </script> 
  <style scoped>
  .chatbot {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  .chatbot-icon {
    color: black;
    padding: 10px;
    border-radius: 50%;
    height: 80px;
    width: 70px;
    cursor: pointer;
  }
  .chatbot-window {
    width: 300px;
    height: 400px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
  }
  .chatbot-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: rgb(228, 228, 236);
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .chatbot-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
  }
  .chatbot-footer {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
  }
  .chatbot-footer input {
    flex: 1;
    padding: 5px;
  }
  .chatbot-footer button {
    background-color: rgb(228, 228, 236);
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  .chatbot-icon {
        width: 50px;  /* Adjust width as needed */
        height: 50px; /* Adjust height as needed */
        background-color: #000000; /* Change background color as needed */
        border-radius: 50%;  /* Makes the background circular */
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s ease; /* Smooth background color transition */
    }

    .chatbot-icon svg {
        width: 50px; /* Adjust SVG size as needed */
        height: 60px; /* Adjust SVG size as needed */
        fill: white; /* Ensure the icon is white */
    }
  </style>
  