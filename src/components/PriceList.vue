<template>
  <div
    class="w-full px-12 md:px-36 bg-myblack xl:px-72 2xl:px-96 lg:px-48 pt-24 pb-12 flex flex-col justify-center"
  >
    <h1
      class="text-center flex justify-center text-primary font-mytext text-5xl"
    >
      Listino prezzi Make-up
    </h1>

    <div class="container mx-auto py-24">
      <table class="w-full bg-primary">
        <thead class="bg-primary border-0">
          <tr>
            <th class="text-start py-4 px-4 text-lg font-semibold">Servizio</th>
            <th class="text-start py-4 px-4 text-lg font-semibold">Prezzo</th>
          </tr>
        </thead>
        <tbody class="  ">
          <tr
            v-for="(service, index) in servicesWorks"
            :class="index > 0 ? 'border' : 'border-x'"
          >
            <td class="text-mywhite py-2 px-4 bg-myblack">
              {{ service?.description }}
            </td>
            <td class="text-mywhite py-2 px-4 bg-myblack">
              {{ service?.price }} &euro;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import services from "../services";
import { ref, onMounted, reactive } from "vue";

const servicesWorks = reactive([]);

onMounted(() => {
  getServices();
});

function getServices() {
  let params = {
    element: "services",
    function: "get",
  };
  services
    .getApi(params)
    .then((response) => {
      servicesWorks.push(...response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
