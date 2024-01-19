<script setup lang="ts">
import { ref } from "vue";
import Menu from "primevue/menu";

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

const items = ref<MenuItem[]>([
  {
    label: "Scoring & Info",
    icon: "pi pi-fw pi-info-circle",
    route: "/info",
  },
]);
</script>


<template>
  <div class="card relative z-2">
    <Menu :model="items">
      <template #item="{ label, item, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
          <a :href="routerProps.href" v-bind="props.action" @click="routerProps.navigate">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
          </a>
        </router-link>
      </template>
    </Menu>
  </div>
</template>
