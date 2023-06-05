<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import router from "./router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <Navbar />
  <div class="flex flex-col h-screen justify-between w-full  bg-myblack absolute min-h-[6500px]">
    <div><router-view> </router-view></div>
    <div><Footer/></div>
  </div>
</template>
