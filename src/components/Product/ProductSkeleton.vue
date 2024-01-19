<script setup lang="ts">
import Skeleton from 'primevue/skeleton';

</script>

<template>
    <div class="flex flex-col xl:flex-row items-center gap-4">
        <Skeleton height="10rem" width="13rem"></Skeleton>
        <div class="flex flex-col justify-between w-full md:flex-row items-center md:items-start">
            <div class="flex flex-col justify-between">
                <div class="flex flex-col items-center md:items-start gap-1">
                    <Skeleton width="3rem" class="mb-2"></Skeleton>
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                </div>
            </div>
            <div class="flex flex-col items-center md:items-end gap-2">
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton width="8rem" height="2rem"></Skeleton>
            </div>
        </div>
    </div>
</template>

