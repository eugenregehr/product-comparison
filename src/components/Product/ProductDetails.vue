<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Column from 'primevue/column';
import { productDetailBasics, productDetailAdvances, ProductDetailListItem } from '../../services/productListDetails';
import { ref, watch } from 'vue';
import type { Product } from './ProductType';

const props = defineProps<{
    category: string,
    product: Product,
    advanced: boolean
}>()

const visible = ref<boolean>(false);
const advancedDetails = ref<ProductDetailListItem[]>([]);

watch(props.product, (newVal) => {
    if (newVal && props.advanced) {
        advancedDetails.value = productDetailAdvances[props.category].list.map(item => {
            return {
                ...item,
                dimension: `${props.product[item.title as keyof Product]} ${item.dimension}`
            };
        });
    }
}, { immediate: true })

</script>

<template>
    <div class="flex items-center gap-1 text-sm font-semibold">
        <span v-for="(detail, index) in productDetailBasics[category]" :key="detail.title">
            {{ product[detail.title as keyof Product] }} {{ detail.dimension }} <span
                v-if="index + 1 != productDetailBasics[category].length">•</span>
        </span>
        <div v-if="advanced">
            <span>• </span>
            <span class="cursor-pointer" @click="visible = true" style="color: var(--primary-color)">Details</span>
        </div>
    </div>
    <div v-if="advanced">
        <Dialog v-model:visible="visible" modal :style="{ width: '50vw' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <DataTable :value="advancedDetails">
                <Column field="title" :header="productDetailAdvances[category].title"></Column>
                <Column field="dimension"></Column>
            </DataTable>
        </Dialog>

    </div>
</template>

