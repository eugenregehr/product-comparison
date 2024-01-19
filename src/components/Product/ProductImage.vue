<script setup lang="ts">

defineProps({
    picture_url: String,
    alt_name: String
})
</script>

<template>
    <div class="bg-white rounded-lg">
        <img class="w-36 xl:w-40 mx-auto aspect-square object-contain" :src="picture_url" :alt="alt_name" />
    </div>
</template>

