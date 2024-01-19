<script setup lang="ts">
import Button from "primevue/button";
import Tag from "primevue/tag";
import ProductDetails from "./ProductDetails.vue";
import ProductImage from "./ProductImage.vue";
import type { Product } from "./ProductType";

defineProps<{
  product: Product,
  category: string,
  attributes: Array<any>,
}>();

</script>

<template>
  <div class="flex flex-col xl:flex-row items-center gap-4">
    <ProductImage :picture_url="product.picture_url" :alt_name="product.name" />
    <div class="flex flex-col justify-between w-full md:flex-row items-center md:items-start">
      <div class="flex flex-col justify-between">
        <div class="flex flex-col items-center md:items-start gap-1">
          <span class="font-semibold">{{ product.brand }}</span>
          <div class="text-2xl font-bold">{{ product.name }}</div>
          <ProductDetails :category="category" :product="product" advanced />
          <div class="flex flex-wrap gap-1 mt-2">
            <div v-for="attribute in attributes" :key="attribute">
              <Tag :value="`${attribute.displayName} ${product[attribute.key as keyof Product] === true
                ? ''
                : Math.round(product[attribute.key as keyof Product] as number * 10) / 10
                } ${attribute.dimension}`" rounded />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center md:items-end gap-2">
        <span class="text-xl font-semibold">{{ product.price }}€/Kg</span>
        <a :href="product.url" target="_blank" rel="noopener noreferrer">
          <Button icon="pi pi-shopping-cart" severity="warning" label="Amazon" size="small" />
        </a>
      </div>
    </div>
  </div>
</template>
