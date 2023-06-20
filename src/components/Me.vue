<template>
  <div class="bg-no-repeat	bg-cover bg-center bg-[url('./assets/sfondo.webp')]">
    <div class="container   mx-auto py-32 lg:px-32">
      <div
        class="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0"
      >
        <!--Main Col-->
        <div
          id="profile"
          class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white   mx-6 lg:mx-0"
        >
          <div class="p-4 md:p-12 text-center lg:text-left">
            <!-- Image for mobile view-->
            <img
              class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              src="../assets/mary4.jpg"
            />

            <h1 class="text-3xl font-bold pt-8 lg:pt-0">Maria Federico</h1>
            <div
              class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-primary opacity-25"
            ></div>
            <p
              class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"
            >
              <svg
                class="h-4 fill-current text-myblack pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
                ></path>
              </svg>
             Make-up artist
            </p>
            
            <p class="pt-8 text-sm">
              
Ciao, sono Maria, una Make-Up Artist appassionata e creativa. Sin da giovane ho coltivato una grande passione per l'arte della bellezza, trasformando il mio amore per i colori e i pennelli in una carriera gratificante. Specializzata in occasioni speciali, matrimoni e sfilate di moda, il mio obiettivo è creare look personalizzati che mettano in risalto la bellezza naturale di ogni individuo.
            </p>
  

            <div
              class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between"
            ></div>

            <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
          </div>
        </div>

        <!--Img Col-->
        <div class="w-full lg:w-2/5">
          <!-- Big profile image for side bar (desktop) -->
          <img
            src="../assets/mary2.jpg"
            class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
          <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
        </div>

        <!-- Pin to top right corner -->
        <div class="absolute top-0 right-0 h-12 w-18 p-4">
          <button class="js-change-theme focus:outline-none">🌙</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
</script>
