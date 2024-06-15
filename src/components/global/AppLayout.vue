<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <v-main class="pt-10">
        <app-navbar />
        <slot></slot>
        <AppFooter />
      </v-main>
    </v-layout>
  </div>
</template>
<script>
import AppNavbar from "./AppNavbar.vue";
import CartDrawer from "./CartDrawer.vue";
import AppFooter from "./AppFooter.vue";
export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    AppNavbar,
    CartDrawer,
    AppFooter,
  },
};
</script>
