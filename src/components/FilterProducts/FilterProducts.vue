<script setup lang="ts">
import { ref, watch } from "vue";
import AutoComplete from "primevue/autocomplete";
import useProductFilter from "../../hooks/useProductFilter";
import useFilterSuggestions from "../../hooks/useFilterSuggestions";
import useDisplayAttributes from "../../hooks/useDisplayAttributes";
import FilteredProductList from "./FilteredProductList.vue";
import type { Product } from "../Product/ProductType"

const props = defineProps<{
  products: Product[],
}>();

const slug: string = "whey"; // should be slug in future
const selectValue = ref({ name: "Whey", value: "whey" });
const inputValue = ref([]);

const { filteredProducts } = useProductFilter(props.products, 'whey', inputValue);
const { suggestions, updateSuggestions } = useFilterSuggestions(
  slug,
  inputValue
);
const { displayAttributes } = useDisplayAttributes(slug, inputValue);

const search = (event: any) => {
  updateSuggestions();
  if (event.query) {
    suggestions.value = suggestions.value.filter((item) =>
      item.toLowerCase().includes(event.query.toLowerCase())
    );
  }
};

watch(selectValue, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    inputValue.value = [];
  }
});

</script>

<template>
  <div>
    <div class="flex flex-col items-center mb-4 pb-4">
      <div class="flex flex-col items-center gap-4 mt-4 md:mt-0 md:flex-row justify-between md:items-start md:w-full">
        <AutoComplete placeholder="Filter Values" v-model="inputValue" dropdown multiple :suggestions="suggestions"
          @complete="search" />
      </div>
      <FilteredProductList class="mt-4" :category="slug" :products="filteredProducts" :attributes="displayAttributes" />
    </div>
  </div>
</template>

<style>
.p-autocomplete-multiple-container {
  min-width: 22rem;
}
</style>
