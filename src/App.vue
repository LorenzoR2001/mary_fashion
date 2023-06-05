<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import router from "./router";
import Navbar from "./components/Navbar.vue";
 
 
</script>

<template>
  <Navbar />
  <div class="flex h-screen  w-full  bg-myblack absolute min-h-[3500px]">
    <router-view> </router-view>
  </div>
</template>
