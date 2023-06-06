<template>
  <nav
    class="z-[99] w-full fixed px-4 py-4 flex justify-between items-center bg-white shadow-lg"
  >
    <div class="w-full justify-end flex">
      <a class="text-3xl font-bold leading-none">
        <img src="../assets/logo.png" class="w-24" />
      </a>
      <div class="lg:hidden w-full flex justify-end">
        <button class="navbar-burger flex items-center text-blue-600 p-3">
          <svg
            class="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div class="w-full justify-end items-center hidden lg:flex">
        <ul
          class="hidden absolute lg:flex lg:mx-8 lg:items-end lg:w-auto lg:space-x-6"
        >
          <li>
            <a
              class="text-sm hover:text-gray-500"
              :class="$route.hash === '#home' ? 'text-primary font-bold' : 'text-myblack'"
              href="#home"
              >Home</a
            >
          </li>
          <li class="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          
          <li>
            <a class="text-sm  hover:text-gray-500" :class="$route.hash === '#services' ? 'text-primary font-bold' : 'text-myblack'" href="#services"
              >Servizi</a
            >
          </li>
          <li class="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li><li>
            <a class="text-sm "  :class="$route.hash === '#works' ? 'text-primary font-bold  ' : 'text-myblack'" href="#works">I miei lavori</a>
          </li>
          <li class="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a :class="$route.hash === '#pricelist' ? 'text-primary font-bold ' : 'text-myblack'"
              class="text-sm   hover:text-gray-500"
              href="#pricelist"
              >Listino</a
            >
          </li>
          <li class="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a class="text-sm  hover:text-gray-500" href="#contact" :class="$route.hash === '#contact' ? 'text-primary font-bold' : 'text-myblack'"
              >Contatti</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup></script>
