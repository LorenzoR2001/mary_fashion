<template>
  <div
    class="relative z-10 w-full"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-none">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg text-left transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div
              class="w-full h-screen flex justify-center items-center relative"
            >
              <div
                class="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-myblack border-r-primary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
