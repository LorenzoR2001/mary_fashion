<template>
  <div class="w-full bg-myblack2">
    <div class="multicolor">
      <h1
        class="text-center flex pt-48 justify-center bg-myblack2 text-primary font-mytext text-5xl"
      >
        I miei lavori
      </h1>

      <div
        class="w-full lg:px-[20%] md:px-24 px-6 sm:px-20 grid grid-cols-2 lg:grid-cols-3 gap-x-6 pt-8"
      >
        <img
          class="object-cover scale-75 w-80 h-80 hover:scale-90 ease-in duration-500"
          src="../assets/work1.jpg"
        />

        <img
          class="object-cover scale-75 w-80 h-80 hover:scale-90 ease-in duration-500"
          src="../assets/work2.jpg"
        />

        <img
          class="object-cover scale-75 w-80 h-80 hover:scale-90 ease-in duration-500"
          src="../assets/work3.jpg"
        />

        <img
          class="object-cover scale-75 w-80 h-80 hover:scale-90 ease-in duration-500"
          src="../assets/work4.jpg"
        />

        <img
          class="object-cover scale-75 h-80 w-80 hover:scale-90 ease-in duration-500"
          src="../assets/work5.jpg"
        />

        <img
          class="object-cover scale-75 h-80 w-80 hover:scale-90 ease-in duration-500"
          src="../assets/work6.jpg"
        />
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.multicolor {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to top,
    #e8bda1 0%,
    #e8bda1 50%,
    #161616 50%,
    #161616 100%
  );
}
</style>
