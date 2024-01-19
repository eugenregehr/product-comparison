<script setup lang="ts">
import Card from "primevue/card";
import DataView from "primevue/dataview";
import ProductItem from "../Product/Product.vue";
import type { Product } from "../Product/ProductType"

defineProps<{
  products: Product[],
  category: string,
  attributes: Array<any>,
}>();

</script>

<template>
  <Card>
    <template #content>
      <DataView :value="products" data-key="products">
        <template #list="slotProps: { items: Product[] }">
          <div class="p-4 w-full" v-for="product in slotProps.items" :key="product.id">
            <ProductItem :attributes="attributes" :product="(product)" :category="category" />
          </div>
        </template>
      </DataView>
    </template>
  </Card>
</template>
