<script setup lang="ts">
import Card from "primevue/card";
import DataView from "primevue/dataview";
import ProductItem from "../Product/Product.vue";
import type { Product } from "../Product/ProductType"
import ProductSkeleton from "../Product/ProductSkeleton.vue";

defineProps<{
  products: Product[],
  category: string,
  attributes: Array<any>,
}>();

</script>

<template>
  <Card>
    <template #content>
      <DataView :value="new Array(10).fill({})" v-if="products.length === 0">
        <template #list>
          <div class="p-4 w-full">
            <ProductSkeleton />
          </div>
        </template>
      </DataView>
      <DataView :value="products" v-else>
        <template #list="slotProps: { items: Product[] }">
          <div class="p-4 w-full" v-for="product in slotProps.items" :key="product.id">
            <ProductItem :attributes="attributes" :product="(product)" :category="category" />
          </div>
        </template>
      </DataView>
    </template>
  </Card>
</template>
