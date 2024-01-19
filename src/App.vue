<script setup lang="ts">
import { ref, onMounted } from "vue";
import logoSrc from "./assets/img/logo.png";
import FilterProducts from "./components/FilterProducts/FilterProducts.vue";
import type { Product } from "./components/Product/ProductType";
import ProductSkeleton from "./components/Product/ProductSkeleton.vue";

const productsRef = ref<Product[]>([]);
const logo = ref<string>(logoSrc);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://airtable-proxy-five.vercel.app/fetchData"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    productsRef.value = (await response.json()) as Product[];
  } catch (error: any) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
});

</script>

<template>
  <div style="background-color: var(--surface-ground)">
    <div class="max-w-6xl mx-auto p-4">
      <div class="md:flex gap-7">
        <div class="w-48">
          <img :src="logo" alt="Fitsupp Logo" class="w-full -mt-6 mb-2" />
        </div>
        <div>
          <h1 style="color: var(--text-color)" class="m-0 mb-5">
            Top Amazon Products: <br />Comparison of the main features.
          </h1>
          <FilterProducts :products="productsRef" v-if="productsRef.length > 0" />
          <div class="mt-32" v-else>
            <div class="p-4 w-full" v-for="(_, key) in new Array(10).fill({})" :key="key">
              <ProductSkeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
