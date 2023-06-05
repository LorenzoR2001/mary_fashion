<template>
  <div class="w-full h-full lg:mt-4 md:mt-12 mt-24">
    <div class="w-full grid lg:grid-cols-2">
      <div
        class="flex flex-col w-full justify-center lg:pl-24 lg:px-0   py-12 px-4 items-center pb-8"
      >
        <h1 class="text-myred font-bold font-mytext text-6xl">Mary Fashion</h1>
        <div class="flex w-full flex-wrap text-center">
          <p class="text-mywhite mt-4 font-mytext text-2xl">
            Truccatrice professionale e studentessa dell'accademia di trucco
            <a
              target="_blank"
              class="hover:text-myred"
              href="https://accademialilianapaduano.it/?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0zAVrUB-zy1zLuFFQyTlTfrUu-FhBcLAnJeqoLueGGAQ6SJkvaJs0waAri4EALw_wcB"
              ><u>Liliana Paduano</u></a
            >. <b>Il viso è una tela dove poter creare un dipinto.</b>
          </p>
          <div class="w-full mt-20 gap-x-4 grid grid-cols-2">
            <ButtonPrimary text="Servizi" />
            <ButtonSecondary text="Prenota" />
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <img class="lg:w-[75%] w-100" src="../assets/mary.jpg" />
      </div>
    </div>
       <div class="w-full"><Services /></div>
   </div>
</template>

<script setup>
import ButtonPrimary from "./elements/ButtonPrimary.vue";
import ButtonSecondary from "./elements/ButtonSecondary.vue";
import Services from "./Services.vue";
</script>
